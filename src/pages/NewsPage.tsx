import React from 'react';

const news = [
  {
    id: 1,
    title: "Teknologi Pertanian Terbaru untuk Meningkatkan Hasil Panen",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    date: "20 Maret 2024",
    excerpt: "Inovasi teknologi pertanian terkini yang dapat membantu petani meningkatkan produktivitas..."
  },
  {
    id: 2,
    title: "Tips Mengatasi Hama Tanaman Secara Organik",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
    date: "19 Maret 2024",
    excerpt: "Cara-cara alami dan ramah lingkungan untuk mengendalikan hama pada tanaman..."
  },
  {
    id: 3,
    title: "Program Pemerintah untuk Pemberdayaan Petani",
    image: "https://images.unsplash.com/photo-1595880500386-4b33c7a45748?auto=format&fit=crop&q=80&w=800",
    date: "18 Maret 2024",
    excerpt: "Berbagai program dan bantuan pemerintah untuk mendukung kesejahteraan petani..."
  }
];

export function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Berita Pertanian Terkini
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {item.excerpt}
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Baca selengkapnya →
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}