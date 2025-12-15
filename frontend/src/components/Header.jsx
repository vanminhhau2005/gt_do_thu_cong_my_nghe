import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const pathname = location?.pathname || "/";
  const hash = location?.hash || "";
  const isHomeActive = pathname === "/" && !hash;
  const isIntroActive = pathname === "/gioi-thieu" || pathname === "/gt" || (pathname === "/" && hash === "#main");
  const isContactActive = pathname === "/lienhe" || (pathname === "/" && hash === "#contact");
  const isProductsActive = pathname === "/collection" || pathname.startsWith("/products/");
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuRef = useRef(null);
  const productsCloseTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!productsOpen) return;
      const el = productsMenuRef.current;
      if (!el) return;
      if (!el.contains(e.target)) setProductsOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [productsOpen]);

  useEffect(() => {
    return () => {
      if (productsCloseTimerRef.current) {
        clearTimeout(productsCloseTimerRef.current);
        productsCloseTimerRef.current = null;
      }
    };
  }, []);

  const openProductsMenu = () => {
    if (productsCloseTimerRef.current) {
      clearTimeout(productsCloseTimerRef.current);
      productsCloseTimerRef.current = null;
    }
    setProductsOpen(true);
  };

  const scheduleCloseProductsMenu = () => {
    if (productsCloseTimerRef.current) {
      clearTimeout(productsCloseTimerRef.current);
    }
    productsCloseTimerRef.current = setTimeout(() => {
      setProductsOpen(false);
      productsCloseTimerRef.current = null;
    }, 350);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      {/* Top contact bar */}
      <div className="bg-lime-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <a
                href="mailto:mynghe_catdang@yahoo.com.vn"
                className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                aria-label="Email mynghe_catdang@yahoo.com.vn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M2.25 6.75A3.75 3.75 0 016 3h12a3.75 3.75 0 013.75 3.75v10.5A3.75 3.75 0 0118 21H6a3.75 3.75 0 01-3.75-3.75V6.75zm3.3-.75a2.25 2.25 0 00-1.99 1.2l7.63 5.09a1.5 1.5 0 001.66 0l7.63-5.09A2.25 2.25 0 0018.45 6H5.55zm15.2 3.03l-6.54 4.36a3 3 0 01-3.32 0L4.35 9.03v8.22A2.25 2.25 0 006.6 19.5h10.8a2.25 2.25 0 002.25-2.25V9.03z" />
                </svg>
                <span className="uppercase tracking-[0.12em]">Email:</span>
                <span className="font-medium">mynghe@gmail.com</span>
              </a>

              <span className="hidden sm:inline-block h-4 w-px bg-white/50" />

              <a
                href="tel:+84977390922"
                className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                aria-label="Hotline 0977 390 922"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M1.5 4.5A3 3 0 014.5 1.5h1.372a1.5 1.5 0 011.415 1.01l1.06 3.183a1.5 1.5 0 01-.633 1.716l-1.2.8a11.25 11.25 0 005.232 5.232l.8-1.2a1.5 1.5 0 011.716-.633l3.183 1.06a1.5 1.5 0 011.01 1.415V19.5a3 3 0 01-3 3h-.75C7.127 22.5 1.5 16.873 1.5 9.75V4.5z" />
                </svg>
                <span className="uppercase tracking-[0.12em]">Hotline:</span>
                <span className="font-semibold">0123 456 789</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-xs">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M11.25 3a.75.75 0 01.75.75V12a.75.75 0 01-1.5 0V3.75a.75.75 0 01.75-.75z" />
                  <path d="M6.03 7.28a.75.75 0 011.06 0l3.41 3.41a.75.75 0 01-1.06 1.06L6.03 8.34a.75.75 0 010-1.06z" />
                  <path d="M18.97 7.28a.75.75 0 010 1.06l-3.41 3.41a.75.75 0 11-1.06-1.06l3.41-3.41a.75.75 0 011.06 0z" />
                  <path d="M12 21c-4.97 0-9-3.582-9-8 0-4.124 3.456-7.5 7.875-7.5.414 0 .75.336.75.75s-.336.75-.75.75C7.3 6 4.5 8.74 4.5 13c0 3.523 3.364 6.5 7.5 6.5s7.5-2.977 7.5-6.5c0-4.26-2.8-7-6.375-7-.414 0-.75-.336-.75-.75s.336-.75.75-.75C17.544 5.5 21 8.876 21 13c0 4.418-4.03 8-9 8z" />
                </svg>
                <span className="uppercase tracking-[0.12em]">Nguồn gốc:</span>
                <span className="font-semibold">100% Tự nhiên</span>
              </div>

              <span className="h-4 w-px bg-white/50" />

              <a href="tel:+84977390922" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 6.75a.75.75 0 01.75.75v4.19l2.28 1.52a.75.75 0 11-.83 1.25l-2.61-1.74A.75.75 0 0111.25 12V7.5a.75.75 0 01.75-.75z" />
                  <path d="M12 1.5c-5.799 0-10.5 4.701-10.5 10.5S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm0 1.5A9 9 0 1121 12a9.01 9.01 0 01-9 9z" />
                </svg>
                <span className="uppercase tracking-[0.12em]">Hỗ trợ 24/7</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`backdrop-blur-sm transition-colors duration-300 ${
          scrolled ? "bg-white/90 shadow-sm border-b border-slate-200" : "bg-white/70 border-b border-slate-200/70"
        }`}
      >
        {/* made container relative so centered nav can be absolute */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-[77px]">
            <div className="flex items-center gap-6">
              <div className="text-slate-900 font-semibold text-xl tracking-wide transform transition hover:scale-105">
                GT Đồ thủ Công Mỹ Nghệ
              </div>

              {/* nav removed from here */}
            </div>

            {/* centered nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="group">
                <span className="text-slate-800 transition-colors duration-200 hover:text-[var(--accent)]">TRANG CHỦ</span>
                <span
                  className={`block h-[2px] bg-lime-600 transition-transform origin-left mt-1 ${
                    isHomeActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              <Link to="/gioi-thieu" className="group">
                <span className="text-slate-800 transition-colors duration-200 hover:text-[var(--accent)]">GIỚI THIỆU</span>
                <span
                  className={`block h-[2px] bg-lime-600 transition-transform origin-left mt-1 ${
                    isIntroActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              <div
                className="relative"
                ref={productsMenuRef}
                onMouseEnter={openProductsMenu}
                onMouseLeave={scheduleCloseProductsMenu}
              >
                <Link
                  to="/collection"
                  className="group"
                  aria-haspopup="menu"
                  aria-expanded={productsOpen}
                  onClick={() => {
                    if (productsCloseTimerRef.current) {
                      clearTimeout(productsCloseTimerRef.current);
                      productsCloseTimerRef.current = null;
                    }
                    setProductsOpen(false);
                  }}
                >
                  <span className="text-slate-800 transition-colors duration-200 hover:text-[var(--accent)]">
                    ĐỒ THỦ CÔNG MỸ NGHỆ
                  </span>
                  <span
                    className={`block h-[2px] bg-lime-600 transition-transform origin-left mt-1 ${
                      isProductsActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {productsOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full mt-3 w-[360px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
                  >
                    <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.4em] text-lime-700">Danh mục</p>
                    </div>

                    <div className="p-2">
                      <Link
                        to="/collection?category=Gốm"
                        className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-slate-50"
                        onClick={() => setProductsOpen(false)}
                        role="menuitem"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-900">Đồ gốm</p>
                          <p className="mt-0.5 text-xs text-slate-500">Gốm sứ thủ công</p>
                        </div>
                        <span className="text-lime-700">→</span>
                      </Link>

                      <Link
                        to="/collection?category=Tre"
                        className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-slate-50"
                        onClick={() => setProductsOpen(false)}
                        role="menuitem"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-900">Đan tre</p>
                          <p className="mt-0.5 text-xs text-slate-500">Tre nứa, luồng ép</p>
                        </div>
                        <span className="text-lime-700">→</span>
                      </Link>

                      <Link
                        to="/collection?category=Giấy"
                        className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-slate-50"
                        onClick={() => setProductsOpen(false)}
                        role="menuitem"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-900">Giấy</p>
                          <p className="mt-0.5 text-xs text-slate-500">Giấy thủ công</p>
                        </div>
                        <span className="text-lime-700">→</span>
                      </Link>

                      <Link
                        to="/collection"
                        className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-slate-50"
                        onClick={() => setProductsOpen(false)}
                        role="menuitem"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-900">Khác</p>
                          <p className="mt-0.5 text-xs text-slate-500">Tất cả sản phẩm</p>
                        </div>
                        <span className="text-lime-700">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/lienhe" className="group">
                <span className="text-slate-800 transition-colors duration-200 hover:text-[var(--accent)]">LIÊN HỆ</span>
                <span
                  className={`block h-[2px] bg-lime-600 transition-transform origin-left mt-1 ${
                    isContactActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/search"
                id="Seach"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 md:px-3 md:py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:border-lime-300 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                aria-label="Tìm kiếm"
              >
                <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gradient-to-br from-lime-600 to-lime-700 text-white shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M10.5 3a7.5 7.5 0 015.964 12.004l3.716 3.716a1 1 0 01-1.415 1.415l-3.716-3.716A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
                  </svg>
                </span>
                <span className="hidden md:inline">Tìm kiếm</span>
              </Link>
              {/* Order Online removed */}
              <button
                aria-expanded={open}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 focus:outline-none focus:ring-2 focus:ring-lime-300"
                onClick={() => setOpen(!open)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform ${open ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel (Order Online removed) */}
        <div className={`md:hidden px-4 pb-4 overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}>
          <nav className="flex flex-col gap-3 text-sm text-slate-800">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`transition duration-200 hover:text-[var(--accent)] ${
                isHomeActive ? "border-l-2 border-lime-600 pl-3" : ""
              }`}
            >
              TRANG CHỦ
            </Link>

            <Link
              to="/#main"
              onClick={() => setOpen(false)}
              className={`transition duration-200 hover:text-[var(--accent)] ${
                isIntroActive ? "border-l-2 border-lime-600 pl-3" : ""
              }`}
            >
              GIỚI THIỆU
            </Link>

            <Link
              to="/collection"
              onClick={() => setOpen(false)}
              className={`transition duration-200 hover:text-[var(--accent)] ${
                isProductsActive ? "border-l-2 border-lime-600 pl-3" : ""
              }`}
            >
              ĐỒ THỦ CÔNG MỸ NGHỆ
            </Link>
            <Link
              to="/lienhe"
              onClick={() => setOpen(false)}
              className={`transition duration-200 hover:text-[var(--accent)] ${
                isContactActive ? "border-l-2 border-lime-600 pl-3" : ""
              }`}
            >
              LIÊN HỆ
            </Link>
            {/* Order Online link removed */}
          </nav>
        </div>
      </div>
    </header>
  );
}
