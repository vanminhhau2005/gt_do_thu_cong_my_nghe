import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Đồ Thủ Công Mỹ Nghệ</h3>
        <p className="mb-2">Địa chỉ: 123 Đường Thủ Công, TP.HCM</p>
        <p className="mb-4">Điện thoại: 0123 456 789 | Email: info@gtcraftshop.vn</p>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="#!" className="hover:text-amber-400 transition">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#!" className="hover:text-amber-400 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#!" className="hover:text-amber-400 transition">
            <i className="fab fa-zalo text-xl"></i>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; 2025 GT Đồ Thủ Công Mỹ Nghệ. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
