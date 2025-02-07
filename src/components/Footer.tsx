import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Prepaid</a></li>
              <li><a href="#" className="hover:text-indigo-400">Postpaid</a></li>
              <li><a href="#" className="hover:text-indigo-400">Broadband</a></li>
              <li><a href="#" className="hover:text-indigo-400">DTH</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400">Track Order</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Stores</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400">Investors</a></li>
              <li><a href="#" className="hover:text-indigo-400">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram /></a>
              <a href="#" className="hover:text-indigo-400"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} YourBrand Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}