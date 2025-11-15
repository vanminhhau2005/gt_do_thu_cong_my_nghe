import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductScreen.css";

const ProductScreen = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(`Không tìm thấy sản phẩm có ID: ${id}`);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="center-message">Đang tải chi tiết sản phẩm...</h2>;
  }

  if (error) {
    return <h2 className="center-message error">{error}</h2>;
  }

  if (!product) {
    return <h2 className="center-message">Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div className="product-container">
      <Link to="/" className="back-button">
        &lt; Quay lại Trang Chủ
      </Link>
      <div className="product-content">
        <div className="product-image">
          <img
            src={
              product.image ||
              "https://via.placeholder.com/600x400?text=Handicraft+Detail"
            }
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category">
            Danh mục: <strong>{product.category || "Chưa có"}</strong>
          </p>
          <div className="product-rating">
            ⭐ {product.rating ?? 0} ({product.numReviews ?? 0} đánh giá)
          </div>
          <div className="product-price-container">
            Giá:{" "}
            <span className="product-price">
              {product.price != null
                ? `${Number(product.price).toLocaleString()} VNĐ`
                : "Liên hệ"}
            </span>
          </div>
          <div className="product-stock">
            Tình trạng:{" "}
            {product.countInStock > 0 ? (
              <span className="in-stock">
                Còn hàng ({product.countInStock})
              </span>
            ) : (
              <span className="out-stock">Hết hàng</span>
            )}
          </div>

          <h3 className="description-title">Mô Tả Chi Tiết</h3>
          <p className="product-description">
            {product.description || "Không có mô tả."}
          </p>

          <button
            className="buy-button"
            disabled={product.countInStock === 0}
            onClick={() => alert("Vui lòng liên hệ để mua hàng: +84 ...")}
          >
            Liên hệ mua hàng ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
