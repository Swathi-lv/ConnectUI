import React from 'react';
import { Wifi, Smartphone, Tv, CreditCard, Check } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "5G Network",
    description: "Experience ultra-fast speeds with our nationwide 5G coverage",
    benefits: ["Up to 3Gbps speed", "Ultra-low latency", "Wide coverage"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Plans",
    description: "Flexible prepaid and postpaid plans for every need",
    benefits: ["Unlimited calls", "High-speed data", "OTT subscriptions"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <Tv className="h-8 w-8" />,
    title: "YourBrand Xstream",
    description: "Premium entertainment with crystal clear picture quality",
    benefits: ["4K content", "Live TV", "Multi-screen access"],
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "YourBrand Payments Bank",
    description: "Secure and convenient banking services",
    benefits: ["Zero balance account", "UPI payments", "Insurance"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = React.useState(0);

  return (
    <div className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose YourBrand?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experience seamless connectivity across all our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform -translate-y-1'
                    : 'bg-white hover:bg-indigo-50 text-gray-900 shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className={`${
                    activeFeature === index ? 'text-white' : 'text-indigo-600'
                  } mr-4 flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className={`${
                      activeFeature === index ? 'text-indigo-100' : 'text-gray-600'
                    } text-sm md:text-base`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mt-8 lg:mt-0">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <img 
                src={features[activeFeature].image} 
                alt={features[activeFeature].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-indigo-600 mb-6 text-center">
              {features[activeFeature].icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
              {features[activeFeature].title} Benefits
            </h3>
            <div className="space-y-4">
              {features[activeFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-indigo-50 rounded-lg">
                  <Check className="text-indigo-600 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}