import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold text-lg">
            Rp {product.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">
            Stok: {product.stock}
          </span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full btn-primary flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Tambah ke Keranjang</span>
        </button>
      </div>
    </div>
  );
}