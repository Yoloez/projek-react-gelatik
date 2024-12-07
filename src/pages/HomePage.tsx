import React from 'react';
import { Cloud, Newspaper, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

export function HomePage() {
  const features = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Jual Beli Bibit Tanaman",
      description: "Temukan berbagai bibit tanaman berkualitas untuk hasil panen terbaik",
      link: "/shop",
      color: "bg-green-500"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cek Cuaca",
      description: "Pantau kondisi cuaca untuk menentukan waktu tanam yang tepat",
      link: "/weather",
      color: "bg-blue-500"
    },
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: "Berita Pertanian",
      description: "Dapatkan informasi terkini seputar dunia pertanian",
      link: "/news",
      color: "bg-orange-500"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Selamat Datang di TaniMart
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Platform terpercaya untuk memenuhi kebutuhan pertanian Anda dengan berbagai
          layanan yang memudahkan para petani modern
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="mt-16 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mengapa Memilih TaniMart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Bibit Berkualitas</h3>
            <p className="text-gray-600">Bibit tanaman unggulan dengan tingkat keberhasilan tinggi</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Informasi Akurat</h3>
            <p className="text-gray-600">Data cuaca dan berita pertanian yang selalu diperbarui</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Dukungan Penuh</h3>
            <p className="text-gray-600">Bantuan teknis dan konsultasi dari tim ahli kami</p>
          </div>
        </div>
      </div>
    </main>
  );
}