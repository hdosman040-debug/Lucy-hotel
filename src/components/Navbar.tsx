import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotelConfig } from '../config/hotelConfig';

export default function Navbar() {
  const { brand, contact } = hotelConfig;
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
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#11141A]/90 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-gradient-to-b from-[#11141A]/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left Side: Brand Text Title */}
          <a href="#home" className="flex flex-col items-start select-none">
            <span className="text-lg font-serif tracking-[0.25em] text-white uppercase font-medium">
              {brand.name}
            </span>
            <span className="text-[9px] tracking-[0.15em] text-[#C5A880] font-mono font-light uppercase">
              {contact.city}
            </span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-300">
            <a href="#home" className="hover:text-[#C5A880] transition-colors">Home</a>
            <a href="#rooms" className="hover:text-[#C5A880] transition-colors">Suites</a>
            <a href="#dining" className="hover:text-[#C5A880] transition-colors">Dining</a>
            <a href="#location" className="hover:text-[#C5A880] transition-colors">Location</a>
          </div>

          {/* Right Side: Action Button & Local Logo */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${contact.phone}`}
              className="hidden sm:flex items-center space-x-2 text-xs uppercase tracking-widest font-mono text-[#E2C9A1] bg-white/5 border border-white/10 px-4 py-2 hover:bg-[#C5A880] hover:text-[#11141A] transition-all duration-300"
            >
              <Phone className="w-3 h-3" />
              <span>Call Desk</span>
            </a>

            {/* Local Logo Circle */}
            <div className="w-10 h-10 rounded-full border border-[#C5A880]/30 bg-[#11141A] overflow-hidden flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#11141A] flex flex-col justify-center items-center space-y-8 text-center md:hidden">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white tracking-widest">HOME</a>
          <a href="#rooms" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white tracking-widest">SUITES</a>
          <a href="#dining" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white tracking-widest">DINING</a>
          <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white tracking-widest">LOCATION</a>
        </div>
      )}
    </>
  );
}
