import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
export default function Main() {
	const image = "src/assets/anhnen006.png";
	const rootRef = useRef(null);
	const bannerTextRef = useRef(null);
	const introTextRef = useRef(null);

	useEffect(() => {
		if (!rootRef.current) return;
		const ctx = gsap.context(() => {
			const bannerTargets = bannerTextRef.current
				? Array.from(bannerTextRef.current.querySelectorAll("[data-anim='text']"))
				: [];
			const introTargets = introTextRef.current
				? Array.from(introTextRef.current.querySelectorAll("[data-anim='text']"))
				: [];

			gsap.from([...bannerTargets], {
				opacity: 0,
				x: -28,
				y: 8,
				duration: 0.9,
				ease: "power3.out",
				stagger: 0.12,
			});

			gsap.from([...introTargets], {
				opacity: 0,
				y: 16,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.1,
			});
		}, rootRef);
		return () => ctx.revert();
	}, []);

	return (
		<main ref={rootRef} id="main" className="relative overflow-hidden bg-[var(--page-bg)] text-lime-700">
			<div className="absolute inset-0 bg-gradient-to-br from-white via-lime-50/60 to-slate-50" />
			<div
				className="absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(circle at 20% 0%, rgba(4,120,87,0.10), transparent 45%), radial-gradient(circle at 80% 100%, rgba(15,23,42,0.06), transparent 50%)",
				}}
			/>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Store",
						name: "Thủ Công Mỹ Nghệ Việt Nam",
						description:
							"Giới thiệu sản phẩm thủ công mỹ nghệ Việt Nam — gốm sứ, tre mây, dệt may và nhiều chất liệu truyền thống.",
						url: "/",
					}),
				}}
			/>

			<div className="relative z-10 w-full">
				{/* Banner dính sát dưới header */}
				<div className="w-full">
					<div className="relative w-full h-[568px]">
						<img
							src={image}
							alt="Banner"
							loading="lazy"
							className="h-full w-full object-cover"
						/>
						<div className="pointer-events-none absolute inset-0">
							<div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
								<div className="h-full flex items-center">
									<div ref={bannerTextRef} className="max-w-xl">
										<h2 data-anim="text" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-lime-700 drop-shadow-2xl">
											Đồ thủ công mỹ nghệ
											<span className="block text-lime-700 drop-shadow-2xl">đậm bản sắc Việt Nam</span>
										</h2>
										<p data-anim="text" className="mt-4 text-sm sm:text-base text-lime-700 leading-relaxed max-w-lg drop-shadow-2xl">
											Chất liệu tự nhiên, chế tác tỉ mỉ, phù hợp trang trí và quà tặng.
										</p>
										<p data-anim="text" className="mt-2 text-sm sm:text-base text-lime-700 leading-relaxed max-w-lg drop-shadow-2xl">
											Mỗi sản phẩm là một câu chuyện của làng nghề, được hoàn thiện bằng đôi tay khéo léo.
										</p>
										<p data-anim="text" className="mt-2 text-sm sm:text-base text-lime-700 leading-relaxed max-w-lg drop-shadow-2xl">
											Thiết kế mộc mạc, tinh tế — phù hợp không gian sống hiện đại và truyền thống.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		</main>
	);
}
