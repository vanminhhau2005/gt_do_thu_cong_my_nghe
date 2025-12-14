import React from "react";
import { Link } from "react-router-dom";

const HERO_IMAGE =
	"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1600&q=80";

const ARTICLES = [
	{
		id: "story-1",
		title: "Hành trình từ chất liệu đến tác phẩm",
		date: "2025-12-14",
		image:
			"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
		excerpt:
			"Mỗi sản phẩm thủ công bắt đầu từ việc chọn đúng chất liệu, hiểu thớ gỗ, màu men và cả khí hậu nơi làm nghề.",
	},
	{
		id: "story-2",
		title: "Vì sao màu men có thể khác nhau ở mỗi mẻ nung",
		date: "2025-12-10",
		image:
			"https://images.unsplash.com/photo-1523419163445-5891ed3c0f7c?auto=format&fit=crop&w=1200&q=80",
		excerpt:
			"Nhiệt độ, thời gian, vị trí đặt trong lò và tỉ lệ khoáng đều tác động đến sắc độ. Đó cũng là nét duy nhất của thủ công.",
	},
	{
		id: "story-3",
		title: "Bảo quản đồ tre mây bền đẹp theo thời gian",
		date: "2025-12-05",
		image:
			"https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1200&q=80",
		excerpt:
			"Giữ khô thoáng, tránh nắng gắt và lau nhẹ định kỳ là ba nguyên tắc đơn giản để tre mây luôn chắc và lên màu tự nhiên.",
	},
	{
		id: "story-4",
		title: "Góc nhìn về giá trị ‘làm tay’",
		date: "2025-11-28",
		image:
			"https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80",
		excerpt:
			"Thủ công không chỉ là sản phẩm hoàn thiện, mà là thời gian, kinh nghiệm và sự kiên nhẫn được chắt lọc qua từng công đoạn.",
	},
];

export default function News() {
	return (
		<section className="min-h-screen bg-[var(--page-bg)] text-slate-900">
			<div className="relative overflow-hidden">
				<div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-16">
					<header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
						<div className="absolute inset-0">
							<img
								src={HERO_IMAGE}
								alt="Tin tức thủ công"
								className="h-full w-full object-cover opacity-20"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-white/85" />
						</div>

						<div className="relative z-10 text-center">
							<p className="text-xs uppercase tracking-[0.5em] text-emerald-700">Tin tức</p>
							<h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
								Câu chuyện, chất liệu và cảm hứng thủ công
							</h1>
							<p className="mt-5 max-w-3xl text-lg text-slate-600 mx-auto">
								Nơi chia sẻ các mẩu chuyện hậu trường, kinh nghiệm bảo quản và góc nhìn về giá trị làm tay.
							</p>

							<div className="mt-7 flex flex-wrap items-center justify-center gap-4">
								<Link
									to="/"
									className="rounded-full border border-slate-200 bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
								>
									Trở về trang chủ
								</Link>
								<Link
									to="/collection"
									className="rounded-full bg-emerald-700 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-sm transition hover:bg-emerald-800"
								>
									Xem bộ sưu tập
								</Link>
							</div>
						</div>
					</header>

					<div className="mt-10">
						<div className="flex items-end justify-between gap-6">
							<div>
								<p className="text-xs uppercase tracking-[0.4em] text-slate-500">Bài viết</p>
								<h2 className="mt-2 text-2xl font-semibold">Mới cập nhật</h2>
							</div>
							<p className="hidden md:block text-sm text-slate-500">{ARTICLES.length} bài</p>
						</div>

						<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
							{ARTICLES.map((a) => (
								<article
									key={a.id}
									className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-200"
								>
									<div className="relative">
										<img
											src={a.image}
											alt={a.title}
											className="h-40 w-full object-cover"
											loading="lazy"
										/>
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-slate-900/5 to-transparent" />
										<p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.35em] text-white">
											{a.date}
										</p>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-semibold leading-snug">{a.title}</h3>
										<p className="mt-3 text-sm text-slate-600 leading-relaxed">{a.excerpt}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
