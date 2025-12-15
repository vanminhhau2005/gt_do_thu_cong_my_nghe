
import React from "react";
import { Link } from "react-router-dom";

const KITCHEN_PRODUCTS = [
	{ name: "Đĩa + thìa dĩa hạt", image: "src/assets/anhnen006.png" },
	{ name: "Âu hạt bộ 3", image: "src/assets/anhnen007.png" },
	{ name: "Phạng lộ vân màu đỏ", image: "src/assets/anhnen008.png" },
	{ name: "Bát bộ 3 tự nhiên", image: "src/assets/anhnen009.jpg" },
	{ name: "Bát tre tự nhiên bộ 2", image: "src/assets/anhnen006.png" },
	{ name: "Bát sơn mài màu loang", image: "src/assets/anhnen007.png" },
	{ name: "Âu bộ 3 hạt đen", image: "src/assets/anhnen008.png" },
	{ name: "Hộp giấy ăn luồng ép tự nhiên", image: "src/assets/anhnen009.jpg" },
];

export default function KitchenProducts() {
	return (
		<section id="kitchen" className="w-full bg-lime-50 pt-6 pb-12">
			<div className="max-w-6xl mx-auto px-4">
				<header className="text-center">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-lime-700">
						ĐỒ NHÀ BẾP
					</h2>
					<p className="mt-3 text-sm sm:text-base uppercase tracking-[0.25em] text-lime-700">
						ĐỒ NHÀ BẾP SƠN MÀI SẢN XUẤT THEO YÊU CẦU
					</p>
				</header>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{KITCHEN_PRODUCTS.map((item) => (
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

