import React from 'react';
import { userProfile } from '../data/profile';

export function ProfilePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
            <p className="text-gray-600">{userProfile.age} tahun</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Total Penjualan</h2>
            <p className="text-2xl font-bold text-green-600">
              Rp {userProfile.totalSales.toLocaleString()}
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Saldo</h2>
            <p className="text-2xl font-bold text-blue-600">
              Rp {userProfile.balance.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}