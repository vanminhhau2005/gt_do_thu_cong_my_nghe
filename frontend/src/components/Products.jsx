// src/components/Products.jsx
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/products";

function formatPrice(v) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(v);
}

function Stars({ rating }) {
  const n = Math.round(rating || 0);
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < n ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
      <span className="text-xs text-gray-500 ml-2">({rating ?? 0})</span>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log("DEBUG: products from API:", data);
        setProducts(data);
      } catch (err) {
        console.error("Fetch products error:", err);
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // categories available from products (dynamic)
  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

  // filtering & sorting
  let visible = products.filter((p) => filter === "all" || p.category === filter);

  if (sortBy === "price-asc") visible.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") visible.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") visible.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  if (sortBy === "popular") visible.sort((a, b) => (b.sold || 0) - (a.sold || 0));

  const addToCart = (p) => {
    setCart((s) => [...s, p]);
  };

  const openDetail = (p) => setSelected(p);
  const closeDetail = () => setSelected(null);

  return (
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
          <p className="text-gray-600 mt-2">Đồ thủ công mỹ nghệ chọn lọc — làm tay bởi nghệ nhân.</p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between mb-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filter === c ? "bg-amber-600 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {c === "all" ? "Tất cả" : c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sắp xếp:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="popular">Phổ biến nhất</option>
              <option value="price-asc">Giá thấp → cao</option>
              <option value="price-desc">Giá cao → thấp</option>
              <option value="rating">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {/* Loading / Error */}
        {loading && <div className="text-center py-12">Đang tải sản phẩm...</div>}
        {error && <div className="text-center py-6 text-red-600">Lỗi: {error}</div>}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {visible.map((p) => (
              <article
                key={p._id ?? p.id}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left: info */}
                  <div className="md:w-1/2 p-5 flex flex-col">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                      <p><strong>Chất liệu:</strong> {p.origin ?? "—"}</p>
                      <p className="mt-2"><strong>Quy trình:</strong> {p.process ?? "—"}</p>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3">
                      <div>
                        <div className="text-2xl font-bold text-amber-600">{formatPrice(p.price ?? 0)}</div>
                        <div className="text-xs text-gray-500">Đã bán: {p.sold ?? 0}</div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(p)}
                          className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded-lg font-semibold"
                        >
                          🛒 Thêm
                        </button>
                        <button
                          onClick={() => openDetail(p)}
                          className="bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 py-2 px-3 rounded-lg font-semibold"
                        >
                          👁️ Xem
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100 relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                      onClick={() => openDetail(p)}
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {p.rating ? `${p.rating}⭐` : "—"}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {visible.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-600">Không có sản phẩm phù hợp.</div>
            )}
          </div>
        )}
      </div>

      {/* Cart badge */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-amber-600 text-white px-4 py-2 rounded-full shadow-lg z-50">
          🛒 {cart.length} sản phẩm
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={closeDetail}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-80 md:h-auto">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{selected.subtitle ?? selected.title}</p>
                <p className="text-gray-700 mb-4">{selected.description}</p>

                <div className="text-sm text-gray-600 mb-4">
                  <p><strong>Chất liệu:</strong> {selected.origin ?? "—"}</p>
                  <p className="mt-2"><strong>Quy trình:</strong> {selected.process ?? "—"}</p>
                  <p className="mt-2"><strong>Đã bán:</strong> {selected.sold ?? 0}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-amber-600">{formatPrice(selected.price ?? 0)}</div>
                    <div className="text-sm text-gray-500"> Mã: {selected?.code ?? selected?._id ?? selected?.id}</div> {/* HIỂN THỊ DẠNG ID SỐ */}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => { addToCart(selected); closeDetail(); }}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold"
                    >
                      🛒 Thêm vào giỏ
                    </button>
                    <button
                      onClick={closeDetail}
                      className="flex-0 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
