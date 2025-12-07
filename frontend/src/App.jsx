import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./pages/Search";
import Main from "./components/Main";
// import Products from "./components/Products"; // bỏ comment nếu có file
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// placeholder components cho những route bạn liệt kê (thay bằng component thực tế nếu có)
const Ceramics = () => <div className="p-8">Đồ Gốm (tạm)</div>;
const Fashion = () => <div className="p-8">Thời Trang (tạm)</div>;
const Bamboo = () => <div className="p-8">Đan Tre (tạm)</div>;
const Tool = () => <div className="p-8">Dụng Cụ (tạm)</div>;
const About = () => <div className="p-8">Về chúng tôi (tạm)</div>;
const Store = () => <div className="p-8">Cửa hàng (tạm)</div>;
const Partner = () => <div className="p-8">Đối tác (tạm)</div>;
const Contact = () => <div className="p-8">Liên hệ (tạm)</div>;

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Main />
              <Testimonials />
              <Footer />
            </>
          } />

          <Route path="/search" element={<Search />} />

          {/* category pages */}
          <Route path="/boardgames/*" element={<Ceramics />} />
          <Route path="/nhacua/*" element={<Fashion />} />
          <Route path="/phukien/*" element={<Bamboo />} />
          <Route path="/thoitrang/*" element={<Tool />} />

          {/* other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<div className="p-8">Trang không tìm thấy</div>} />
        </Routes>
      </main>
    </div>
  );
}
