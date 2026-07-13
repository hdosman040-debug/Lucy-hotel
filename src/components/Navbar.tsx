import React, { useState } from 'react';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Structured menu configurations routing to independent page frames or home anchors
  const services = [
    { name: 'Rooms', path: '/rooms' },
    { name: 'Food and Restaurant', path: '/dining' },
    { name: 'Meeting and Conference', path: '/#meeting-and-conference' },
    { name: 'Bar', path: '/#bar' },
    { name: 'Free WiFi', path: '/#free-wifi' }
  ];

  return (
    <nav className="bg-[#11141A] text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
              LUCY HOTEL
            </a>
          </div>
          
          {/* Desktop Navigation View */}
          <div className="hidden md:flex items-center space-x-8 font-medium tracking-wide text-xs">
            <a href="/" className="hover:text-amber-500 transition-colors">HOME</a>
            <a href="/#about" className="hover:text-amber-500 transition-colors">ABOUT</a>
            
            {/* Desktop Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 hover:text-amber-500 transition-colors focus:outline-none uppercase"
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-200">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.path}
                      className="block px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-600 transition-colors font-normal"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/rooms" className="hover:text-amber-500 transition-colors">ROOMS</a>
            <a href="/#booking" className="hover:text-amber-500 transition-colors flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> BOOKING
            </a>
            <a href="/#contact" className="hover:text-amber-500 transition-colors">CONTACT</a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      {isOpen && (
        <div className="md:hidden bg-[#11141A] px-4 pt-2 pb-6 space-y-1 border-t border-gray-800 font-semibold tracking-wider text-sm">
          <a href="/" className="block text-gray-300 hover:text-amber-500 py-2.5" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="/#about" className="block text-gray-300 hover:text-white py-2.5" onClick={() => setIsOpen(false)}>ABOUT</a>
          
          {/* Expandable Services Section Container */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-amber-500 py-2.5 focus:outline-none"
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Visual matches the crisp white dropdown layout block from reference image */}
            {isServicesOpen && (
              <div className="mt-1 mb-2 bg-white text-gray-900 rounded-sm shadow-xl py-2 px-4 space-y-3 animate-fadeIn">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.path}
                    className="block text-base font-normal text-gray-800 hover:text-amber-600 py-1.5 border-b border-gray-100 last:border-0"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/rooms" className="block text-gray-300 hover:text-white py-2.5" onClick={() => setIsOpen(false)}>ROOMS</a>
          <a href="/#booking" className="block text-gray-300 hover:text-white py-2.5 flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Calendar className="w-4 h-4" /> BOOKING
          </a>
          <a href="/#contact" className="block text-gray-300 hover:text-white py-2.5" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
}
