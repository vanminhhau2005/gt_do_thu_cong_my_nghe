import React from 'react';

const testimonials = [
  { name: 'Nguyễn Văn A', content: 'Sản phẩm đẹp, giao hàng nhanh và dịch vụ tận tình.' },
  { name: 'Trần Thị B', content: 'Chất lượng tuyệt vời, rất hài lòng khi mua ở đây!' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Khách hàng nói về chúng tôi</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition">
            <p className="text-gray-700 italic">"{t.content}"</p>
            <p className="mt-4 font-semibold text-emerald-700">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
