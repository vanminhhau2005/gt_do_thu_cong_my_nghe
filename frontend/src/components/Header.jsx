import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.from(navRef.current?.querySelectorAll("a") || [], {
      y: -10,
      opacity: 0,
      stagger: 0.07,
      duration: 0.5,
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Tìm kiếm:", searchTerm);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 px-6 py-4 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Tên thương hiệu */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/logo1.png"
            className="w-10 h-10 rounded-full border border-white/20"
            alt="logo"
          />
          <h1 className="text-white text-xl font-bold tracking-wide">
            Thủ Công Mỹ Nghệ VN
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 text-white/90">
          <nav ref={navRef} className="flex items-center gap-6 text-white/90">
            <a href="#about" className="flex items-center gap-1">
              <i className="bi bi-info-circle"></i> Giới Thiệu
            </a>
            <a href="#products" className="flex items-center gap-1">
              <i className="bi bi-box-seam"></i> Sản Phẩm
            </a>
            <a href="#contact" className="flex items-center gap-1">
              <i className="bi bi-envelope"></i> Liên Hệ
            </a>
            <a href="#order" className="flex items-center gap-1">
              <i className="bi bi-cart"></i> Đặt Hàng
            </a>
          </nav>

          {/* Ô tìm kiếm Desktop */}
          <form onSubmit={handleSearch} className="ml-4 relative flex items-center">
            <i className="bi bi-search absolute left-2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-7 pr-2 py-1 rounded text-black"
            />
          </form>
        </div>

        {/* Nút mở Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex justify-center items-center bg-white/20 rounded-full text-white text-2xl"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-black/90 rounded-lg py-4 flex flex-col items-center gap-3 z-50 relative animate-slideDown">
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded flex items-center gap-1"
            href="#about"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bi bi-info-circle"></i> Giới Thiệu
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded flex items-center gap-1"
            href="#products"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bi bi-box-seam"></i> Sản Phẩm
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded flex items-center gap-1"
            href="#contact"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bi bi-envelope"></i> Liên Hệ
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded flex items-center gap-1"
            href="#order"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bi bi-cart"></i> Đặt Hàng
          </a>

          {/* Ô tìm kiếm Mobile */}
          <form onSubmit={handleSearch} className="w-full px-6 mt-2 relative flex items-center">
            <i className="bi bi-search absolute left-2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-7 pr-2 py-1 rounded text-black"
            />
          </form>
        </div>
      )}
    </header>
  );
}
