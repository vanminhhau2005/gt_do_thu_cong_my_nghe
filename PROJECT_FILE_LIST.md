# Danh sách file (theo workspace VS Code)

Tổng số file hiển thị: **117** (đã loại trừ `node_modules/`, `dist/`, `.git/`).

## Cây thư mục (tree)

```text
.
├─ PROJECT_STRUCTURE.md
├─ backend
│  ├─ .env
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  └─ productController.js
│  ├─ data
│  │  └─ products.js
│  ├─ models
│  │  └─ Product.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ contactRoutes.js
│  │  └─ productRoutes.js
│  ├─ seeder.js
│  └─ server.js
└─ frontend
   ├─ .gitignore
   ├─ README.md
   ├─ eslint.config.js
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.cjs
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ index.css
   │  ├─ main.jsx
   │  ├─ assets
   │  │  ├─ A0.png
   │  │  ├─ A01.jpg
   │  │  ├─ A02.jpg
   │  │  ├─ A03.jpg
   │  │  ├─ A1.png
   │  │  ├─ A1000.png
   │  │  ├─ A12.png
   │  │  ├─ A13.png
   │  │  ├─ A14.png
   │  │  ├─ A15.png
   │  │  ├─ A16.png
   │  │  ├─ A17.png
   │  │  ├─ A18.png
   │  │  ├─ A19.png
   │  │  ├─ A2.png
   │  │  ├─ A20.png
   │  │  ├─ A21.png
   │  │  ├─ A22.png
   │  │  ├─ A3.png
   │  │  ├─ A4.jpg
   │  │  ├─ A5.png
   │  │  ├─ A6.png
   │  │  ├─ AN.png
   │  │  ├─ DANTREMAY.png
   │  │  ├─ DENGIAY.jpg
   │  │  ├─ DENGIAYQ.jpg
   │  │  ├─ DOGOM.jpg
   │  │  ├─ Slide 4.jpg
   │  │  ├─ X3.png
   │  │  ├─ anh1.jpg
   │  │  ├─ anh10.jpg
   │  │  ├─ anh2.jpg
   │  │  ├─ anh3.jpg
   │  │  ├─ anh4.jpg
   │  │  ├─ anh5.jpg
   │  │  ├─ anh6.jpg
   │  │  ├─ anh7.jpg
   │  │  ├─ anh8.jpeg
   │  │  ├─ anh9(1)(1).png
   │  │  ├─ anh9.jpg
   │  │  ├─ anhProducts.jpg
   │  │  ├─ anhnen.png
   │  │  ├─ anhnen001.png
   │  │  ├─ anhnen002.png
   │  │  ├─ anhnen003.png
   │  │  ├─ anhnen004.png
   │  │  ├─ anhnen005.png
   │  │  ├─ anhnen006.png
   │  │  ├─ anhnen007.png
   │  │  ├─ anhnen008.png
   │  │  ├─ anhnen009.jpg
   │  │  ├─ anhnen009.png
   │  │  ├─ anhnen10.png
   │  │  ├─ anhnen11.png
   │  │  ├─ anhnen12.png
   │  │  ├─ anhnen13.png
   │  │  ├─ anhnen@.jpg
   │  │  ├─ anhnen@.png
   │  │  ├─ anhnen@@.png
   │  │  ├─ anhnenA.png
   │  │  ├─ anhnenA11.png
   │  │  ├─ anhnenB.png
   │  │  ├─ anhnenC.png
   │  │  ├─ anhnenD.png
   │  │  ├─ anhnenj.png
   │  │  ├─ anhnenoo.png
   │  │  ├─ anhtre1.jpg
   │  │  ├─ cc.png
   │  │  ├─ lo_go.png
   │  │  ├─ logo.png
   │  │  ├─ logo1.png
   │  │  ├─ may tre.jpg
   │  │  ├─ maytre.jpg
   │  │  ├─ menu.png
   │  │  ├─ name.png
   │  │  ├─ nen1.jpg
   │  │  └─ non.png
   │  ├─ components
   │  │  ├─ AboutSection.jsx
   │  │  ├─ Categories.jsx
   │  │  ├─ DecorProducts.jsx
   │  │  ├─ Footer.jsx
   │  │  ├─ Header.jsx
   │  │  ├─ HomeHero.jsx
   │  │  ├─ KitchenProducts.jsx
   │  │  └─ OfficeProducts.jsx
   │  └─ pages
   │     ├─ Collection.jsx
   │     ├─ GioiThieu.jsx
   │     ├─ LienHe.jsx
   │     ├─ News.jsx
   │     ├─ ProductDetail.jsx
   │     └─ Search.jsx
   ├─ tailwind.config.cjs
   └─ vite.config.js
```

## Ghi chú chức năng (tóm tắt)

### Backend
- API Express: khởi chạy tại `backend/server.js`.
- MongoDB: cấu hình/connection trong `backend/config/db.js`.
- Sản phẩm: model `backend/models/Product.js`, controller `backend/controllers/productController.js`, routes `backend/routes/productRoutes.js`.
- Liên hệ (gửi email): route `backend/routes/contactRoutes.js` (POST `/api/contact`).
- Seed dữ liệu: `backend/seeder.js` dùng `backend/data/products.js`.

### Frontend
- Router & layout: `frontend/src/App.jsx`.
- Trang: `frontend/src/pages/*` (Collection, Search, ProductDetail, GioiThieu, LienHe).
- Component dùng lại: `frontend/src/components/*` (Header, Footer, các section trang chủ).
- Ảnh tĩnh: `frontend/src/assets/*`.

### Routes chính (frontend)
- `/` trang chủ
- `/gioi-thieu` giới thiệu (có redirect từ `/gt` nếu đang dùng)
- `/collection` bộ sưu tập
- `/search` tìm kiếm
- `/products/:id` chi tiết sản phẩm
- `/lienhe` liên hệ (có redirect từ `/news` nếu đang dùng)
