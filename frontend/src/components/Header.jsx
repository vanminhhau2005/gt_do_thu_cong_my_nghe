// src/components/Header.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-6 text-white/90"
        >
          <a href="#home">Trang Chủ</a>
          <a href="#products">Giới Thiệu</a>
          <a href="#about">Sản Phẩm</a>
          <a href="#gallery">Bộ Sưu Tập</a>
          <a href="#contact">Tin Tức</a>
          <a href="#nam">Liên Hệ</a>
        </nav>

        {/* Nút mở Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex justify-center items-center bg-white/20 rounded-full text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div
          className="md:hidden mt-2 bg-black/90 rounded-lg py-4 flex flex-col items-center gap-3 z-50 relative animate-slideDown"
        >
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#home"
            onClick={() => setMobileOpen(false)}
          >
            Trang Chủ
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#products"
            onClick={() => setMobileOpen(false)}
          >
            Giới Thiệu
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#about"
            onClick={() => setMobileOpen(false)}
          >
            Sản Phẩm
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#gallery"
            onClick={() => setMobileOpen(false)}
          >
            Bộ Sưu Tập
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#contact"
            onClick={() => setMobileOpen(false)}
          >
            Tin Tức
          </a>
          <a
            className="px-6 py-2 w-full text-center text-white hover:bg-white/20 rounded"
            href="#contact"
            onClick={() => setMobileOpen(false)}
          >
            Liên Hệ
          </a>
        </div>
      )}
    </header>
  );
}
