import React from 'react';
import BrandAnimation from './BrandAnimation';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/category-select', label: 'Our Collections' },
  { to: '/craftsmanship', label: 'Craftsmanship' },
  { to: '/global-reach', label: 'Global Reach' },
  { to: '/blogspot', label: 'Reviews' },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header id="main-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#331211] shadow-lg group">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center text-sm">
        <Link to="/" className="flex items-center">
          <img src={'/assets/logo2.png'} alt="Indikaara - From Kala to Karya" className="h-[3.3rem]" />
          <span className="brand-name"><BrandAnimation /></span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative group ${location.pathname === link.to ? 'text-white font-semibold' : 'text-gray-300 hover:text-white transition-colors'}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left ${location.pathname === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
