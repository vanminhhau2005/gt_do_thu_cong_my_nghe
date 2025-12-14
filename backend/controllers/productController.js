// backend/controllers/productController.js
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';

// helper: chuyển _id sang string
const normalize = (doc) => {
  if (!doc) return doc;
  if (Array.isArray(doc)) {
    return doc.map(d => ({ ...d, _id: String(d._id) }));
  }
  return { ...doc, _id: String(doc._id) };
};

// Nếu hệ thống dùng ObjectId cho _id thì validate id trước
const validateObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// whitelist fields (ngăn mass-assignment)
const pickAllowed = (source, allowed) => {
  const out = {};
  for (const key of allowed) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      out[key] = source[key];
    }
  }
  return out;
};

const ALLOWED_FIELDS = ['_id', 'title', 'category', 'name', 'image', 'description', 'origin', 'process', 'price', 'rating', 'sold'];

// @desc GET tất cả sản phẩm (thêm pagination + filter đơn giản)
const getProducts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, category, q, sort } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (q) filter.$text = { $search: q }; // nếu bạn tạo text index trên title/description

  const skip = (Number(page) - 1) * Number(limit);

  const query = Product.find(filter).lean().skip(skip).limit(Number(limit));
  if (sort) query.sort(sort);

  const products = await query.exec();
  res.json(normalize(products));
});

// @desc GET 1 sản phẩm theo ID
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  // Nếu bạn dùng ObjectId, bật validate:
  // if (!validateObjectId(id)) {
  //   res.status(400);
  //   throw new Error('ID không hợp lệ');
  // }

  const product = await Product.findById(id).lean();
  if (!product) {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }
  res.json(normalize(product));
});

// @desc Tạo sản phẩm mới (Admin)
const createProduct = asyncHandler(async (req, res) => {
  // whitelist dữ liệu để tránh client gửi field không mong muốn
  const data = pickAllowed(req.body, ALLOWED_FIELDS);

  try {
    const product = await Product.create(data);
    const obj = product.toObject ? product.toObject() : product;

    // location: nếu router mount tại /api/products thì baseUrl = /api/products
    const base = req.baseUrl || '/api/products';
    res.location(`${base.replace(/\/$/, '')}/${obj._id}`);

    res.status(201).json(normalize(obj));
  } catch (err) {
    // handle duplicate key (ví dụ _id trùng)
    if (err && err.code === 11000) {
      res.status(409);
      throw new Error(`Conflict: duplicate key ${JSON.stringify(err.keyValue)}`);
    }
    throw err; // để asyncHandler xử lý tiếp
  }
});

// @desc Cập nhật sản phẩm (Admin)
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;

  // if (!validateObjectId(id)) {
  //   res.status(400);
  //   throw new Error('ID không hợp lệ');
  // }

  const data = pickAllowed(req.body, ALLOWED_FIELDS);

  const updated = await Product.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true } // trả document Mongoose
  );

  if (!updated) {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }

  res.json(normalize(updated.toObject()));
});

// @desc Xóa sản phẩm (Admin)
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }

  res.json({ message: 'Đã xóa sản phẩm thành công' });
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
