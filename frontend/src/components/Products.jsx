import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: 1,
    name: "Bát Gốm Truyền Thống",
    image: "https://via.placeholder.com/300x300?text=Bat+Gom+1",
    description: "Được thực hiện bằng kỹ thuật tay truyền thống, mỗi chiếc bát đều là một tác phẩm độc nhất",
  },
  {
    id: 2,
    name: "Áo Thêu Truyền Thống",
    image: "https://via.placeholder.com/300x300?text=Ao+Theu+1",
    description: "Áo thêu tay 100% cotton với các hoa văn tinh xảo từ các nghệ nhân lão luyện",
  },
  {
    id: 3,
    name: "Giỏ Đan Tre",
    image: "https://via.placeholder.com/300x300?text=Gio+Tre+1",
    description: "Giỏ đan tre từ những nguyên liệu thiên nhiên, đặc trưng của những vùng quê Việt",
  },
  {
    id: 4,
    name: "Dao Gỗ Thủ Công",
    image: "https://via.placeholder.com/300x300?text=Dao+Go+1",
    description: "Dao gỗ được chạm khắc tinh xảo, kết hợp giữa thẩm mỹ và tính năng sử dụng",
  },
];

export default function Products() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const productsRef = useRef([]);

  // Heading animation
  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out",
    });
  }, []);

  // Description animation
  useEffect(() => {
    if (!descRef.current) return;

    gsap.from(descRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  // Products animation
  useEffect(() => {
    const items = productsRef.current.filter(Boolean);
    
    items.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        ease: "power2.out",
        delay: idx * 0.1,
      });

      // Hover effect
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -15,
          boxShadow: "0 25px 50px rgba(180, 83, 9, 0.25)",
          duration: 0.4,
          ease: "power2.out",
        });

        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
          duration: 0.4,
          ease: "power2.out",
        });

        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", null);
        item.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-20 md:py-28"
      style={{ margin: 0, padding: "0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Các Sản Phẩm Đặc Trưng
          </h2>
          <p
            ref={descRef}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
          >
            Khám phá những sản phẩm thủ công mỹ nghệ truyền thống của Việt Nam, 
            mỗi sản phẩm đều mang trong mình tâm huyết và tay nghề của các nghệ nhân
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              ref={(el) => (productsRef.current[idx] = el)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white transition-all duration-400"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/* Image */}
              <div className="relative h-72 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-5 md:p-6">
                <h3
                  className="text-lg sm:text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm sm:text-xs md:text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {product.description}
                </p>

                {/* Arrow icon */}
                <div className="mt-4 flex items-center text-amber-700 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <span className="text-sm">Tìm hiểu thêm</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <p
            className="text-gray-600 text-base sm:text-lg mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Muốn khám phá thêm các sản phẩm khác?
          </p>
          <a
            href="/shop"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 hover:bg-amber-800 hover:shadow-lg transform hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Xem Tất Cả Sản Phẩm
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}