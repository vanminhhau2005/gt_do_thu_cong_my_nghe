// routes/productRoutes.js
import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js'; // ⬅️ Đã thêm .js

// Route GET và POST (Thêm mới)
router.route('/')
    .get(getProducts)           
    .post(createProduct);       

// Route GET, PUT, DELETE theo ID
router.route('/:id')
    .get(getProductById)        
    .put(updateProduct)         
    .delete(deleteProduct);     

export default router;