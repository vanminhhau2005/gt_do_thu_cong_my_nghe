// src/pages/Search.jsx
import React from "react";

export default function Search() {
  return (
    <div className="max-w-xl mx-auto mt-20 p-4">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        aria-label="Tìm kiếm sản phẩm"
      />
    </div>
  );
}
