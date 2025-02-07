import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

export default function ReviewCard({ name, location, rating, review, date }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-indigo-400 text-indigo-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-2">{review}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}