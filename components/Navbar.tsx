import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#041612]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6 navbar-glass'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-[#4CAF50]' : 'bg-[#4CAF50]/80 group-hover:bg-[#4CAF50]'}`}>
            {ICONS.Leaf}
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-heading text-white">
            Sustainability <span className="text-[#C5A059]">Highway</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-[#4CAF50] transition-colors font-medium uppercase tracking-wide text-sm">Home</a>
          <a href="/leed-guide" className="text-white hover:text-[#4CAF50] transition-colors font-medium uppercase tracking-wide text-sm">LEED Guide</a>
          <a href="#projects" className="text-white hover:text-[#4CAF50] transition-colors font-medium uppercase tracking-wide text-sm">Our Projects</a>
          <a href="/insights" className="text-white hover:text-[#4CAF50] transition-colors font-medium uppercase tracking-wide text-sm">Blog</a>
          <a href="/contact" className="px-6 py-2 border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#041612] transition-colors font-bold uppercase tracking-widest text-xs">Contact Us</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#041612] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          <a href="/" className="text-white hover:text-[#4CAF50] text-lg font-bold">Home</a>
          <a href="/leed-guide" className="text-white hover:text-[#4CAF50] text-lg font-bold">LEED Guide</a>
          <a href="#projects" className="text-white hover:text-[#4CAF50] text-lg font-bold">Our Projects</a>
          <a href="/insights" className="text-white hover:text-[#4CAF50] text-lg font-bold">Blog</a>
          <a href="/contact" className="text-[#C5A059] font-bold">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
