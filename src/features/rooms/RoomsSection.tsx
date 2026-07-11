import React from 'react';
import { Users, Bed, Maximize, ArrowRight } from 'lucide-react';
import { hotelConfig } from '../../config/hotelConfig';

export default function RoomsSection() {
  const { rooms } = hotelConfig;

  return (
    <section id="rooms" className="bg-[#11141A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[#C5A880] text-xs font-serif tracking-[0.3em] block uppercase">
            ✦ ACCOMMODATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white leading-tight">
            Sanctuaries of Absolute Comfort
          </h2>
          <p className="text-sm md:text-md text-slate-400 font-light max-w-xl leading-relaxed tracking-wide">
            Each suite is an architectural masterpiece designed to provide complete structural isolation, premium acoustics, and tailored panoramic viewpoints.
          </p>
        </div>

        {/* Room Luxury Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white/[0.02] border border-white/5 flex flex-col group hover:border-[#C5A880]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Media Asset Window */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden bg-black/40">
                {/* Featured Luxury Indicator Badge */}
                {room.isFeatured && (
                  <div className="absolute top-4 left-4 z-20 bg-[#C5A880] text-[#11141A] text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 shadow-md">
                    Featured Suite
                  </div>
                )}
                
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Standard structural canvas placeholder if local file is missing during mobile testing
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='100%' height='100%' fill='%231E293B'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='24' fill='%23C5A880'>Luxury Suite Image Layer</text></svg>";
                  }}
                />
                {/* Linear darkening shadow overlay block for soft image matching */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Specification Context Block */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-serif text-white tracking-wide group-hover:text-[#E2C9A1] transition-colors duration-300">
                      {room.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-xl font-serif text-[#C5A880]">${room.pricePerNight}</span>
                      <span className="text-[10px] text-slate-500 block uppercase tracking-widest mt-0.5">/ night</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Micro-Attribute Icon Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="text-xs font-light tracking-wide">{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="text-xs font-light tracking-wide truncate">{room.bedType.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="text-xs font-light tracking-wide">{room.size}</span>
                  </div>
                </div>

                {/* Action CTA Block */}
                <div className="pt-2">
                  <a
                    href="#booking"
                    className="w-full group bg-white/5 hover:bg-[#C5A880] text-white hover:text-[#11141A] text-xs uppercase tracking-widest py-4 font-bold flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent"
                  >
                    <span>Reserve Accommodation</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
