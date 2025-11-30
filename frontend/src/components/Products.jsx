import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Products.jsx
// Simplified: removed boxed panels and background blobs per user's request.
// Retains GSAP entry animations and a soft gradient background.
// Place in src/components/Products.jsx. Requires Tailwind + GSAP.

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const products = [
    { id: 1, title: "Gốm Bát Tràng bình hoa tay vẽ", 
    note: "Gốm Bát Tràng – Bình hoa tay vẽ là sản phẩm tiêu biểu của làng nghề truyền thống Việt Nam, kết tinh từ hơn 500 năm lịch sử và bàn tay tài hoa của nghệ nhân. Chiếc bình được tạo hình từ đất sét tinh luyện, qua nhiều công đoạn thủ công như nặn, nung và phủ men rạn cổ truyền, tạo nên vẻ đẹp mộc mạc nhưng sang trọng. Trên nền gốm, từng họa tiết được vẽ tay tỉ mỉ, mang lại sự độc bản và khẳng định giá trị nghệ thuật riêng biệt. Bình hoa không chỉ là vật dụng trang trí, có thể dùng để cắm hoa, mà còn là biểu tượng văn hóa, giúp kết nối con người với truyền thống trong đời sống hiện đại. Sở hữu một bình hoa gốm Bát Tràng tay vẽ chính là lưu giữ hồn Việt, là cách trân trọng nghệ thuật thủ công và khẳng định rằng giá trị truyền thống luôn có chỗ đứng trong không gian sống hôm nay.", 
    img: "src/assets/A1.png" },
    { id: 2, title: "Đồ mây tre giỏ đựng đa năng", 
    note: "Đồ mây tre - Giỏ đựng đa năng là sản phẩm thủ công được làm từ chất liệu tự nhiên, mang lại sự bền chắc và tính thẩm mỹ cao. Với thiết kế đơn giản nhưng tinh tế, giỏ có thể sử dụng để sắp xếp quần áo, phụ kiện, đồ dùng gia đình hoặc làm vật trang trí, giúp không gian sống trở nên gọn gàng và ấm cúng hơn. Sự kết hợp giữa công năng và vẻ đẹp mộc mạc khiến giỏ đựng đa năng bằng mây tre trở thành lựa chọn lý tưởng cho mọi gia đình.", 
    img: "src/assets/A2.png" },
    { id: 3, title: "Khăn tơ tằm thêu tay", 
    note: "Khăn tơ tằm thêu tay là sự kết hợp hoàn hảo giữa chất liệu cao cấp và kỹ thuật thủ công tinh xảo. Mỗi chiếc khăn được dệt từ sợi tơ tằm mềm mại, bóng mượt, và được nghệ nhân tỉ mỉ thêu từng mũi chỉ, tạo nên những hoa văn sống động và độc đáo. Không chỉ là phụ kiện thời trang, mỗi chiếc khăn còn mang trong mình câu chuyện văn hóa Việt Nam, từ những họa tiết truyền thống đến những chi tiết hiện đại, tinh tế.", 
    img: "src/assets/A3.png" },
    { id: 4, title: "Tranh sơn mài nghệ thuật truyền thống",
    note: "Tranh sơn mài nghệ thuật truyền thống là kết tinh của kỹ thuật thủ công tinh xảo và vẻ đẹp văn hóa Việt Nam. Mỗi bức tranh được chế tác tỉ mỉ qua nhiều lớp sơn và đánh bóng, với hoa văn và màu sắc độc đáo, tạo ra hiệu ứng ánh sáng lung linh. Tranh sơn mài không chỉ là vật trang trí mà còn là tác phẩm nghệ thuật kể câu chuyện truyền thống, mang đến vẻ đẹp sang trọng và tinh tế cho không gian sống.", 
    img: "src/assets/A4.jpg" },
    { id: 5, title: "Đồ gỗ chạm khắc - Hộp trang sức", 
    note: "Hộp trang sức gỗ chạm khắc là minh chứng cho tay nghề điêu luyện của các nghệ nhân Việt Nam. Mỗi chiếc hộp được làm từ loại gỗ chọn lọc, chạm khắc thủ công tỉ mỉ với những hoa văn tinh tế và họa tiết độc đáo. Sản phẩm không chỉ bảo vệ và lưu giữ trang sức mà còn là món đồ trang trí nghệ thuật, thể hiện vẻ đẹp truyền thống và sự khéo léo trong từng chi tiết.", 
    img: "src/assets/A5.png" },
    { id: 6, title: "Nón lá thêu tay", 
    note: "Nón lá thêu tay là sự kết hợp hoàn hảo giữa truyền thống và nghệ thuật thủ công tinh xảo. Mỗi chiếc nón được chọn loại lá mềm, bền, và được nghệ nhân thêu từng họa tiết tỉ mỉ, tạo nên những hoa văn độc đáo. Nón không chỉ là vật dụng che nắng, bảo vệ sức khỏe mà còn là món đồ văn hóa, lưu giữ tinh hoa của thủ công mỹ nghệ Việt Nam, mang đến vẻ đẹp thanh lịch và độc đáo cho người sử dụng.",
    img: "src/assets/A6.png" },
    { id: 7, title: "Đồ gốm men lam - Chén trà bộ", note: "Bộ chén trà men lam, phong cách tối giản, cảm hứng Nhật-Việt.", img: "https://images.unsplash.com/photo-1526178614862-9f5c9d2b51f8?auto=format&fit=crop&w=1200&q=60" },
    { id: 8, title: "Thảm thổ cẩm - Tay dệt", note: "Thảm dệt tay với họa tiết dân tộc, chất liệu bền và mềm mại.", img: "https://images.unsplash.com/photo-1505691723518-36a5b0b1f3b9?auto=format&fit=crop&w=1200&q=60" },
  ];

  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.card') || [];

    gsap.fromTo(cards,
      { y: 30, autoAlpha: 0, scale: 0.98 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%'
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      {/* Soft gradient background kept for contrast */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#FFF9F5] to-[#F6FBFF]" />

      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Khám phá một số đồ thủ công mỹ nghệ Việt Nam nổi bật!</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Một hành trình ngắn qua tay nghề, chất liệu và câu chuyện của từng sản phẩm.</p>
        </header>

        <div ref={containerRef} className="space-y-12">
          {products.map((p, idx) => {
            const imageLeft = idx % 2 === 0;
            return (
              <article key={p.id} className="card transform opacity-0" aria-labelledby={`prod-${p.id}`}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                  <div className={`${imageLeft ? 'md:col-span-6 md:order-1' : 'md:col-span-6 md:order-2'} flex justify-center`}>
                    {/* Image without extra white panel */}
                    <img src={p.img} alt={p.title} className="w-full max-w-xl h-auto md:h-[420px] object-contain object-center rounded-none shadow-none border-0 bg-transparent" />
                  </div>

                  <div className={`${imageLeft ? 'md:col-span-6 md:order-2' : 'md:col-span-6 md:order-1'}`}>
                    {/* Plain text block (no boxed panel) */}
                    <div className="p-2 md:p-0">
                      <h3 id={`prod-${p.id}`} className="text-2xl md:text-3xl font-semibold text-slate-900">{p.title}</h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">{p.note}</p>

                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500 items-center">
                        <span className="px-2 py-0.5 rounded text-slate-600">Thủ công</span>
                        <span className="px-2 py-0.5 rounded text-slate-600">Việt Nam</span>
                      </div>

                      
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        <footer className="text-center mt-14 text-sm text-slate-600">© Bộ sưu tập thủ công — Tôn vinh nghệ nhân Việt Nam</footer>
      </div>

      <style>{`
        .card { will-change: transform, opacity; }
        @media (max-width: 768px) { .card { margin-inline: 0; } }
      `}</style>
    </section>
  );
}
