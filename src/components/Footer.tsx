import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#11141A] text-white py-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/[0.05] pb-8 mb-8">
          <div>
            <span className="text-lg font-serif font-bold tracking-widest text-white">
              LUCY <span className="text-[#C5A880]">HOTEL</span>
            </span>
            <p className="text-xs text-gray-400 font-light mt-1">
              Elevating premium hospitality parameters across Dessie, Wollo.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-gray-400 font-light">
            <a href="#home" className="hover:text-[#C5A880] transition-colors">Top</a>
            <a href="#rooms" className="hover:text-[#C5A880] transition-colors">Suites</a>
            <a href="#amenities" className="hover:text-[#C5A880] transition-colors">Amenities</a>
            <a href="#location" className="hover:text-[#C5A880] transition-colors">Location</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light">
          <p>© 2026 Lucy Hotel. All rights reserved across regional governance networks.</p>
          <p className="tracking-wide">Designed for Maximum Trust Optimization.</p>
        </div>
      </div>
    </footer>
  );
}
