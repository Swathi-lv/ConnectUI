import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    review: "Switched to YourBrand 5G, and the speed is incredible! Customer service has been excellent.",
    date: "March 15, 2024"
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    rating: 4,
    review: "Great network coverage and reliable service. The YourBrand app is very useful.",
    date: "March 12, 2024"
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    review: "Been using YourBrand Fiber for a year now. Zero complaints about speed and uptime.",
    date: "March 10, 2024"
  }
];

export default function Reviews() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
          <p className="mt-4 text-xl text-gray-600">See what our customers have to say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}