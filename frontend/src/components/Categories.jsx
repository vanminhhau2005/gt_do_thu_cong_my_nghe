import React from "react";
import { Link } from "react-router-dom";

const CATEGORY_CARDS = [
	{
		id: "gom",
		title: "ĐỒ GỐM",
		query: "gốm",
		image: "src/assets/A01.JPG",
	},
	{
		id: "tre may",
		title: "ĐAN TRE MÂY",
		query: "tre mây",
		image: "src/assets/DANTREMAY.png",
	},
	{
		id: "giay",
		title: "GIẤY",
		query: "giấy",
		image: "src/assets/DENGIAYQ.JPG",
	},
	{
		id: "khac",
		title: "KHÁC",
		query: "",
		image: "src/assets/X3.PNG",
	},
];

export default function Categories() {
	return (
		<section id="categories" className="w-full pt-4 pb-10 bg-lime-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="p-6 md:p-8">
					<div className="text-center">
						<p className="text-xs uppercase tracking-[0.45em] text-lime-700">Danh mục</p>
						<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-lime-700">
							KHÁM PHÁ SẢN PHẨM THEO CHẤT LIỆU
						</h2>
						<p className="mt-3 text-sm sm:text-base uppercase tracking-[0.25em] text-lime-700 max-w-2xl mx-auto">
							Chọn danh mục để xem nhanh các sản phẩm cùng chất liệu/phong cách.
						</p>
					</div>

					<div className="mt-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
						{CATEGORY_CARDS.map((card) => (
							<Link
								key={card.id}
								to={card.query ? `/collection?category=${encodeURIComponent(card.query)}` : "/collection"}
								className="group w-full max-w-[260px] overflow-hidden rounded-2xl transition hover:-translate-y-1 flex flex-col"
							>
								<div className="relative h-44 w-full overflow-hidden bg-slate-100">
									<img
										src={card.image}
										alt={card.title}
										loading="lazy"
										className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
									/>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
								</div>
								<div className="p-5 text-center flex-1 flex flex-col">
									<p className="text-xs uppercase tracking-[0.35em] text-slate-500">Danh mục</p>
									<h3 className="mt-3 text-lg font-extrabold tracking-wide text-lime-700">
										{card.title}
									</h3>
									<div className="mt-auto pt-5 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-700">
										<span className="px-4 py-2 transition group-hover:text-lime-700">
											Xem ngay
										</span>
										<span className="text-lime-700">→</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
