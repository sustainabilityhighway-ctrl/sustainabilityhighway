
import React, { useState } from 'react';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl border border-white/10">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-[#4CAF50] rounded-lg group-hover:rotate-12 transition-transform duration-300">
            {ICONS.Leaf}
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Sustainability <span className="gold-text">Highway</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-white/70">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#hub" className="hover:text-white transition-colors">Knowledge Hub</a>
          <a href="#stats" className="hover:text-white transition-colors">Impact</a>
        </div>

        <button className="hidden md:block bg-[#C5A059] hover:bg-[#D4B977] text-black px-6 py-2 rounded-xl font-bold transition-all transform active:scale-95">
          Get Involved
        </button>

        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? ICONS.X : ICONS.Menu}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6 text-center font-bold uppercase">
            <a href="#vision" onClick={() => setIsOpen(false)}>Vision</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#hub" onClick={() => setIsOpen(false)}>Knowledge Hub</a>
            <a href="#stats" onClick={() => setIsOpen(false)}>Impact</a>
            <button className="bg-[#C5A059] text-black w-full py-3 rounded-xl">Get Involved</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
