// frontend/src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import menuLogo from "../assets/menu.png";

export default function Header() {
  const logoRef = useRef(null);
  const leftNavRef = useRef([]);
  const rightNavRef = useRef([]);
  const topBarRef = useRef(null);
  const headerRef = useRef(null);
  const navWrapRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const leftNav = [
    { label: "Đồ Gốm", children: ["Strategy", "Family", "Party"], href: "/" },
    { label: "Thời Trang", children: ["Đồ trang trí", "Đồ bếp", "Nội thất nhỏ"], href: "/nhacua" },
    { label: "Đan Tre", children: ["Túi", "Trang sức", "Vật dụng"], href: "/phukien" },
    { label: "Dụng Cụ", children: ["Nam", "Nữ", "Trẻ Em"], href: "/thoitrang" },
  ];

  const rightNav = [
    { label: "Về chúng tôi", href: "/about" },
    { label: "Cửa hàng", href: "/shop" },
    { label: "Đối tác", href: "/partners" },
    { label: "Liên hệ", href: "/contact" },
  ];

  // reset refs mỗi render
  leftNavRef.current = [];
  rightNavRef.current = [];

  const goTo = (href) => {
    if (!href) return;
    window.location.href = href;
  };

  const slugify = (str) =>
    String(str)
      .normalize("NFKD")
      .replace(/[\u0300-\u036F]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const lines = [
    "Một số đồ thủ công mỹ nghệ nổi bật",
    "Khám phá các sản phẩm mới nhất",
    "Thủ công mỹ nghệ Việt Nam, tinh xảo và độc đáo",
    "Sản phẩm thủ công - Quà tặng ý nghĩa cho mọi dịp",
  ];

  useEffect(() => {
    if (logoRef.current)
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );

    const leftEls = leftNavRef.current.filter(Boolean);
    if (leftEls.length)
      gsap.fromTo(
        leftEls,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );

    const topText = topBarRef.current;
    if (topText) {
      topText.style.display = "flex";
      topText.style.alignItems = "center";
      topText.style.justifyContent = "center";
      topText.style.color = "#ffffff";
      topText.style.fontSize = "13px";
      topText.style.fontWeight = "600";
      topText.style.fontStyle = "normal";
      topText.style.letterSpacing = "0.2px";
      topText.style.fontFamily =
        'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';

      let i = 0,
        tid = null;
      const tick = () => {
        topText.textContent = lines[i];
        tid = setTimeout(() => {
          i = (i + 1) % lines.length;
          tick();
        }, 1800);
      };
      tick();
      return () => clearTimeout(tid);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setCompact(y > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;
    if (compact) {
      gsap.to(logoRef.current, { width: 96, height: 96, duration: 0.22, ease: "power2.inOut" });
    } else {
      gsap.to(logoRef.current, { width: 144, height: 144, duration: 0.28, ease: "power2.out" });
    }
  }, [compact]);

  useEffect(() => {
    if (topBarRef.current) {
      if (compact) {
        gsap.to(topBarRef.current, { height: 0, opacity: 0, duration: 0.22, ease: "power2.inOut" });
      } else {
        gsap.to(topBarRef.current, { height: "7vh", opacity: 1, duration: 0.35, ease: "power2.out" });
      }
    }

    if (headerRef.current) {
      if (compact) {
        gsap.to(headerRef.current, { height: 120, top: 0, duration: 0.28, ease: "power2.inOut" });
      } else {
        gsap.to(headerRef.current, { height: "20vh", top: "7vh", duration: 0.35, ease: "power2.out" });
      }
    }
  }, [compact]);

  const handleMouseEnterMenu = (el) => {
    if (!el) return;
    gsap.to(el, { scale: 1.03, color: "#ff7a00", duration: 0.12 });
  };
  const handleMouseLeaveMenu = (el) => {
    if (!el) return;
    gsap.to(el, { scale: 1, color: "#000000", duration: 0.12 });
  };

  const SearchSVG = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar cam */}
      <div
        ref={topBarRef}
        className="w-full bg-orange-700 text-white overflow-hidden"
        style={{
          height: compact ? 0 : "7vh",
          transition: "height .25s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center cursor-default select-none" />
      </div>

      {/* Header trắng ngà, height 20% */}
      <header
        ref={headerRef}
        className="w-full shadow-sm border-b border-gray-200 sticky z-40 overflow-visible"
        style={{ backgroundColor: "#FFF8E7", top: compact ? 0 : "7vh", height: compact ? 120 : "20vh" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 w-full flex items-center">
          {/* LEFT */}
          <div className="w-1/3 flex items-center">
            {!compact && (
              <nav className="hidden lg:flex items-center gap-6 ml-4">
                {leftNav.map((item, idx) => (
                  <div key={item.label} className="relative group cursor-pointer" ref={(el) => (leftNavRef.current[idx] = el)}>
                    <button
                      className="text-black font-semibold text-sm"
                      onClick={() => goTo(item.href)}
                      onMouseEnter={(e) => handleMouseEnterMenu(e.currentTarget)}
                      onMouseLeave={(e) => handleMouseLeaveMenu(e.currentTarget)}
                      aria-label={item.label}
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <div className="absolute left-0 top-full mt-2 w-44 bg-[#FFF8E7] shadow-md rounded-md opacity-0 group-hover:opacity-100 transition z-50">
                        {item.children.map((c) => (
                          <a key={c} href={`${item.href}/${slugify(c)}`} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                            {c}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>

          {/* CENTER LOGO */}
          <div className="w-1/3 flex justify-center items-center">
            <div
              ref={logoRef}
              className="cursor-pointer z-50 flex items-center justify-center"
              onClick={() => goTo("/")}
              role="button"
              aria-label="Go to home"
              style={{ width: compact ? 96 : 144, height: compact ? 96 : 144 }}
            >
              <img src={menuLogo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-1/3 flex items-center justify-end gap-4">
            {!compact && (
              <div className="hidden lg:flex items-center gap-6">
                {rightNav.map((r, idx) => (
                  <a
                    key={r.label}
                    href={r.href}
                    className="text-black text-sm font-medium cursor-pointer"
                    ref={(el) => (rightNavRef.current[idx] = el)}
                    onMouseEnter={(e) => handleMouseEnterMenu(e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeaveMenu(e.currentTarget)}
                  >
                    {r.label}
                  </a>
                ))}
                <a href="/search" className="hover:text-black" aria-label="Search">
                  <SearchSVG className="w-6 h-6 text-black" />
                </a>
              </div>
            )}
            <button className="lg:hidden text-2xl cursor-pointer p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* navWrap */}
        <div
          ref={navWrapRef}
          className="w-full overflow-hidden transition-all duration-300"
          style={{ maxHeight: !compact || mobileOpen ? 500 : 0, opacity: !compact || mobileOpen ? 1 : 0 }}
        >
          <div className="max-w-[1280px] mx-auto px-4 py-2" />
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#FFF8E7] shadow-md z-30 flex flex-col items-start px-4 py-4">
            {leftNav.map((item) => (
              <div key={item.label} className="w-full mb-2">
                <a href={item.href} className="block text-gray-800 font-medium py-2">{item.label}</a>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((c) => (
                      <a key={c} href={`${item.href}/${slugify(c)}`} className="block text-gray-600 py-1 text-sm">{c}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t mt-2 pt-2 w-full border-gray-300">
              {rightNav.map((r) => (
                <a key={r.label} href={r.href} className="block text-gray-800 font-medium py-2">{r.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
