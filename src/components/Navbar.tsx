import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { hotelInfo } from '../data/hotelInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#11141A]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xl font-bold tracking-widest text-[#C5A880] uppercase">
              {hotelInfo.name}
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider -mt-1">
              {hotelInfo.location}
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium tracking-wide">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#C5A880] transition-colors duration-200 text-sm uppercase">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#booking" className="bg-[#C5A880] hover:bg-[#A38456] text-[#11141A] font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 text-sm uppercase tracking-wider flex items-center gap-2">
              <Calendar size={16} />
              Book Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1E232E] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-[#11141A] hover:text-[#C5A880] transition-all">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
