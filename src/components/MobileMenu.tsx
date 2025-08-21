import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/category-select', label: 'Our Collections' },
  { to: '/craftsmanship', label: 'Craftsmanship' },
  { to: '/global-reach', label: 'Global Reach' },
  { to: '/blogspot', label: 'Reviews' },
];

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        id="mobile-menu-button"
        className="md:hidden text-white ml-4 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open mobile menu"
      >
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 6h14M3 10h14M3 14h14" />
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="fixed top-16 left-0 right-0 bg-[#331211] shadow-lg z-50 p-6 md:hidden"
        >
          <ul className="space-y-6">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block text-lg ${location.pathname === link.to ? 'text-white font-semibold' : 'text-gray-300 hover:text-white transition-colors'}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
