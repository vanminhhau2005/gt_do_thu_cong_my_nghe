import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(
          "Lỗi kết nối Backend. Vui lòng đảm bảo server Node.js đang chạy ở port 5000."
        );
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="center-message">Đang tải sản phẩm...</h2>;
  }

  if (error) {
    return <h2 className="center-message error">{error}</h2>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">
        Khám Phá Thủ Công Mỹ Nghệ Việt
      </h1>

      {products && products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="center-message no-product">
          Không tìm thấy sản phẩm. Hãy thêm dữ liệu mẫu vào MongoDB!
        </h2>
      )}
    </div>
  );
};

export default HomeScreen;
