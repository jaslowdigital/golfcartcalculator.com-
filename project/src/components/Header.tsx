import React, { useState } from 'react';
import { Club as GolfClub, X, Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black border-b neon-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GolfClub className="h-8 w-8 text-[#00ff9d]" />
          <h1 className="text-2xl font-bold text-white neon-glow">Golf Cart Calculator</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-gray-300 hover:text-[#00ff9d] transition-colors">How It Works</a>
          <a href="#about-us" className="text-gray-300 hover:text-[#00ff9d] transition-colors">About Us</a>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-[#00ff9d] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about-us" 
              className="text-gray-300 hover:text-[#00ff9d] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
