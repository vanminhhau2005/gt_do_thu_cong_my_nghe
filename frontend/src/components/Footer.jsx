
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer id="contact" className="w-full bg-lime-700 py-12 text-white">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
					<div>
						<p className="text-xs uppercase tracking-[0.45em] text-lime-100">
							LIÊN HỆ VỚI CHÚNG TÔI
						</p>
						<p className="mt-3 text-lg sm:text-xl font-extrabold text-white leading-snug">
							GIỚI THIỆU ĐỒ THỦ CÔNG MỸ NGHỆ VIỆT NAM
						</p>
						<p className="mt-4 text-sm text-lime-50 leading-relaxed">
							Địa chỉ: Xóm A, Thôn mới, xã Hưng Mới, huyện Tiên Mới, tỉnh Vĩnh Long
						</p>
						<div className="mt-4 space-y-2 text-sm text-lime-50">
							<p>
								Điện thoại: {" "}
								<a className="text-white hover:text-lime-100 transition" href="tel:012345671">
									012345671
								</a>
							</p>
							<p>
								Hotline: {" "}
								<a className="text-white hover:text-lime-100 transition" href="tel:012312345">
									012312345
								</a>
							</p>
							<p>
								Email: {" "}
								<a className="text-white hover:text-lime-100 transition" href="mailto:mynghe_catdang@yahoo.com.vn">
									mynghe@gmai.com
								</a>
							</p>
						</div>

						<div className="mt-8">
							<p className="text-xs uppercase tracking-[0.45em] text-lime-100">Mục nhanh</p>
							<div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
								<Link className="text-white hover:text-lime-100 transition" to="/">Trang chủ</Link>
								<Link className="text-white hover:text-lime-100 transition" to="/gioi-thieu">Giới thiệu</Link>
								<Link className="text-white hover:text-lime-100 transition" to="/collection">Sản phẩm</Link>
								<Link className="text-white hover:text-lime-100 transition" to="/lienhe">Liên hệ</Link>
							</div>
						</div>
					</div>

					<div className="lg:justify-self-end">
						<p className="text-sm uppercase tracking-[0.3em] text-lime-100">Hotline</p>
						<p className="mt-2 text-3xl font-extrabold text-white">0977390922</p>
						<p className="mt-1 text-sm uppercase tracking-[0.3em] text-lime-100">Facebook</p>

						<div className="mt-5 flex flex-wrap items-center gap-4">
							<a
								href="tel:012345678"
								className="inline-flex items-center gap-3 text-white hover:text-lime-100 transition"
								aria-label="Zalo"
							>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-100/70 text-[10px] font-extrabold">
									ZALO
								</span>
								<span className="text-xs uppercase tracking-[0.25em]">Zalo</span>
							</a>

							<a
								href="mailto:mynghe@yahoo.com.vn"
								className="inline-flex items-center gap-3 text-white hover:text-lime-100 transition"
								aria-label="Email"
							>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-100/70">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
										<path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
									</svg>
								</span>
								<span className="text-xs uppercase tracking-[0.25em]">Email</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

