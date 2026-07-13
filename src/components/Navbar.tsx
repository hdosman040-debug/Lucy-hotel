import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const WHATSAPP_URL = "https://wa.me/251911234567?text=Hello%20Lucy%20Hotel%2C%20I%20would%20like%20to%20check%20room%20availability.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated paths from hash links to professional page route entries
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Rooms', to: '/rooms' },
    { label: 'Dining', to: '/dining' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#11141A]/95 backdrop-blur-md border-b border-[#C5A880]/10 py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity Branding */}
          <Link to="/" className="flex-shrink-0 flex flex-col focus:outline-none">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white">
              LUCY <span className="text-[#C5A880]">HOTEL</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#E2C9A1] font-sans -mt-1">
              Dessie, Ethiopia
            </span>
          </Link>

          {/* Desktop Core Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#C5A880] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A880] text-[#11141A] font-semibold text-sm px-6 py-2.5 rounded-sm hover:bg-[#E2C9A1] transition-all duration-300 shadow-md tracking-wider uppercase text-center"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Breakpoint Handlers */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#C5A880] border border-[#C5A880]/20 rounded-md bg-[#11141A]/40"
              aria-label="Direct Booking Link"
            >
              <Calendar className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#C5A880] transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Navigation Tray */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#11141A] border-b border-[#C5A880]/10 shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#11141A]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-[#C5A880]/5 hover:text-[#C5A880] transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#C5A880] text-[#11141A] font-bold py-3 rounded-sm tracking-widest uppercase text-sm"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
