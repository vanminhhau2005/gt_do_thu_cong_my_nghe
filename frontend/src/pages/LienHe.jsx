import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LienHe() {
	return (
		<section className="min-h-screen bg-lime-50 text-slate-900">
			<div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-10 pb-16">
				<header className="rounded-3xl bg-white/80 p-8 text-center backdrop-blur-sm md:p-10">
					<p className="text-xs uppercase tracking-[0.5em] text-lime-700">Liên hệ</p>
					<h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
						Kết nối với Mỹ Nghệ Cát Đằng
					</h1>
					<p className="mt-5 mx-auto max-w-3xl text-lg text-slate-600">
						Gọi điện, gửi email hoặc để lại yêu cầu – chúng tôi sẽ phản hồi sớm nhất.
					</p>

					<div className="mt-7 flex flex-wrap items-center justify-center gap-4">
						<Link
							to="/"
							className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:text-lime-700"
						>
							Trở về trang chủ
						</Link>
						<Link
							to="/collection"
							className="rounded-full bg-lime-700 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-lime-800"
						>
							Xem sản phẩm
						</Link>
					</div>
				</header>

				<div className="mt-10 grid gap-6 lg:grid-cols-2">
					<div className="rounded-3xl bg-white/80 p-8 backdrop-blur-sm">
						<p className="text-xs uppercase tracking-[0.45em] text-slate-500">Thông tin</p>
						<h2 className="mt-3 text-2xl font-semibold">Công ty TNHH SX Mỹ Nghệ XK Cát Đằng</h2>
						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							Địa chỉ: Xóm Hùng Vương, Thôn Cát Đằng, xã Yên Tiến, huyện Ý Yên, Nam Định
						</p>

						<div className="mt-5 space-y-3 text-sm">
							<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-lime-50 px-5 py-4">
								<span className="uppercase tracking-[0.25em] text-slate-600">Điện thoại</span>
								<a className="font-semibold text-lime-700 hover:text-lime-800" href="tel:0983198045">
									0983198045
								</a>
							</div>
							<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-lime-50 px-5 py-4">
								<span className="uppercase tracking-[0.25em] text-slate-600">Hotline</span>
								<a className="font-semibold text-lime-700 hover:text-lime-800" href="tel:0977390922">
									0977390922
								</a>
							</div>
							<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-lime-50 px-5 py-4">
								<span className="uppercase tracking-[0.25em] text-slate-600">Email</span>
								<a
									className="font-semibold text-lime-700 hover:text-lime-800"
									href="mailto:mynghe_catdang@yahoo.com.vn"
								>
									mynghe_catdang@yahoo.com.vn
								</a>
							</div>
						</div>
					</div>

					<div className="rounded-3xl bg-white/80 p-8 backdrop-blur-sm">
						<p className="text-xs uppercase tracking-[0.45em] text-slate-500">Gợi ý</p>
						<h2 className="mt-3 text-2xl font-semibold">Bạn cần tư vấn sản phẩm?</h2>
						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							Gửi yêu cầu nhanh qua điện thoại hoặc email để chúng tôi hỗ trợ chọn mẫu, báo giá và thời gian giao hàng.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href="tel:0977390922"
								className="inline-flex items-center justify-center rounded-full bg-lime-700 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-lime-800"
							>
								Gọi hotline
							</a>
							<a
								href="mailto:mynghe_catdang@yahoo.com.vn"
								className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:text-lime-700"
							>
								Gửi email
							</a>
						</div>
					</div>
				</div>

				<div className="mt-10">
					<Footer />
				</div>
			</div>
		</section>
	);
}
