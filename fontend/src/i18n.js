// src/i18n.js
import i18n from "../src/i18next";
import { initReactI18next } from "react-i18next";

// Import file JSON
import vi from "./locales/vi/translation.json";
import en from "./locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
    },
    lng: localStorage.getItem("lang") || "vi",  // ngôn ngữ mặc định
    fallbackLng: "vi",
    interpolation: { escapeValue: false },
  });

// Lưu khi đổi ngôn ngữ
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
