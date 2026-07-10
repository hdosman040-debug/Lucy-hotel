import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { hotelInfo } from '../data/hotelInfo';

export default function Footer() {
  return (
    <footer className="bg-[#11141A] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold tracking-widest uppercase text-[#C5A880]">
            {hotelInfo.name}
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Experience premium hospitality in the heart of Wollo. Providing comfort, luxury, and unmatched local experiences in Dessie, Ethiopia.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#C5A880]" />
              <span>{hotelInfo.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#C5A880]" />
              <a href={`tel:${hotelInfo.phone}`} className="hover:text-white">{hotelInfo.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
