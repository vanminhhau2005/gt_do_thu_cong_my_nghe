import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const collections = [
  { title: 'Tết', image: 'https://via.placeholder.com/400x300/FFD700/000000?text=Tết' },
  { title: 'Trung thu', image: 'https://via.placeholder.com/400x300/FFA500/000000?text=Trung+thu' },
  { title: 'Quà tặng', image: 'https://via.placeholder.com/400x300/FF69B4/000000?text=Quà+tặng' },
];

export default function Collection() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % collections.length;
      gsap.to(slideRef.current, {
        x: '-100%',
        duration: 0.5,
        onComplete: () => {
          setCurrent(next);
          gsap.set(slideRef.current, { x: 0 });
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="collection" className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Bộ sưu tập</h2>
      <div className="flex overflow-hidden justify-center">
        <div ref={slideRef} className="flex gap-6">
          <img src={collections[current].image} alt={collections[current].title} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
