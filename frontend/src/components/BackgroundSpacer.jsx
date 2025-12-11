// frontend/src/components/BackgroundSpacer.jsx
import React from "react";

export default function BackgroundSpacer() {
  return (
    <div
      style={{
        height: "6vh",         // khoảng cách an toàn dưới header
        minHeight: "40px",      // đảm bảo đẹp trên điện thoại
        width: "100%",
        backgroundColor: "#ffffff", // màu nền tuỳ chỉnh
        position: "relative",
        zIndex: 1,
      }}
    />
  );
}
