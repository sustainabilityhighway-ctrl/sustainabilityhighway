import React from 'react';
import { ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-40 md:pt-48 pb-20">
      {/* Background Video */}
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://leedksa.com/wp-content/uploads/2024/06/LEED-KSA-LOGO-1000-x-500-px-1.png"
        >
          <source src="https://leedksa.com/wp-content/uploads/2024/06/d24a30f209476185291859aff6a9dd8a_2163.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-6">

          {/* Left Content */}
          <div className="text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight drop-shadow-xl">
              BUILDING A <br />
              <span className="text-[#4CAF50]">GREENER FUTURE</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-lg font-light drop-shadow-md">
              Sustainability Highway is dedicated to promoting sustainable development by setting benchmarks for environmental performance in the Kingdom of Saudi Arabia, aligning with Vision 2030.
            </p>
          </div>

          {/* Right Content - Vision 2030 Logo Style */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="w-80 h-80 relative animate-pulse">
              <img
                src="https://leedksa.com/wp-content/uploads/2024/08/Untitled-design-20.png"
                alt="Vision 2030 Sustainability"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        {ICONS.ChevronDown}
      </div>
    </section>
  );
};

export default Hero;
