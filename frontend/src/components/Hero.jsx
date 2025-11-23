// frontend/src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { id: 0, title: "Đan sợi", img: "src/assets/anh10.jpg" },
  { id: 1, title: "đan", img: "src/assets/maytre.jpg" },
  { id: 2, title: "Tre", img: "src/assets/anhtre1.jpg" },
  { id: 3, title: "thủ công", img: "src/assets/anh7.jpg" },
  { id: 4, title: "Mỹ Nghệ", img: "src/assets/anh9.jpg" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const mainBg = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  const addCardRef = (el) => {
    if (!el) return;
    if (!cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useEffect(() => {
    // Animation slider cards
    gsap.set(cardRefs.current, { scale: 1, y: 0, opacity: 1 });
    gsap.from(mainBg.current, { opacity: 0, scale: 1.02, duration: 1, ease: "power3.out" });
    gsap.from(cardRefs.current, { opacity: 0, y: 14, duration: 0.8, stagger: 0.08, ease: "power3.out" });

    // GSAP animation chữ giới thiệu
    gsap.from(titleRef.current, { y: -30, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(textRef.current, { y: 20, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(btnRef.current, { y: 20, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mainBg.current) return;
    mainBg.current.style.backgroundImage = `url(${CARDS[active].img})`;
    gsap.fromTo(mainBg.current, { scale: 1 }, { scale: 1.02, duration: 0.8, ease: "power3.out", onComplete: () => gsap.to(mainBg.current, { scale: 1, duration: 0.5 }) });

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === active) {
        gsap.to(el, { y: -8, scale: 1.02, duration: 0.45, opacity: 1, ease: "power3.out" });
      } else {
        gsap.to(el, { y: 0, scale: 1, duration: 0.45, opacity: 0.85, ease: "power3.out" });
      }
    });
  }, [active]);

  const prev = () => setActive((p) => (p === 0 ? CARDS.length - 1 : p - 1));
  const next = () => setActive((p) => (p === CARDS.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Background */}
      <div
        ref={mainBg}
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${CARDS[0].img})`, willChange: "transform, opacity", WebkitTransform: "translateZ(0)" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Nội dung */}
      <div className="relative z-10 pt-24 px-6 md:px-12 text-center md:text-left max-w-3xl mx-auto">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl tracking-tight leading-tight">
          Giới thiệu <span className="text-yellow-400">Đồ Thủ Công Mỹ Nghệ Việt Nam</span>
        </h1>
        <p ref={textRef} className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-lg">
          Mỗi sản phẩm thủ công mỹ nghệ đều mang trong mình câu chuyện và tâm huyết của những người nghệ nhân. Từ các chi tiết tinh xảo, màu sắc hài hòa đến chất liệu tự nhiên, mỗi món đồ không chỉ là vật dụng trang trí mà còn là biểu tượng của văn hóa và sáng tạo. Khám phá bộ sưu tập để trải nghiệm vẻ đẹp thủ công đậm chất truyền thống, kết hợp với sự tinh tế hiện đại, mang đến không gian sống ấm áp và đầy cảm hứng.
        </p>
        <a
          ref={btnRef}
          href="#home"
          className="mt-6 inline-block px-8 py-3 bg-yellow-500/80 border border-yellow-400/50 rounded-full backdrop-blur-md text-white font-semibold shadow-lg hover:bg-yellow-500/100 transition transform hover:-translate-y-1 hover:scale-105"
        >
          Khám Phá Sản Phẩm
        </a>
      </div>

      {/* Controls */}
      <button onClick={prev} aria-label="Previous" className="absolute left-4 md:left-6 bottom-48 md:bottom-24 text-white text-4xl z-20 bg-black/40 px-3 rounded-full">‹</button>
      <button onClick={next} aria-label="Next" className="absolute right-4 md:right-6 bottom-48 md:bottom-24 text-white text-4xl z-20 bg-black/40 px-3 rounded-full">›</button>

      {/* Cards */}
      <div className="relative z-10 w-full overflow-x-auto px-4 py-4 flex gap-4 justify-center md:justify-center">
        {CARDS.map((c, idx) => (
          <button
            key={c.id}
            ref={addCardRef}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 rounded-xl flex flex-col items-center transition-all duration-300 bg-transparent p-0 focus:outline-none ${idx === active ? "ring-2 ring-white/30" : ""}`}
          >
            <div className="w-full h-[70%] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${c.img})` }}></div>
            <p className="text-white text-xs sm:text-sm mt-2 text-center">{c.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
