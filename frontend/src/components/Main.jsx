// frontend/src/components/Hero.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg1 from "/src/assets/anhnenA11.png";
import heroImg2 from "/src/assets/anhnenoo.png";
import heroImg3 from "/src/assets/anhnen12.png";
import heroImg4 from "/src/assets/anhnenj.png";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4];

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [active, setActive] = useState(0);

  // GSAP animation cho text
  useEffect(() => {
    gsap.set(titleRef.current, { autoAlpha: 0, y: 30 });
    const st = gsap.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, []);

  // Tự động đổi ảnh mỗi 10 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, 10000); // 10s
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => setActive((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  const nextImage = () => setActive((prev) => (prev + 1) % IMAGES.length);

  return (
    <section
      ref={heroRef}
      className="relative"
      style={{
        width: "1378px",
        height: "468px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Render tất cả ảnh để fade */}
      {IMAGES.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Hero ${idx}`}
          style={{
            width: "1378px",
            height: "468px",
            objectFit: "none",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: idx === active ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            filter: "brightness(1)", // trung bình
          }}
        />
      ))}

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1378px",
          height: "468px",
          backgroundColor: "rgba(255,255,255,0.05)", // mờ nhẹ
          zIndex: 10,
        }}
      />

      {/* Nút chuyển ảnh */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255,255,255,0.6)",
          padding: "10px 15px",
          fontSize: "24px",
          borderRadius: "6px",
        }}
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255,255,255,0.6)",
          padding: "10px 15px",
          fontSize: "24px",
          borderRadius: "6px",
        }}
        aria-label="Next Image"
      >
        &gt;
      </button>
    </section>
  );
}
