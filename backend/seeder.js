// seeder.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/products.js';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();

const importData = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await connectDB();

    console.log("🗑️ Clearing old products...");
    await Product.deleteMany();

    console.log("📦 Importing new products...");
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
    console.log("🔗 Connecting to MongoDB...");
    await connectDB();

    console.log("🗑️ Destroying all products...");
    await Product.deleteMany();

    console.log('🗑️ Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

// Chạy seeder: node seeder.js -d (xoá) hoặc node seeder.js (import)
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
