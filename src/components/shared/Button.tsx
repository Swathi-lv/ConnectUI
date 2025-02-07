import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  icon: Icon,
  onClick,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300';
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-600/30 transform hover:-translate-y-1',
    secondary: 'bg-white text-indigo-600 hover:bg-indigo-50',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
      {Icon && <Icon className="ml-2" size={20} />}
    </button>
  );
}