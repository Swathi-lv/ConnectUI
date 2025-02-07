import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "How do I check my data balance?",
    answer: "You can check your data balance through the YourBrand app, by dialing *000# or by sending an SMS 'BAL' to 0."
  },
  {
    question: "How can I port my number to YourBrand?",
    answer: "To port to YourBrand, SMS 'PORT' followed by your number to 0000. Visit the nearest YourBrand store with your ID proof once you receive the UPC code."
  },
  {
    question: "What makes our 5G network special?",
    answer: "Our cutting-edge 5G network delivers blazing-fast speeds up to 3Gbps, ultra-low latency, and superior coverage across major cities. Experience seamless streaming, gaming, and connectivity like never before."
  },
  {
    question: "What documents do I need for a new connection?",
    answer: "Getting started is simple! Just bring a valid photo ID (Aadhaar/Passport/Driving License), a recent passport-size photograph, and proof of address to any YourBrand store."
  }
];

export default function FAQ() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Got Questions?</h2>
          <p className="mt-4 text-xl text-gray-600">We've got clear, helpful answers</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}