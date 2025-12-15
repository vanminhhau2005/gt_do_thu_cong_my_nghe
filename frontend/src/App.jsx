import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import LienHe from "./pages/LienHe";
import GioiThieu from "./pages/GioiThieu";
import HomeHero from "./components/HomeHero";
import Categories from "./components/Categories";
import DecorProducts from "./components/DecorProducts";
import KitchenProducts from "./components/KitchenProducts";
import OfficeProducts from "./components/OfficeProducts";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location?.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    if (!id) return;

    const timeout = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = (() => {
        try {
          const raw = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue("--header-height")
            .trim();
          const parsed = Number.parseFloat(raw);
          return Number.isFinite(parsed) ? parsed : 96;
        } catch {
          return 96;
        }
      })();
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [location]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] m-0 p-0">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main
        style={{
          margin: 0,
          padding: 0,
          marginTop: "var(--header-height, 0)", // tránh bị Header che
        }}
      >
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <HomeHero />
                <Categories />
                <DecorProducts />
                <KitchenProducts />
                <OfficeProducts />
                <AboutSection />
                <Footer />
              </>
            }
          />

          {/* ABOUT PAGE */}
          <Route path="/gioi-thieu" element={<GioiThieu />} />

          {/* BACKWARD COMPAT */}
          <Route path="/gt" element={<Navigate to="/gioi-thieu" replace />} />

          {/* SEARCH PAGE */}
          <Route path="/search" element={<Search />} />

          {/* COLLECTION PAGE */}
          <Route path="/collection" element={<Collection />} />

          {/* CONTACT PAGE */}
          <Route path="/lienhe" element={<LienHe />} />

          <Route path="/news" element={<Navigate to="/lienhe" replace />} />

          {/* PRODUCT DETAIL PAGE */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* FALLBACK PAGE */}
          <Route
            path="*"
            element={<div className="p-8 text-center text-xl">Trang không tìm thấy</div>}
          />
        </Routes>
      </main>
    </div>
  );
}
