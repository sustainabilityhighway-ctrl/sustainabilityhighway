import React from 'react';
import { ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center bg-[#041612]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Headlines */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-8">
            {ICONS.Globe} Featured Story
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tight text-white">
            THE RISE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#81C784]">
              VERTICAL ECOLOGY
            </span>
          </h1>

          <p className="text-xl text-white/60 mb-10 leading-relaxed font-light max-w-lg">
            How The Line's zero-gravity urbanism is collecting global accolades and redefining sustainable living standards for the next century.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-[#4CAF50] text-[#041612] font-black rounded-xl hover:bg-[#43a047] transition-all transform hover:-translate-y-1">
              READ FULL ARTICLE
            </a>
            <a href="/insights" className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
              BROWSE ALL NEWS {ICONS.ChevronRight}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
            <span>• Vision 2030</span>
            <span>• Mostadam Gold</span>
            <span>• Future Tech</span>
          </div>
        </div>

        {/* Right: Feature Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#4CAF50] rounded-[2rem] rotate-3 opacity-20 blur-xl group-hover:rotate-6 transition-all duration-700"></div>

          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=1920&q=80"
              alt="Vertical Ecology"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041612] via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white border border-white/10 mb-4 inline-block">
                Architectural Digest
              </span>
              <p className="text-white/80 text-sm font-medium line-clamp-2">
                "Saudi Arabia's approach to vertical stratification in urban planning sets a new precedent for desert sustainability."
              </p>
            </div>
          </div>

          {/* Floater */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block animate-pulse">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C5A059] rounded-xl text-black">
                {ICONS.Leaf}
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Carbon Offset</p>
                <p className="text-xl font-black text-white">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
