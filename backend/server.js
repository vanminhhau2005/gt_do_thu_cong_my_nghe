// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// Đảm bảo file db.js tồn tại trong thư mục config/
import connectDB from "./config/db.js"; 
import productRoutes from './routes/productRoutes.js'; // ⬅️ IMPORT CÓ .JS

dotenv.config(); // load .env
console.log("DEBUG: MONGO_URI =", process.env.MONGO_URI);
connectDB(); // kết nối MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🎨 API is running and connected to MongoDB!");
});

// ⬅️ SỬ DỤNG ROUTE SẢN PHẨM
app.use('/api/products', productRoutes);


// MIDDLEWARE XỬ LÝ LỖI (Quan trọng cho asyncHandler)

// Xử lý lỗi 404 cho các route không tồn tại
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));