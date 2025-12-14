// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("❌ MONGO_URI chưa được thiết lập trong .env");
    throw new Error("MONGO_URI not set");
  }

  try {
    // Không log toàn bộ URI (tránh lộ mật khẩu)
    console.log("🔗 Connecting to MongoDB Atlas (host preview):", (new URL(uri)).host);

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      // các tuỳ chọn khác nếu cần
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    mongoose.connection.on("disconnected", () => console.warn("⚠️ MongoDB disconnected"));
    mongoose.connection.on("reconnected", () => console.log("🔁 MongoDB reconnected"));
    return conn;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    // show debug only in dev
    if (process.env.NODE_ENV !== "production") console.error(err);
    throw err;
  }
};

export default connectDB;
