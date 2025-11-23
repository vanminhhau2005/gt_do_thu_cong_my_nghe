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

// @desc GET tất cả sản phẩm
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).lean();
  res.json(normalize(products));
});

// @desc GET 1 sản phẩm theo ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).lean();

  if (!product) {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }

  res.json(normalize(product));
});

// @desc Tạo sản phẩm mới (Admin)
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  const obj = product.toObject();
  res.status(201).json(normalize(obj));
});

// @desc Cập nhật sản phẩm (Admin)
const updateProduct = asyncHandler(async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updated) {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }

  res.json(normalize(updated.toObject()));
});

// @desc Xóa sản phẩm (Admin)
const deleteProduct = asyncHandler(async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);

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
