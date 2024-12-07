import React from 'react';
import { ShoppingCart, Sprout, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar({ cartCount }: { cartCount: number }) {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sprout className="h-8 w-8 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold">TaniMart</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart"
              className={`relative p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300 ${
                location.pathname === '/cart' ? 'bg-white bg-opacity-20' : ''
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/profile"
              className={`p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300 ${
                location.pathname === '/profile' ? 'bg-white bg-opacity-20' : ''
              }`}
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}