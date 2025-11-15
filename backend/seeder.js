// seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/products.js'; 
import Product from './models/Product.js'; // ⬅️ Model đã tạo
import connectDB from './config/db.js'; // ⬅️ Kết nối DB

dotenv.config();
// KHÔNG cần gọi connectDB() ở đây, nó sẽ được gọi trong hàm importData

const importData = async () => {
  try {
    // Gọi kết nối DB trước khi thao tác
    await connectDB();
    
    // 1. Xóa tất cả dữ liệu cũ
    await Product.deleteMany();

    // 2. Chèn dữ liệu mới vào
    await Product.insertMany(products);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error importing data: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Gọi kết nối DB trước khi thao tác
    await connectDB();
    
    // 1. Xóa tất cả dữ liệu
    await Product.deleteMany();

    console.log('🗑️ Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

// Lệnh để chạy seeder (VD: node seeder.js -d)
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}