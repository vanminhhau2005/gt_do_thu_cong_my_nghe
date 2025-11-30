// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Đảm bảo MONGO_URI đã được đặt trong file .env
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`thành công: ${conn.connection.host}`);
  } catch (error) {
    console.error("lỗi:", error.message);
    process.exit(1); 
  }
};

export default connectDB;