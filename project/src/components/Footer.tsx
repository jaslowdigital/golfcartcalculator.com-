import React from 'react';
import { Club as GolfClub, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t neon-border">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <GolfClub className="h-6 w-6 text-[#00ff9d]" />
              <h2 className="text-xl font-bold text-white neon-glow">Golf Cart Calculator</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              The most trusted source for accurate golf cart calculations since 2015. 
              Our data-driven approach helps you understand your cart's value.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff9d] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-[#00ff9d] transition-colors">Calculator</Link></li>
                <li><Link to="/buying-guide" className="text-gray-400 hover:text-[#00ff9d] transition-colors">Buying Guide</Link></li>
                <li><Link to="/selling-tips" className="text-gray-400 hover:text-[#00ff9d] transition-colors">Selling Tips</Link></li>
                <li><Link to="/market-trends" className="text-gray-400 hover:text-[#00ff9d] transition-colors">Market Trends</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@golfcartcalculator.com</li>
                <li className="text-gray-400">(555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2025 GolfCartCalculator.com. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
