// Header.jsx
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Header() {
  const productMenuRef = useRef();
  const collectionMenuRef = useRef();
  const mobileMenuRef = useRef();
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open);
    if (!open) {
      gsap.to(mobileMenuRef.current, { height: 'auto', opacity: 1, duration: 0.3, display: 'block' });
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, display: 'none' });
    }
  };

  const showMenu = (menuRef) => {
    gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.3, display: 'block' });
  };

  const hideMenu = (menuRef) => {
    gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.3, display: 'none' });
  };

  return (
    <header className="bg-amber-900 text-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <img 
            src="/src/assets/logo1.png" 
            alt="GT Đồ Thủ Công" 
            className="w-10 h-10 rounded-full object-cover" 
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="text-xl font-bold tracking-wide">GT Đồ Thủ Công</div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 relative">
          <a href="#hero" className="hover:text-amber-100 transition">Trang chủ</a>
          <a href="#about" className="hover:text-amber-100 transition">Giới thiệu</a>

          <div
            className="relative"
            onMouseEnter={() => showMenu(productMenuRef)}
            onMouseLeave={() => hideMenu(productMenuRef)}
          >
            <button className="hover:text-amber-100 transition flex items-center gap-1">
              Sản phẩm <i className="fa fa-chevron-down text-xs"></i>
            </button>
            <div
              ref={productMenuRef}
              className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden h-0 opacity-0 hidden min-w-max"
            >
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition border-b">Sản phẩm 1</a>
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition border-b">Sản phẩm 2</a>
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition">Sản phẩm 3</a>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => showMenu(collectionMenuRef)}
            onMouseLeave={() => hideMenu(collectionMenuRef)}
          >
            <button className="hover:text-amber-100 transition flex items-center gap-1">
              Bộ sưu tập <i className="fa fa-chevron-down text-xs"></i>
            </button>
            <div
              ref={collectionMenuRef}
              className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden h-0 opacity-0 hidden min-w-max"
            >
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition border-b">Mây</a>
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition border-b">Tre</a>
              <a href="#!" className="block px-4 py-2 hover:bg-amber-50 transition">Gỗ</a>
            </div>
          </div>

          <a href="#!" className="hover:text-amber-100 transition">Tin tức</a>
          <a href="#!" className="hover:text-amber-100 transition">Liên hệ</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="hover:text-amber-100 transition text-lg"><i className="fa fa-search"></i></button>
          <button className="hover:text-amber-100 transition text-lg"><i className="fa fa-shopping-cart"></i></button>
        </div>

        {/* Hamburger cho mobile */}
        <button
          className="md:hidden z-50 hover:text-amber-100 transition"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden bg-amber-800 text-white overflow-hidden h-0 opacity-0"
      >
        <a href="#hero" className="block px-4 py-2 hover:bg-amber-700 transition border-b border-amber-700">Trang chủ</a>
        <a href="#about" className="block px-4 py-2 hover:bg-amber-700 transition border-b border-amber-700">Giới thiệu</a>
        <a href="#!" className="block px-4 py-2 hover:bg-amber-700 transition border-b border-amber-700">Sản phẩm</a>
        <a href="#!" className="block px-4 py-2 hover:bg-amber-700 transition border-b border-amber-700">Bộ sưu tập</a>
        <a href="#!" className="block px-4 py-2 hover:bg-amber-700 transition border-b border-amber-700">Tin tức</a>
        <a href="#!" className="block px-4 py-2 hover:bg-amber-700 transition">Liên hệ</a>
      </div>
    </header>
  );
}
