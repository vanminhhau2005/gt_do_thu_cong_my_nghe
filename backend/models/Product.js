import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    origin: { type: String },
    process: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number },
    sold: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema, 'do thu cong');

export default Product;
