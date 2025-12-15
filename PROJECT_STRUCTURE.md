# Cấu trúc dự án (Site map + ghi chú chức năng)

Dự án gồm 2 phần:
- **backend/**: API + kết nối MongoDB + seed dữ liệu sản phẩm.
- **frontend/**: Website React/Vite/Tailwind hiển thị sản phẩm, tìm kiếm, bộ sưu tập, giới thiệu, liên hệ.

---

## 1) Cấu trúc thư mục (tổng quan)

```text
.gt_do_thu_cong_my_nghe/
  backend/                         # Node.js/Express API
  frontend/                        # React/Vite/Tailwind web
```

---

## 2) Backend (API) — cấu trúc + chức năng

```text
backend/
  server.js                        # Entry server Express (khởi chạy API)
  seeder.js                        # Script seed/xóa seed dữ liệu (import/destroy)
  package.json                     # Dependencies + scripts backend
  .env                             # Biến môi trường (Mongo URI, PORT...)

  config/
    db.js                          # Kết nối MongoDB (mongoose)

  models/
    Product.js                     # Schema/model Product

  controllers/
    productController.js           # Logic xử lý: list products, get by id, CRUD

  routes/
    productRoutes.js               # Định nghĩa route /api/products...

  data/
    products.js                    # Dữ liệu mẫu để seed (mảng sản phẩm)

  node_modules/                    # Thư viện (tự sinh)
```

### Luồng chính backend
- **Kết nối DB**: `config/db.js` được gọi khi server chạy hoặc khi seed.
- **API sản phẩm**:
  - `routes/productRoutes.js` map URL → controller.
  - `controllers/productController.js` thực thi truy vấn MongoDB qua `models/Product.js`.
- **Seed dữ liệu**: `seeder.js` đọc `data/products.js` → insert vào MongoDB.

### Endpoint (mức khái niệm)
- `GET /api/products`: lấy danh sách sản phẩm (có thể có query như `page`, `limit`, `category`, `q`, `sort` tùy controller).
- `GET /api/products/:id`: lấy chi tiết 1 sản phẩm.

---

## 3) Frontend (Website) — cấu trúc + chức năng

```text
frontend/
  index.html                       # HTML entry (Vite)
  vite.config.js                   # Config Vite
  tailwind.config.cjs              # Tailwind config
  postcss.config.cjs               # PostCSS config
  eslint.config.js                 # ESLint config
  package.json                     # Dependencies + scripts frontend
  README.md                        # Ghi chú frontend (nếu có)

  public/                          # Static files (deploy cùng web)
    sitemap.xml                    # SEO sitemap (tĩnh/được generate)
    robots.txt                     # SEO robots trỏ đến sitemap

  scripts/
    generate-sitemap.mjs           # Script generate sitemap/robots từ dữ liệu sản phẩm

  src/
    main.jsx                       # Entry React (mount App)
    App.jsx                        # Router + layout tổng
    App.css / index.css            # CSS global

    components/                    # Các section/khối dùng lại
      Header.jsx                   # Header + menu + dropdown danh mục
      Footer.jsx                   # Footer + thông tin liên hệ + mục nhanh
      Main.jsx                     # Hero/banner trang chủ
      Categories.jsx               # 4 danh mục (Gốm/Tre/Giấy/Khác/Tất cả)
      WhyChoose.jsx                # Lý do chọn
      Statistics.jsx               # Thống kê
      Products.jsx                 # Sản phẩm hiển thị trên home
      Testimonials.jsx             # Đánh giá/nhận xét

    pages/                         # Các trang theo route
      Collection.jsx               # /collection: danh sách + lọc + hiển thị cards
      Search.jsx                   # /search: tìm kiếm sản phẩm từ API
      ProductDetail.jsx            # /products/:id: chi tiết sản phẩm
      GioiThieu.jsx                # /gt: trang giới thiệu
      LienHe.jsx                   # /lienhe: trang liên hệ
      News.jsx                     # Trang cũ (hiện có thể không dùng nếu đã redirect)

    assets/                        # Ảnh/asset import trực tiếp trong React

  dist/                            # Build output (tự sinh)
  node_modules/                    # Thư viện (tự sinh)
```

### Site map (route) của website
- `/` → Trang chủ (ghép nhiều section trong `App.jsx`: Main/Categories/WhyChoose/Statistics/Products/Testimonials/Footer)
- `/gt` → Giới thiệu (`pages/GioiThieu.jsx`)
- `/collection` → Bộ sưu tập sản phẩm (`pages/Collection.jsx`)
- `/search` → Tìm kiếm (`pages/Search.jsx`)
- `/products/:id` → Chi tiết sản phẩm (`pages/ProductDetail.jsx`)
- `/lienhe` → Liên hệ (`pages/LienHe.jsx`)
- (tuỳ cấu hình) `/news` → có thể redirect sang `/lienhe` nếu đã đổi “News thành liên hệ”

### Luồng dữ liệu frontend
- Trang `Collection/Search/ProductDetail` gọi API `GET /api/products` hoặc `GET /api/products/:id`.
- `VITE_API_URL` (nếu có) quyết định base URL API; nếu để trống thì fetch theo cùng domain.

---

## 4) Ghi chú SEO: sitemap.xml vs “site map”
- **site map (cấu trúc dự án/route)**: tài liệu này mô tả thư mục + chức năng + route.
- **sitemap.xml (SEO)**: file cho Google/Bing crawl URL.
  - Script `frontend/scripts/generate-sitemap.mjs` có thể generate `frontend/public/sitemap.xml` + `robots.txt`.
  - Bạn cần set `SITE_URL=https://domain-thuc-te` khi generate để link trong sitemap đúng domain.

---

## 5) Gợi ý chạy dự án (tóm tắt)
- Backend: chạy server API trước (Express + MongoDB).
- Frontend: chạy Vite dev server.

### Cấu hình gửi email (trang Liên hệ)
Backend có endpoint `POST /api/contact` để gửi email về Gmail của bạn.

Thêm vào `backend/.env`:
- `SMTP_USER` = Gmail của bạn
- `SMTP_PASS` = App Password (khuyến nghị dùng App Password, không dùng mật khẩu Gmail thường)
- `CONTACT_TO` = Gmail nhận (có thể trùng `SMTP_USER`)
- (tuỳ chọn) `SMTP_HOST` (mặc định `smtp.gmail.com`), `SMTP_PORT` (mặc định `465`), `SMTP_SECURE` (`true`/`false`)

Nếu bạn gửi domain thật, mình sẽ cập nhật cấu hình `SITE_URL` mẫu và chuẩn hoá sitemap SEO theo domain đó.
