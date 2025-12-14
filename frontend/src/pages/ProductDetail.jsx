import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL ?? "";

export default function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState("");

	useEffect(() => {
		const abortController = new AbortController();

		const load = async () => {
			try {
				setStatus("loading");
				setError("");

				const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`, {
					signal: abortController.signal,
				});

				if (!res.ok) {
					throw new Error(`Không thể tải chi tiết sản phẩm (${res.status})`);
				}

				const data = await res.json();
				setProduct(data);
				setStatus("success");
			} catch (e) {
				if (abortController.signal.aborted) return;
				setStatus("error");
				setError(e?.message || "Lỗi không xác định");
			}
		};

		load();
		return () => abortController.abort();
	}, [id]);

	return (
		<section className="min-h-screen bg-[var(--page-bg)] text-slate-900">
			<div className="relative overflow-hidden">
				<div className="relative z-10 mx-auto min-h-screen max-w-6xl px-4 py-24">
					<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
						<Link
							to="/collection"
							className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
						>
							← Quay lại
						</Link>
						<Link
							to="/search"
							className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
						>
							Tìm kiếm
						</Link>
					</div>

					{status === "loading" && (
						<div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
							Đang tải thông tin sản phẩm...
						</div>
					)}

					{status === "error" && (
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<p className="text-sm uppercase tracking-[0.35em] text-red-600">Lỗi</p>
							<p className="mt-3 text-slate-700">{error}</p>
						</div>
					)}

					{status === "success" && product && (
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
								<div className="relative">
									<img
										src={product.image}
										alt={product.title || product.name}
										className="h-[360px] w-full object-cover"
										loading="lazy"
									/>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
								</div>
							</div>

							<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
								<p className="text-xs uppercase tracking-[0.5em] text-emerald-700">Giới thiệu sản phẩm</p>
								<h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
									{product.title || product.name}
								</h1>
								<p className="mt-3 text-sm text-slate-600">{product.category || "Thủ công"}</p>

								<p className="mt-6 text-slate-700 leading-relaxed">{product.description}</p>

								<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Xuất xứ</p>
										<p className="mt-2 text-slate-900">{product.origin || "Việt Nam"}</p>
									</div>
									<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Quy trình</p>
										<p className="mt-2 text-slate-900">{product.process || "Thủ công"}</p>
									</div>
								</div>

								<div className="mt-8 flex flex-wrap items-end justify-between gap-6">
									<div>
										<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Giá tham khảo</p>
										<p className="mt-2 text-2xl font-semibold text-slate-900">
											{typeof product.price === "number"
												? product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
												: ""}
										</p>
									</div>
									<div className="text-right text-sm text-slate-600">
										<p>Đánh giá: <span className="text-emerald-700 font-semibold">{product.rating ?? "—"}</span></p>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
