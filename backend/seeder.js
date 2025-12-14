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
    await Product.deleteMany({});

    console.log("📦 Importing new products...");
    // ordered: false -> tiếp tục chèn nếu gặp duplicate key
    await Product.insertMany(products, { ordered: false });

    console.log('✅ Data Imported Successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error importing data:', error);
    try {
      await mongoose.disconnect();
    } catch (e) {
      // ignore
    }
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await connectDB();

    console.log("🗑️ Destroying all products...");
    await Product.deleteMany({});

    console.log('🗑️ Data Destroyed Successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error destroying data:', error);
    try {
      await mongoose.disconnect();
    } catch (e) {
      // ignore
    }
    process.exit(1);
  }
};

// CLI: node seeder.js -d  (destroy)   or   node seeder.js  (import)
if (process.argv.includes('-d')) {
  destroyData();
} else {
  importData();
}
