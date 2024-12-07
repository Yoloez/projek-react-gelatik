import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

export function FeatureCard({ icon, title, description, link, color }: FeatureCardProps) {
  return (
    <Link to={link}>
      <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden group">
        <div className={`${color} p-8 flex justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
          <div className="transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <div className="p-6 bg-gradient-to-b from-white to-gray-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}