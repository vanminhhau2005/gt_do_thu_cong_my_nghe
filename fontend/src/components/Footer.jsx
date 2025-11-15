// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";  // <-- import file CSS riêng

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <p>&copy; {new Date().getFullYear()} GT Đồ Thủ Công Mỹ Nghệ. Mọi quyền được bảo lưu.</p>
      <p>Thiết kế bởi Van Minh Hau | Dùng React.js, Node.js & MongoDB</p>
    </footer>
  );
};

export default Footer;
