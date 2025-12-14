// src/pages/Search.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL ?? "";
const PRODUCTS_ENDPOINT = `${API_BASE}/api/products`;

export default function Search() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const load = async () => {
      try {
        setStatus("loading");
        setError("");

        const res = await fetch(PRODUCTS_ENDPOINT, {
          signal: abortController.signal,
        });

        if (!res.ok) {
          throw new Error(`Không thể tải sản phẩm (${res.status})`);
        }

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
        setStatus("success");
      } catch (e) {
        if (abortController.signal.aborted) return;
        setStatus("error");
        setError(e?.message || "Lỗi không xác định");
      }
    };

    load();
    return () => abortController.abort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) => {
      const haystack = [
        p?.title,
        p?.name,
        p?.category,
        p?.origin,
        p?.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [products, query]);

  return (
    <section className="min-h-screen bg-[var(--page-bg)] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-4 pt-10 pb-16">
          <header className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-lime-700">Tìm kiếm</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Tìm kiếm sản phẩm</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Nhập từ khóa để lọc tất cả sản phẩm đang có trên API.
            </p>
          </header>

          <div className="mx-auto mb-10 max-w-3xl">
            <div className="rounded-3xl bg-white/80 p-4 backdrop-blur-sm">
              <label className="block text-xs uppercase tracking-[0.35em] text-slate-600">Từ khóa</label>
              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-lime-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lime-600 to-lime-700 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M10.5 3a7.5 7.5 0 015.964 12.004l3.716 3.716a1 1 0 01-1.415 1.415l-3.716-3.716A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ví dụ: gốm, bình, hội an..."
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Tìm kiếm sản phẩm"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <span>
                  {status === "loading" && "Đang tải sản phẩm..."}
                  {status === "error" && `Lỗi: ${error}`}
                  {status === "success" && `Kết quả: ${filtered.length} / ${products.length}`}
                </span>
                {status === "success" && (
                  <span className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-700">
                    {query.trim() ? "Đang lọc" : "Tất cả"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {status === "loading" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-3xl bg-white/80 p-5"
                >
                  <div className="mb-4 h-48 w-full rounded-2xl bg-slate-100" />
                  <div className="h-3 w-24 rounded bg-slate-100" />
                  <div className="mt-3 h-5 w-3/4 rounded bg-slate-100" />
                  <div className="mt-3 h-4 w-full rounded bg-slate-100" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-slate-100" />
                  <div className="mt-5 flex items-center justify-between">
                    <div className="h-4 w-24 rounded bg-slate-100" />
                    <div className="h-5 w-28 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {status !== "loading" && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <article
                  key={p._id ?? `${p.title}-${p.name}`}
                  className="group overflow-hidden rounded-3xl bg-white/80 p-5 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.title || p.name}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.35em] text-lime-700">{p.category || "Thủ công"}</p>
                  <h2 className="mt-2 text-xl font-semibold">{p.title || p.name}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{p.origin || "Việt Nam"}</span>
                    <span className="text-base font-semibold">
                      {typeof p.price === "number"
                        ? p.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
                        : ""}
                    </span>
                  </div>

						<div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em]">
							<Link
								to={`/products/${p._id}`}
								className="rounded-full border border-slate-200/70 bg-white px-4 py-2 text-slate-700 transition hover:border-lime-200 hover:text-lime-700"
							>
								Xem chi tiết
							</Link>
							<span className="text-lime-700">{p.rating ?? "★"}</span>
						</div>
                </article>
              ))}
            </div>
          )}

          {status === "success" && filtered.length === 0 && (
            <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-white/80 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Không có kết quả</p>
              <p className="mt-3 text-slate-600">Không tìm thấy sản phẩm phù hợp. Thử từ khóa khác nhé.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
