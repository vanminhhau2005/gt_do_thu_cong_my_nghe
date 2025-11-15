// controllers/productController.js
import Product from '../models/Product.js'; 
import asyncHandler from 'express-async-handler'; // Cần npm install express-async-handler

// @desc    Lấy tất cả sản phẩm
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Lấy 1 sản phẩm theo ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }
});

// @desc    Tạo sản phẩm mới (Dành cho Admin)
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body); // Tạo sản phẩm từ req.body

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error('Dữ liệu sản phẩm không hợp lệ');
  }
});

// @desc    Cập nhật sản phẩm (Dành cho Admin)
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true, runValidators: true }
  );

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }
});

// @desc    Xóa sản phẩm (Dành cho Admin)
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (product) {
    res.json({ message: 'Đã xóa sản phẩm thành công' });
  } else {
    res.status(404);
    throw new Error('Sản phẩm không tìm thấy');
  }
});

export { 
  getProducts, 
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};