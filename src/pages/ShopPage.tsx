import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
}

export function ShopPage({ onAddToCart }: ShopPageProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bibit Tanaman Berkualitas
        </h1>
        <p className="mt-2 text-gray-600">
          Pilih dari koleksi bibit tanaman terbaik kami untuk hasil panen yang maksimal
        </p>
      </div>

      <ProductGrid 
        products={products} 
        onAddToCart={onAddToCart}
      />
    </main>
  );
}