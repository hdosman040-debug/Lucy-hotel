import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { hotelConfig } from '../../config/hotelConfig';

export default function HeroSection() {
  const { brand } = hotelConfig;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#11141A]">
      {/* Local Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Lucy Hotel"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent opacity-90" />
      </div>

      {/* Main Brand Messaging Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-20 flex flex-col items-start space-y-6">
        <span className="text-[#C5A880] text-xs font-serif tracking-[0.4em] block uppercase">
          ✦ {brand.tagline}
        </span>
        
        {/* Custom centered Amharic text element added directly into the stream layout */}
        <div className="w-full text-left py-2">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-[#E2C9A1] block opacity-90">
            ሰአዳ መሀመድ
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif tracking-wide text-white max-w-3xl leading-[1.15]">
          {brand.subtitle}
        </h1>
        
        <p className="text-xs md:text-sm text-slate-200 font-light max-w-lg leading-relaxed tracking-wide">
          Experience world-class architectural grandeur paired with deep historical hospitality right in the beating heart of Dessie.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href="#booking"
            className="bg-[#C5A880] hover:bg-[#E2C9A1] text-[#11141A] font-bold text-xs uppercase tracking-widest px-8 py-4 flex items-center justify-center space-x-2 transition-all duration-300 group shadow-2xl"
          >
            <span>Reserve Sanctuary</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#rooms"
            className="border border-white/40 hover:border-white text-white font-medium text-xs uppercase tracking-widest px-8 py-4 text-center transition-all duration-300 bg-black/20 backdrop-blur-sm"
          >
            Explore Suites
          </a>
        </div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 opacity-70">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white font-mono font-light">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#C5A880] animate-bounce" />
      </div>
    </section>
  );
}
