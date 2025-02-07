import React from 'react';
import SupportCard from './SupportCard';

const supportChannels = [
  {
    title: "General Support",
    description: "24/7 assistance for all your queries",
    contactNumber: "555",
    icon: "phone" as const
  },
  {
    title: "Technical Support",
    description: "Expert help for technical issues",
    contactNumber: "888",
    icon: "phone" as const
  },
  {
    title: "DTH Support",
    description: "Dedicated DTH service assistance",
    contactNumber: "11444",
    icon: "phone" as const
  }
];

export default function Support() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Always Here for You</h2>
          <p className="mt-4 text-xl text-gray-600">Expert support, whenever you need it</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <SupportCard key={index} {...channel} />
          ))}
        </div>
      </div>
    </div>
  );
}