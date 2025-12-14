
import React from "react";
import { Link } from "react-router-dom";

const DECOR_PRODUCTS = [
	{ name: "Lọ loe bộ 2 miệng loe", image: "src/assets/anhnen006.png" },
	{ name: "Lọ vót bộ 2", image: "src/assets/anhnen007.png" },
	{ name: "Bom màu hạt", image: "src/assets/anhnen008.png" },
	{ name: "Lọ loe màu hạt", image: "src/assets/anhnen009.jpg" },
	{ name: "Chậu trồng cây bộ 2", image: "src/assets/anhnen006.png" },
	{ name: "Chao đèn tre nứa cuốn", image: "src/assets/anhnen007.png" },
	{ name: "Xô tre nứa tự nhiên", image: "src/assets/anhnen008.png" },
	{ name: "Lẵng hoa tre nứa tự nhiên", image: "src/assets/anhnen009.jpg" },
];

export default function WhyChoose() {
	return (
		<section id="decor" className="w-full bg-[var(--page-bg)] pt-6 pb-12">
			<div className="max-w-6xl mx-auto px-4">
				<header className="text-center">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-lime-700">
						ĐỒ TRANG TRÍ NỘI THẤT
					</h2>
					<p className="mt-3 text-sm sm:text-base uppercase tracking-[0.25em] text-lime-700">
						SẢN PHẨM THỦ CÔNG MỸ NGHỆ CHẤT LƯỢNG
					</p>
				</header>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{DECOR_PRODUCTS.map((item) => (
						<div key={item.name} className="text-center">
							<Link to="/#contact" className="block">
								<img
									src={item.image}
									alt={item.name}
									loading="lazy"
									className="mx-auto h-40 w-full max-w-[260px] rounded-2xl object-cover"
								/>
							</Link>
							<h3 className="mt-4 text-base font-extrabold text-lime-700">{item.name}</h3>
							<p className="mt-1 text-sm font-semibold text-lime-700">{item.name}</p>
							<p className="mt-5 text-sm font-semibold text-slate-700">Liên hệ / Giá</p>
							<Link
								to="/#contact"
								className="mt-2 inline-block text-xs uppercase tracking-[0.25em] text-lime-700 hover:text-lime-800 transition"
							>
								Liên hệ (đơn tối thiểu)
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

