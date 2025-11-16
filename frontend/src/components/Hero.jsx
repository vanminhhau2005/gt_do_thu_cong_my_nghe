import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import hero1 from '../assets/anh1.jpg';
import hero2 from '../assets/anh2.jpg';
import hero3 from '../assets/anh3.jpg';

const slides = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      gsap.to(slideRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrent(next);
          gsap.to(slideRef.current, { opacity: 1, duration: 0.5 });
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="hero" className="relative h-[400px] md:h-[500px] overflow-hidden">
      <img
        ref={slideRef}
        src={slides[current]}
        alt="Hero Slide"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Đồ Thủ Công Mỹ Nghệ Việt Nam
        </h1>
      </div>
    </section>
  );
}
