import React from 'react';
import { TrendingUp, Users, Globe2, Award } from 'lucide-react';

const stats = [
  {
    label: 'Market Cap',
    value: '₹4.8T',
    subtext: '+15% YoY Growth',
    icon: TrendingUp
  },
  {
    label: 'Subscribers',
    value: '490M+',
    subtext: 'Across 17 Countries',
    icon: Users
  },
  {
    label: 'Network Coverage',
    value: '98%',
    subtext: 'Population Reach',
    icon: Globe2
  },
  {
    label: 'Brand Value',
    value: '#1',
    subtext: 'Telecom Brand in India',
    icon: Award
  }
];

export default function InvestorSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investing in India's Digital Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in building India's premier integrated telecommunications company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Invest in YourBrand?
            </h3>
            <p className="text-lg mb-8 text-indigo-100">
              Download our latest investor presentation and learn about our growth story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors font-semibold">
                Download Investor Deck
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-semibold">
                Schedule Investor Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}