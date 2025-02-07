import React from 'react';
import OfferCard from './OfferCard';

const offers = [
  {
    title: "Ultimate 5G Freedom Pack",
    price: "990",
    validity: "84 days",
    benefits: [
      "Unlimited 5G Data",
      "Unlimited Voice Calls",
      "100 SMS/day",
      "Premium Streaming Access",
      "Cloud Gaming Ready"
    ],
    isPopular: true
  },
  {
    title: "Smart Value Pack",
    price: "399",
    validity: "56 days",
    benefits: [
      "2GB/day High-Speed Data",
      "Unlimited Voice Calls",
      "100 SMS/day",
      "Sync Music Premium"
    ]
  },
  {
    title: "Power Boost Pack",
    price: "119",
    validity: "30 days",
    benefits: [
      "50GB Extra Data",
      "Data Rollover",
      "5G Ready",
      "Weekend Data Bonus"
    ]
  }
];

export default function Offers() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Unbeatable Offers</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the perfect plan for your digital lifestyle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
}