import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL ?? "";
const PRODUCTS_ENDPOINT = `${API_BASE}/api/products`;

const slugify = (text) =>
	text
		?.toString()
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "") ?? "";

const clampText = (value, maxChars = 160) => {
	const text = (value ?? "").toString().trim();
	if (!text) return "";
	if (text.length <= maxChars) return text;
	return `${text.slice(0, Math.max(0, maxChars - 1)).trim()}…`;
};

const HERO_IMAGE =
	"https://images.unsplash.com/photo-1523419163445-5891ed3c0f7c?auto=format&fit=crop&w=1600&q=80";

export default function Collection() {
	const location = useLocation();
	const [products, setProducts] = useState([]);
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState("");
	const [filter, setFilter] = useState("new");

	const categoryParam = useMemo(() => {
		const params = new URLSearchParams(location.search);
		return (params.get("category") ?? "").toString().trim();
	}, [location.search]);

	const categoryKey = useMemo(() => slugify(categoryParam), [categoryParam]);

	useEffect(() => {
		const abortController = new AbortController();

		const loadProducts = async () => {
			try {
				setStatus("loading");
				setError("");
				const response = await fetch(PRODUCTS_ENDPOINT, {
					signal: abortController.signal,
				});

				if (!response.ok) {
					throw new Error(`Không thể tải sản phẩm (${response.status})`);
				}

				const data = await response.json();
				setProducts(Array.isArray(data) ? data : []);
				setStatus("success");
			} catch (fetchError) {
				if (abortController.signal.aborted) return;
				setError(fetchError.message || "Lỗi không xác định");
				setStatus("error");
			}
		};

		loadProducts();
		return () => abortController.abort();
	}, []);

	const isEmpty = useMemo(() => status === "success" && products.length === 0, [products, status]);

	const visibleProducts = useMemo(() => {
		let list = Array.isArray(products) ? products : [];
		if (categoryKey) {
			if (categoryKey === "khac") {
				const primary = new Set(["gom", "tre", "giay"]);
				list = list.filter((p) => {
					const key = slugify(p?.category ?? "");
					return key && !primary.has(key);
				});
			} else {
				list = list.filter((p) => slugify(p?.category ?? "") === categoryKey);
			}
		}
		if (filter === "featured") {
			return [...list]
				.sort((a, b) => (Number(b?.rating ?? 0) - Number(a?.rating ?? 0)))
				.slice(0, 9);
		}
		// "new" = ưu tiên thứ tự API trả về (thường đã là mới nhất)
		return list;
	}, [products, filter, categoryKey]);

	return (
		<section className="min-h-screen bg-lime-50 text-slate-900">
			<div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pt-10 pb-16">
				<header className="rounded-3xl bg-white/80 p-8 text-center backdrop-blur-sm md:p-10">
					<p className="text-xs uppercase tracking-[0.5em] text-lime-700">Thư viện sản phẩm</p>
					<h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
						Mỗi sản phẩm là câu chuyện thủ công được dệt bằng tâm huyết người Việt.
					</h1>
					<p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
						Bộ sưu tập phong phú từ gốm sứ, tre mây đến kim loại dát vàng. Dữ liệu luôn đồng bộ từ API nên bạn thấy được những sản phẩm mới nhất.
					</p>
					<div className="mt-7 flex flex-wrap items-center justify-center gap-4">
						<Link
							to="/"
							className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:text-lime-700"
						>
							Trở về trang chủ
						</Link>
						<Link
							to="/search"
							className="rounded-full bg-lime-700 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-lime-800"
						>
							Khám phá sản phẩm
						</Link>
					</div>
				</header>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div>
							<p className="text-xs uppercase tracking-[0.4em] text-slate-500">Danh sách</p>
							<h2 className="text-2xl font-semibold">
								{filter === "featured" ? "Sản phẩm nổi bật" : "Tất cả sản phẩm"}
							</h2>
							{categoryParam && (
								<div className="mt-3 flex flex-wrap items-center gap-3">
									<span className="inline-flex items-center gap-2 rounded-full bg-lime-50 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-lime-700">
										Danh mục: {categoryParam}
									</span>
									<Link
										to="/collection"
										className="rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-700 transition hover:text-lime-700"
									>
										Bỏ lọc
									</Link>
								</div>
							)}
						</div>
						<div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-700">
							<button
								type="button"
								onClick={() => setFilter("new")}
								aria-pressed={filter === "new"}
								className={`rounded-full px-3 py-1 transition ${
									filter === "new" ? "bg-lime-50 text-lime-700" : "hover:bg-lime-50/40"
								}`}
							>
								Mới nhất
							</button>
							<button
								type="button"
								onClick={() => setFilter("featured")}
								aria-pressed={filter === "featured"}
								className={`rounded-full px-3 py-1 transition ${
									filter === "featured" ? "bg-lime-50 text-lime-700" : "hover:bg-lime-50/40"
								}`}
							>
								Nổi bật
							</button>
						</div>
					</div>

						<div className="space-y-2">
							{status === "loading" && <p className="text-sm text-slate-500">Đang tải sản phẩm...</p>}
							{status === "error" && <p className="text-sm text-red-600">Lỗi: {error}</p>}
							{isEmpty && <p className="text-sm text-slate-500">Chưa có sản phẩm nào được đăng.</p>}
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{status === "loading" &&
								Array.from({ length: 6 }).map((_, i) => (
									<div
										key={`skeleton-${i}`}
										className="h-[420px] rounded-3xl bg-white/80 p-5"
									>
										<div className="mb-4 h-48 rounded-2xl bg-slate-100" />
										<div className="space-y-3">
											<div className="h-3 w-28 rounded bg-slate-100" />
											<div className="h-6 w-3/4 rounded bg-slate-100" />
											<div className="h-16 w-full rounded bg-slate-100" />
											<div className="h-9 w-full rounded bg-slate-100" />
										</div>
									</div>
								))}

							{visibleProducts.map((product) => {
								const slug = slugify(product.title || product.name || product._id);
								const productId = encodeURIComponent(product._id ?? slug);
								return (
									<Link
										key={product._id ?? slug}
										to={`/products/${productId}`}
										className="group flex h-full flex-col rounded-3xl bg-white/80 p-5 transition duration-300 hover:-translate-y-2"
										aria-label={`Xem chi tiết ${product.title || product.name}`}
									>
										<div className="relative mb-4 overflow-hidden rounded-2xl">
											<img
												src={product.image}
												alt={product.title || product.name}
												className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
												loading="lazy"
											/>
											<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
											<div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-lime-700">
												{product.category || "Thủ công"}
											</div>
										</div>
										<div className="flex-1 space-y-3">
											<h3 className="text-xl font-semibold leading-snug">
												{product.title || product.name}
											</h3>
											<p className="text-sm text-slate-600 leading-relaxed">{clampText(product.description, 165)}</p>
											<div className="flex flex-wrap items-center justify-between text-xs text-slate-600">
												<span className="truncate">{product.origin || "Việt Nam"}</span>
												<span className="truncate">{product.process || "Thủ công"}</span>
											</div>
											<div className="flex items-center justify-between pt-2">
												<div>
													<p className="text-slate-500 text-[10px] uppercase tracking-[0.35em]">Giá tham khảo</p>
													<p className="text-xl font-semibold text-slate-900">
														{typeof product.price === "number"
															? product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
															: "—"}
													</p>
												</div>
												<div className="text-right text-xs text-slate-500">
													<p className="uppercase tracking-[0.25em]">Đánh giá</p>
													<p className="text-lime-700 font-semibold">{product.rating ?? "—"}</p>
												</div>
											</div>
										</div>
										<div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-700">
											<span className="rounded-full bg-lime-50 px-4 py-2 transition group-hover:text-lime-700">
												Xem chi tiết
											</span>
											<span className="text-lime-700">→</span>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
			</div>
		</section>
	);
}
