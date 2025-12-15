// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"; // lightweight logger
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config({ override: true }); // load .env early (override shell env to avoid stale values)

// Quick debug for env
if (!process.env.MONGO_URI) {
  console.warn("⚠️  MONGO_URI is not set in .env");
} else {
  console.log("✅ MONGO_URI is set");
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Optional: request logger in dev
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// --- Mount API routes BEFORE serving any static SPA build ---
// This avoids returning index.html for API paths (the cause of "Unexpected token '<'...")
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

// Test route (optional)
app.get('/', (req, res) => {
  res.send("🎨 API is running and connected to MongoDB!");
});

/*
  If you serve a React build from this server, make sure to:
  1) Mount API routes above (already done)
  2) Then serve static build
     import path from 'path';
     app.use(express.static(path.join(__dirname, 'client', 'build')));
     app.get('*', (req, res) => {
       res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
     });
*/

// 404 handler for unknown API routes (keeps JSON error flow)
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Error handler -> always returns JSON (no HTML)
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    // show stack only when not production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Graceful start: wait for DB connect before listening
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(); // wait until connected (or process.exit inside connectDB)
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (env: ${process.env.NODE_ENV || 'development'})`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();

// Catch unhandled rejections / exceptions to avoid silent failures
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  // optional: shutdown gracefully
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
