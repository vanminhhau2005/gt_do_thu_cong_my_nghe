import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";

const API_BASE = import.meta.env.VITE_API_URL ?? "";
const CONTACT_ENDPOINT = `${API_BASE}/api/contact`;
const PRODUCTS_ENDPOINT = `${API_BASE}/api/products`;

export default function LienHe() {
	const [products, setProducts] = useState([]);
	const [loadingProducts, setLoadingProducts] = useState(false);
	const [productsError, setProductsError] = useState("");

	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [productId, setProductId] = useState("");
	const [requestMenu, setRequestMenu] = useState(true);
	const [message, setMessage] = useState("");

	const [sendStatus, setSendStatus] = useState("idle");
	const [sendError, setSendError] = useState("");
	const [sendOk, setSendOk] = useState("");

	useEffect(() => {
		const abortController = new AbortController();
		const load = async () => {
			try {
				setLoadingProducts(true);
				setProductsError("");
				const res = await fetch(PRODUCTS_ENDPOINT, { signal: abortController.signal });
				if (!res.ok) throw new Error(`Không thể tải sản phẩm (${res.status})`);
				const data = await res.json();
				setProducts(Array.isArray(data) ? data : []);
			} catch (e) {
				if (abortController.signal.aborted) return;
				setProductsError(e?.message || "Lỗi không xác định");
			} finally {
				if (!abortController.signal.aborted) setLoadingProducts(false);
			}
		};
		load();
		return () => abortController.abort();
	}, []);

	const selectedProduct = useMemo(() => {
		if (!productId) return null;
		return (Array.isArray(products) ? products : []).find((p) => String(p?._id) === String(productId)) || null;
	}, [products, productId]);

	const onSubmit = async (e) => {
		e.preventDefault();
		setSendStatus("sending");
		setSendError("");
		setSendOk("");

		try {
			const payload = {
				fullName,
				phone,
				email,
				message,
				requestMenu,
				productId: selectedProduct?._id || "",
				productTitle: selectedProduct?.title || selectedProduct?.name || "",
				productLink: selectedProduct?._id ? `${window.location.origin}/products/${encodeURIComponent(selectedProduct._id)}` : "",
			};

			const res = await fetch(CONTACT_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const data = await res.json().catch(() => ({}));
			if (!res.ok) {
				throw new Error(data?.message || "Gửi liên hệ thất bại");
			}

			setSendOk("Đã gửi thành công! Chúng tôi sẽ phản hồi sớm.");
			setSendStatus("sent");
			setMessage("");
		} catch (err) {
			setSendStatus("error");
			setSendError(err?.message || "Lỗi không xác định");
		}
	};

	return (
		<section className="relative flex min-h-screen flex-col overflow-hidden bg-lime-50 text-slate-900">
			<div className="absolute inset-0 bg-gradient-to-br from-white via-lime-50/70 to-slate-50" />
			<div
				className="absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(circle at 15% 0%, rgba(101,163,13,0.16), transparent 45%), radial-gradient(circle at 85% 100%, rgba(15,23,42,0.07), transparent 50%)",
				}}
			/>

			<div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 pt-10 pb-16">
				<div className="text-center">
					<p className="text-xs uppercase tracking-[0.5em] text-lime-700">Liên hệ</p>
					<h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-slate-900">Gửi yêu cầu</h1>
				</div>

				<div>
					<form onSubmit={onSubmit} className="grid gap-4 lg:grid-cols-2">
						<label className="block">
							<span className="text-xs uppercase tracking-[0.25em] text-slate-600">Họ và tên</span>
							<input
								type="text"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								required
								className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-200"
								placeholder="Nhập họ tên"
							/>
						</label>

						<label className="block">
							<span className="text-xs uppercase tracking-[0.25em] text-slate-600">Số điện thoại</span>
							<input
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-200"
								placeholder="Ví dụ: 09xxxxxxxx"
							/>
						</label>

						<label className="block lg:col-span-2">
							<span className="text-xs uppercase tracking-[0.25em] text-slate-600">Email (để nhận phản hồi/menu)</span>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-200"
								placeholder="your@email.com"
							/>
						</label>

						<label className="block lg:col-span-2">
							<span className="text-xs uppercase tracking-[0.25em] text-slate-600">Chọn sản phẩm quan tâm</span>
							<select
								value={productId}
								onChange={(e) => setProductId(e.target.value)}
								className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-200"
							>
								<option value="">{loadingProducts ? "Đang tải..." : "(Không chọn)"}</option>
								{Array.isArray(products) &&
									products.map((p) => (
										<option key={p._id} value={p._id}>
											{p.title || p.name}
										</option>
									))}
							</select>
							{productsError && <p className="mt-2 text-sm text-red-600">{productsError}</p>}
						</label>

						<label className="flex items-start gap-3 lg:col-span-2">
							<input
								type="checkbox"
								checked={requestMenu}
								onChange={(e) => setRequestMenu(e.target.checked)}
								className="h-5 w-5 rounded border-slate-300 text-lime-700 focus:ring-lime-300"
							/>
							<span className="text-sm leading-relaxed text-slate-700">
								Yêu cầu gửi menu/bảng sản phẩm qua email
								<span className="block text-xs text-slate-500 mt-1">(Chọn để chúng tôi gửi file/menu tổng hợp về email của bạn)</span>
							</span>
						</label>

						<label className="block lg:col-span-2">
							<span className="text-xs uppercase tracking-[0.25em] text-slate-600">Nội dung</span>
							<textarea
								rows={5}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-200"
								placeholder="Ví dụ: Tôi muốn nhận menu/báo giá, số lượng dự kiến..."
							/>
						</label>

						<div className="lg:col-span-2 flex flex-wrap items-center gap-3" aria-live="polite">
							<button
								type="submit"
								disabled={sendStatus === "sending"}
								className="inline-flex items-center justify-center rounded-full bg-lime-700 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-lime-800 disabled:opacity-60"
							>
								{sendStatus === "sending" ? "Đang gửi..." : "Gửi yêu cầu"}
							</button>
							{sendOk && <p className="text-sm text-lime-700">{sendOk}</p>}
							{sendError && <p className="text-sm text-red-600">Lỗi: {sendError}</p>}
						</div>
					</form>
				</div>
			</div>

			<div className="relative z-10">
				<Footer />
			</div>
		</section>
	);
}
