import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

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
          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-[#4CAF50] transition-colors font-medium uppercase tracking-wide text-sm py-4">
              Our Projects
              <span className="group-hover:rotate-180 transition-transform duration-300">
                <ChevronDown size={16} />
              </span>
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full left-0 w-56 bg-[#041612] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <div className="p-2 flex flex-col gap-1">
                <a href="/leed-guide" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  LEED
                </a>
                <a href="/projects/mostadam" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  Mostadam
                </a>
                <a href="/projects/envision" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  Envision
                </a>
                <a href="/projects/well" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  WELL
                </a>
                <a href="/projects/vision-2050" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                  Vision 2050
                </a>
              </div>
            </div>
          </div>
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
          <div className="flex flex-col gap-3 pl-4 border-l-2 border-white/10 ml-1">
            <span className="text-white/50 text-sm uppercase tracking-wider font-bold mb-1">Our Projects</span>
            <a href="/leed-guide" className="text-white hover:text-[#4CAF50] text-lg font-bold">LEED</a>
            <a href="/projects/mostadam" className="text-white hover:text-[#4CAF50] text-lg font-bold">Mostadam</a>
            <a href="/projects/envision" className="text-white hover:text-[#4CAF50] text-lg font-bold">Envision</a>
            <a href="/projects/well" className="text-white hover:text-[#4CAF50] text-lg font-bold">WELL</a>
            <a href="/projects/vision-2050" className="text-white hover:text-[#4CAF50] text-lg font-bold">Vision 2050</a>
          </div>
          <a href="/insights" className="text-white hover:text-[#4CAF50] text-lg font-bold">Blog</a>
          <a href="/contact" className="text-[#C5A059] font-bold">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
