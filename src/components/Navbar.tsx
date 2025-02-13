import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Logos/Logo_IAF-removebg-preview.png';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Programmes', href: '/programs' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Communauté', href: '/community' },
    { name: 'news', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo personnalisé */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={Logo}  
                alt="Logo Ingénieur·e Au Féminin"
                className="h-8 w-8"  
              />
              <span className="font-bold text-xl text-gray-900">Ingénieur·e Au Féminin</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#edd4db] text-[#ed0f4e]'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-[#ed0f4e]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ed0f4e] hover:bg-purple-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-[#edd4db] text-[#ed0f4e]'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-[#ed0f4e]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#ed0f4e] hover:bg-[#ed0f4e]"
              onClick={() => setIsOpen(false)}
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
