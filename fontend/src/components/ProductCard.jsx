import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link
        to={`/product/${product._id || product.id}`}
        className="product-link"
      >
        <div className="product-image-container">
          <img
            src={
              product.image ||
              "https://via.placeholder.com/400x300?text=Handicraft+Product"
            }
            alt={product.name || "Sản phẩm thủ công"}
          />
        </div>
        <div className="product-info">
          <h3>{product.name || "Sản phẩm chưa có tên"}</h3>
          <div className="product-category">
            {product.category || "Chưa có danh mục"}
          </div>
          <div className="product-price">
            {product.price != null
              ? `${Number(product.price).toLocaleString()} VNĐ`
              : "Liên hệ"}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
