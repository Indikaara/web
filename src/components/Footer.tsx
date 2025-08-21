import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 text-xs py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">Our Products</h4>
          <ul>
            <li className="mb-2"><Link to="/category-select" className="hover:text-white transition-colors">All Collections</Link></li>
            <li className="mb-2"><Link to="/shop?category=Rugs" className="hover:text-white transition-colors">Rugs</Link></li>
            <li className="mb-2"><Link to="/shop?category=Wall_Hanging" className="hover:text-white transition-colors">Wall Hanging</Link></li>
            <li className="mb-2"><Link to="/shop?category=Home_Decor" className="hover:text-white transition-colors">Home Decor</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">About Indikaara</h4>
          <ul>
            <li className="mb-2"><Link to="/blogspot" className="hover:text-white transition-colors">Blogs</Link></li>
            <li className="mb-2"><Link to="/#our-story" className="hover:text-white transition-colors">Our Story</Link></li>
            <li className="mb-2"><Link to="/craftsmanship" className="hover:text-white transition-colors">Craftsmanship</Link></li>
            <li className="mb-2"><Link to="/global-reach" className="hover:text-white transition-colors">Global Reach</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul>
            <li className="mb-2"><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li className="mb-2"><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
        {/* Social media and newsletter sections... */}
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
        <p>Copyright &copy; 2025 Indikaara Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
