import React from 'react';
import { Users, Bed, Check, Calendar } from 'lucide-react';
import { demoRooms } from '../../data/rooms';

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase block">
            Luxury Accommodations
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11141A] uppercase tracking-tight">
            Our Rooms & Suites
          </h2>
          <div className="h-1 w-16 bg-[#C5A880] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500">
            Handcrafted sanctuaries tailored to provide absolute peace, comfort, and state-of-the-art utility.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoRooms.map((room) => (
            <div key={room.id} className="bg-[#FBF9F6] border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
              
              {/* Premium Image Placeholder Grid */}
              <div className="h-48 bg-gradient-to-br from-[#1E232E] to-[#11141A] p-6 flex flex-col justify-between relative text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="z-10 bg-[#C5A880] text-[#11141A] text-xs font-bold px-3 py-1 rounded-sm tracking-wider uppercase self-start shadow-sm">
                  Demo Space
                </div>
                <div className="z-10 mt-auto">
                  <span className="text-2xl font-black text-[#C5A880]">{room.pricePerNight} ETB</span>
                  <span className="text-xs text-gray-300 block">per night (est.)</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#11141A] uppercase tracking-wide">{room.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{room.description}</p>
                </div>

                {/* Core Specifications Bar */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-gray-200 text-xs text-gray-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#C5A880]" />
                    <span>Max Guests: {room.maxGuests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={16} className="text-[#C5A880]" />
                    <span>{room.bedType}</span>
                  </div>
                </div>

                {/* Amenities Sublist */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Room Features:</span>
                  <div className="grid grid-cols-2 gap-y-1 gap-x-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <Check size={12} className="text-[#C5A880] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <a href="#booking" className="w-full text-center bg-transparent border border-[#C5A880] text-[#11141A] hover:bg-[#C5A880] hover:text-white transition-all font-bold py-2.5 rounded-sm text-xs uppercase tracking-wider block">
                  Select Room
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
