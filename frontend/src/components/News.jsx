import React from 'react';

const news = [
  { title: 'Sản phẩm mới Tết 2025', date: '15/11/2025' },
  { title: 'Hội chợ thủ công mỹ nghệ Hà Nội', date: '01/11/2025' },
];

export default function News() {
  return (
    <section id="news" className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Tin tức</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((n, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition cursor-pointer">
            <h3 className="font-semibold text-lg">{n.title}</h3>
            <p className="text-gray-500">{n.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
