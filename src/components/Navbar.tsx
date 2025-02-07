import React from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import Button from './shared/Button';
import Container from './shared/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-indigo-600 font-bold text-2xl">YourBrand</span>
            </div>
            <div className="hidden md:flex md:ml-6 space-x-4 lg:space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Prepaid</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Postpaid</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Broadband</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">DTH</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Bank</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
              <ShoppingCart size={20} />
            </button>
            <Button>Login</Button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <Container>
            <div className="py-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Prepaid</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Postpaid</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Broadband</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">DTH</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">Bank</a>
              <div className="mt-4 flex items-center space-x-4 px-3">
                <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
                  <Search size={20} />
                </button>
                <button className="p-2 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
                  <ShoppingCart size={20} />
                </button>
                <Button fullWidth>Login</Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}