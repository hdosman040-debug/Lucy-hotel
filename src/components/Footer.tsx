import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { hotelConfig } from '../config/hotelConfig';

export default function Footer() {
  const { brand, contact } = hotelConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11141A] border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          {/* Identity Block */}
          <div className="space-y-4">
            <span className="text-xl font-serif tracking-[0.2em] text-white block">
              {brand.name.toUpperCase()}
            </span>
            <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
              A high-end hospitality destination blending premium architectural prestige with authentic Wollo cultural heritage.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-light">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#rooms" className="hover:text-white transition-colors">Rooms & Suites</a>
              <a href="#dining" className="hover:text-white transition-colors">Fine Dining</a>
              <a href="#location" className="hover:text-white transition-colors">Location</a>
            </div>
          </div>

          {/* Contact Direct Loop */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Inquiries & Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-light">
              <a href={`tel:${contact.phone}`} className="flex items-center space-x-2.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center space-x-2.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="truncate">{contact.email}</span>
              </a>
              <div className="flex items-center space-x-2.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span className="truncate">{contact.address}, {contact.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 uppercase tracking-widest font-mono">
          <span>© {currentYear} {brand.name}. All Rights Reserved.</span>
          <span>Crafted for Luxury Experience</span>
        </div>

      </div>
    </footer>
  );
}
