import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  {
    id: 1,
    icon: "🎯",
    title: "Sứ Mệnh",
    description: "Bảo tồn và phát triển những giá trị văn hóa truyền thống thủ công mỹ nghệ Việt Nam",
    image: "https://via.placeholder.com/400x300?text=Su+Menh",
  },
  {
    id: 2,
    icon: "👁️",
    title: "Tầm Nhìn",
    description: "Trở thành thương hiệu hàng đầu trong ngành thủ công mỹ nghệ, nổi tiếng quốc tế",
    image: "https://via.placeholder.com/400x300?text=Tam+Nhin",
  },
  {
    id: 3,
    icon: "💎",
    title: "Giá Trị",
    description: "Chất lượng, tinh xảo, bản sắc văn hóa và trách nhiệm với cộng đồng",
    image: "https://via.placeholder.com/400x300?text=Gia+Tri",
  },
];

const VALUES = [
  {
    icon: "🤝",
    title: "Tôn Trọng Nghệ Nhân",
    description: "Công nhân viên là tâm điểm, được tôn trọng và phát triển kỹ năng liên tục",
    image: "https://via.placeholder.com/300x300?text=Ton+Trong",
  },
  {
    icon: "♻️",
    title: "Bền Vững",
    description: "Sử dụng nguyên liệu thiên nhiên, thân thiện với môi trường",
    image: "https://via.placeholder.com/300x300?text=Ben+Vung",
  },
  {
    icon: "🌟",
    title: "Chất Lượng Cao",
    description: "Mỗi sản phẩm đều được kiểm định kỹ càng trước khi gửi tới khách hàng",
    image: "https://via.placeholder.com/300x300?text=Chat+Luong",
  },
  {
    icon: "🚀",
    title: "Đổi Mới",
    description: "Kết hợp truyền thống với công nghệ hiện đại để tạo ra sản phẩm mới",
    image: "https://via.placeholder.com/300x300?text=Doi+Moi",
  },
];

const MILESTONES = [
  {
    year: "2016",
    title: "Thành lập công ty",
    description: "Bắt đầu hành trình với niềm đam mê bảo tồn nghệ thuật thủ công",
    image: "https://via.placeholder.com/500x300?text=2016+Thanh+Lap",
  },
  {
    year: "2018",
    title: "Mở rộng sản xuất",
    description: "Tuyển dụng 50 nghệ nhân, nâng cao chất lượng sản phẩm",
    image: "https://via.placeholder.com/500x300?text=2018+Mo+Rong",
  },
  {
    year: "2020",
    title: "Xuất khẩu quốc tế",
    description: "Sản phẩm đến tay khách hàng ở 20 quốc gia trên thế giới",
    image: "https://via.placeholder.com/500x300?text=2020+Xuat+Khau",
  },
  {
    year: "2023",
    title: "Công nhận CNVCLC",
    description: "Được vinh danh là doanh nghiệp có trách nhiệm với xã hội",
    image: "https://via.placeholder.com/500x300?text=2023+Cong+Nhan",
  },
];

export default function Statistics() {
  const sectionRef = useRef(null);
  const highlightsRef = useRef([]);
  const valuesRef = useRef([]);
  const milestonesRef = useRef([]);

  // Highlights animation
  useEffect(() => {
    const items = highlightsRef.current.filter(Boolean);

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
        delay: idx * 0.12,
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -15,
          boxShadow: "0 25px 50px rgba(180, 83, 9, 0.2)",
          duration: 0.4,
          ease: "power2.out",
        });
        
        const img = item.querySelector(".highlight-img");
        if (img) {
          gsap.to(img, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        const icon = item.querySelector(".highlight-icon");
        if (icon) {
          gsap.to(icon, {
            scale: 1.2,
            rotate: 360,
            duration: 0.6,
            ease: "back.out",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          duration: 0.4,
          ease: "power2.out",
        });

        const img = item.querySelector(".highlight-img");
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        const icon = item.querySelector(".highlight-icon");
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.4,
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

  // Values animation
  useEffect(() => {
    const items = valuesRef.current.filter(Boolean);

    items.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
        duration: 0.8,
        opacity: 0,
        x: idx % 2 === 0 ? -50 : 50,
        ease: "power2.out",
        delay: idx * 0.1,
      });

      item.addEventListener("mouseenter", () => {
        const img = item.querySelector(".value-img");
        if (img) {
          gsap.to(img, {
            scale: 1.15,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        const img = item.querySelector(".value-img");
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

  // Milestones animation
  useEffect(() => {
    const items = milestonesRef.current.filter(Boolean);

    items.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          once: true,
        },
        duration: 0.8,
        opacity: 0,
        x: idx % 2 === 0 ? -60 : 60,
        ease: "power2.out",
        delay: idx * 0.15,
      });

      const img = item.querySelector(".milestone-img");
      if (img) {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      items.forEach((item) => {
        const img = item.querySelector(".milestone-img");
        if (img) {
          img.removeEventListener("mouseenter", null);
          img.removeEventListener("mouseleave", null);
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-white via-orange-50 to-white"
      style={{ margin: 0, padding: "60px 0 80px 0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Sứ Mệnh, Tầm Nhìn, Giá Trị */}
        <div className="mb-24 sm:mb-32">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Về Chúng Tôi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => (highlightsRef.current[idx] = el)}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 hover:border-amber-700 transition-all duration-300"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Image */}
                <div className="h-48 sm:h-40 md:h-48 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="highlight-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-5 md:p-6">
                  <div className="highlight-icon text-5xl mb-4 inline-block transform transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giá Trị Cốt Lõi */}
        <div className="mb-24 sm:mb-32">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Giá Trị Cốt Lõi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (valuesRef.current[idx] = el)}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-amber-700 transition-all duration-300"
                style={{
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="value-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-3 md:p-4">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs sm:text-xs text-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hành Trình Phát Triển */}
        <div className="mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Hành Trình Phát Triển
          </h2>

          <div className="space-y-12">
            {MILESTONES.map((item, idx) => (
              <div
                key={item.year}
                ref={(el) => (milestonesRef.current[idx] = el)}
                className={`flex gap-6 sm:gap-8 items-center group ${
                  idx % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1 h-64 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="milestone-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className="bg-white rounded-2xl p-6 sm:p-5 md:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <span
                      className="text-2xl font-bold text-amber-700"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-xl sm:text-lg md:text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-amber-700 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 sm:mt-32 text-center">
          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Hãy tìm hiểu thêm về các sản phẩm thủ công mỹ nghệ của chúng tôi
          </p>
          <a
            href="/shop"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Khám Phá Sản Phẩm
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
}