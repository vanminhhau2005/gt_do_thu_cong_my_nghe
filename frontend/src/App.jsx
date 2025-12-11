import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
//import BackgroundSpacer from "./components/BackgroundSpacer";
import Search from "./pages/Search";
import Main from "./components/Main";
import Statistics from "./components/Statistics";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// placeholder components
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
    <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      {/*<BackgroundSpacer />*/}

      <main style={{ margin: 0, padding: 0, marginTop: "var(--header-height, 0)" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Statistics />
                <Products />
                <Testimonials />
                <Footer />
              </>
            }
          />

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
