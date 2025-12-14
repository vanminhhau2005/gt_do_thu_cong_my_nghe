// backend/routes/productRoutes.js
import express from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import sampleProducts from '../data/products.js';

const router = express.Router();

// Helper: kiểm tra nếu mongoose đã kết nối
const dbIsConnected = () => {
  // 1 = connected, 2 = connecting, 0 = disconnected, 3 = disconnecting
  return mongoose.connection && mongoose.connection.readyState === 1;
};

// GET /api/products - Lấy tất cả sản phẩm
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Nếu DB đã kết nối -> dùng DB
    if (dbIsConnected()) {
      try {
        // Nếu bạn chỉ cần plain objects, dùng .lean()
        const products = await Product.find({}).lean();

        // Nếu muốn fallback sample chỉ khi DB rỗng, giữ nguyên logic:
        if (products && products.length > 0) {
          return res.json(products);
        }

        // Nếu DB trống, quyết định: trả [] hoặc fallback sample.
        // Hiện mình fallback sample (mặc định dev). Bạn có thể đổi bằng env var.
        if (process.env.USE_SAMPLE_DATA === 'true') {
          return res.json(sampleProducts);
        }

        // Nếu không dùng sample, trả mảng rỗng
        return res.json([]);
      } catch (error) {
        console.warn('Không thể truy vấn MongoDB, chuyển sang dữ liệu mẫu:', error.message);
        // Nếu muốn gửi sample khi DB lỗi:
        if (process.env.USE_SAMPLE_DATA === 'true') {
          return res.json(sampleProducts);
        }
        // Hoặc trả lỗi 500
        res.status(500);
        throw new Error('Database query error');
      }
    }

    // Nếu DB chưa kết nối -> fallback sample (theo biến môi trường)
    if (process.env.USE_SAMPLE_DATA === 'true') {
      return res.json(sampleProducts);
    }

    // Nếu không cho phép sample, trả 503 Service Unavailable
    res.status(503).json({ message: 'Service Unavailable - database not connected' });
  })
);

// GET /api/products/:id - Lấy chi tiết 1 sản phẩm
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    // Nếu DB đã kết nối -> thử lấy từ DB
    if (dbIsConnected()) {
      try {
        // Nếu bạn dùng ObjectId, uncomment validate sau:
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //   res.status(400);
        //   throw new Error('ID không hợp lệ');
        // }

        const product = await Product.findById(id).lean();
        if (product) {
          return res.json(product);
        }
      } catch (error) {
        console.warn('Không thể truy vấn MongoDB:', error.message);
        // continue to fallback
      }
    }

    // fallback sang sampleProducts (theo biến môi trường)
    if (process.env.USE_SAMPLE_DATA === 'true') {
      const fallback = sampleProducts.find((item) => item._id === id);
      if (fallback) {
        return res.json(fallback);
      }
    }

    // Không tìm thấy
    res.status(404);
    throw new Error('Product not found');
  })
);

export default router;
