import React from 'react';
import { Wifi, Smartphone, Tv, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="h-8 w-8" />,
    title: '5G Network',
    description: 'Experience ultra-fast speeds with our nationwide 5G coverage'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Plans',
    description: 'Flexible prepaid and postpaid plans for every need'
  },
  {
    icon: <Tv className="h-8 w-8" />,
    title: 'DTH Services',
    description: 'Premium entertainment with crystal clear picture quality'
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'Airtel Payments Bank',
    description: 'Secure and convenient banking services'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Airtel?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience seamless connectivity across all our services
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}