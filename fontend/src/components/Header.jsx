import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={close}>
          <span className="brand-icon">MN</span>
          <span>Mỹ Nghệ Tư Duy</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={close}>{t("home")}</Link>
          <Link to="/about" className="nav-link" onClick={close}>{t("about")}</Link>
          <Link to="/products" className="nav-link" onClick={close}>{t("products")}</Link>
          <Link to="/news" className="nav-link" onClick={close}>{t("news")}</Link>
          <Link to="/contact" className="nav-link" onClick={close}>{t("contact")}</Link>
        </nav>

        {/* Right side: Language + Hamburger */}
        <div className="header-right">
          <div className="lang-switch">
            <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          </div>

          <button
            className={`hamburger ${open ? "active" : ""}`}
            aria-label="Toggle menu"
            onClick={toggle}
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
