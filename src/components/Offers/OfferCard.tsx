import React from 'react';
import { Clock, Check } from 'lucide-react';

interface OfferCardProps {
  title: string;
  price: string;
  validity: string;
  benefits: string[];
  isPopular?: boolean;
}

export default function OfferCard({ title, price, validity, benefits, isPopular }: OfferCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isPopular ? 'ring-2 ring-indigo-600' : ''}`}>
      {isPopular && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-1 text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">₹{price}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock size={16} className="mr-2" />
          <span>{validity}</span>
        </div>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check size={16} className="mr-2 text-green-500" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity">
          Get Now
        </button>
      </div>
    </div>
  );
}