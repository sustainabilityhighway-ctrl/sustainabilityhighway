
import React from 'react';
import { PROJECTS, ICONS } from '../constants';

const VisionProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#041612]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">VISION <span className="gold-text italic">PROJECTS</span></h2>
          <p className="text-white/40 max-w-xl text-lg">Leading the world by example. These benchmarks of modern engineering define our national commitment to nature.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative glass rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#C5A059]/30 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black mb-2 text-white">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.sustainabilityFeatures.map((feat, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded border border-white/5">
                      {feat}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[#C5A059] font-black text-sm uppercase tracking-widest group/btn">
                  LEARN MORE {ICONS.ChevronRight}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionProjects;
