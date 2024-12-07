import React from 'react';
import { Cloud, Droplets, Sun, Wind } from 'lucide-react';

export function WeatherPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Informasi Cuaca
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-600">Suhu</p>
              <p className="text-2xl font-bold">28°C</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
            <Droplets className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Kelembaban</p>
              <p className="text-2xl font-bold">75%</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
            <Wind className="h-8 w-8 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Kecepatan Angin</p>
              <p className="text-2xl font-bold">12 km/h</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
            <Cloud className="h-8 w-8 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Curah Hujan</p>
              <p className="text-2xl font-bold">2 mm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Prakiraan Cuaca 5 Hari Kedepan</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center space-x-4">
                <Sun className="h-6 w-6 text-yellow-500" />
                <span className="font-medium">
                  {new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-8">
                <span>28°C</span>
                <span className="text-gray-500">Cerah</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}