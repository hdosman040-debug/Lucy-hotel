import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const WHATSAPP_URL = "https://wa.me/251911234567?text=Hello%20Lucy%20Hotel%2C%20I%20would%20like%20to%20check%20room%20availability.";

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#11141A] overflow-hidden">
      {/* High-Performance Absolute Image Asset Layer */}
      <img
        src="/images/hotel/exterior-night.jpg"
        alt="Lucy Hotel Premium Architectural Structure Building in Dessie"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        loading="eager"
      />

      {/* Multi-stage High-Contrast Luxury Gradient Shadow Protection */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-[#11141A] z-10" />

      {/* Hero Content Layout */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <div className="inline-flex items-center gap-2 bg-[#11141A]/60 backdrop-blur-md border border-[#C5A880]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[#C5A880] text-xs font-semibold tracking-wider uppercase">
            ✦ The Premier Luxury Destination in Dessie
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
          LUCY HOTEL <br />
          <span className="bg-gradient-to-r from-[#C5A880] via-[#E2C9A1] to-[#C5A880] bg-clip-text text-transparent">
            Elevate Your Stay
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed mb-10 font-light">
          Experience world-class comfort and authentic Ethiopian hospitality in the heart of Wollo. Relax in beautifully designed spaces tailored for premium travelers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C5A880] text-[#11141A] font-bold text-base px-8 py-4 rounded-sm hover:bg-[#E2C9A1] transition-all duration-300 tracking-wider uppercase shadow-xl group active:scale-98"
          >
            Book Your Stay
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/rooms"
            className="w-full sm:w-auto flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium text-base px-8 py-4 rounded-sm hover:bg-white/10 transition-all duration-300 tracking-wider uppercase"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
