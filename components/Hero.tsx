
import React from 'react';
import { ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/230/1920/1080?grayscale&blur=2" 
          className="w-full h-full object-cover opacity-30" 
          alt="Sustainability Highway"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041612] via-transparent to-[#041612]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#041612] via-transparent to-[#041612]"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4CAF50]/30 bg-[#4CAF50]/10 text-[#4CAF50] text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
          {ICONS.Globe} Leading the Global Green Revolution
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.95]">
          BUILDING THE <br />
          <span className="gold-text italic">FUTURE</span> OF KSA
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          The ultimate knowledge portal for Vision 2030 construction standards, Mostadam certification, and the path to a sustainable desert future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#hub" className="w-full sm:w-auto px-8 py-4 bg-[#4CAF50] hover:bg-[#43a047] rounded-2xl font-black text-black text-lg transition-all transform hover:-translate-y-1">
            EXPLORE KNOWLEDGE HUB
          </a>
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-2xl font-black text-white text-lg transition-all">
            VIEW MEGA PROJECTS
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
