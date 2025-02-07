import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

interface SupportCardProps {
  title: string;
  description: string;
  contactNumber: string;
  icon: 'phone' | 'mail' | 'chat';
}

const icons = {
  phone: Phone,
  mail: Mail,
  chat: MessageSquare
};

export default function SupportCard({ title, description, contactNumber, icon }: SupportCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{contactNumber}</p>
    </div>
  );
}