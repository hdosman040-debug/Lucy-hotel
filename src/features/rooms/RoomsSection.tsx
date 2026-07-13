import React, { useState } from 'react';
import { Users, Bed, Maximize2, X, MessageSquare, Info } from 'lucide-react';
import { roomsData, Room } from '../../data/rooms';

export const RoomsSection: React.FC = () => {
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const executeWhatsAppRedirect = (roomName: string) => {
    const rawMessage = `Hello Lucy International Hotel,\n\nI would like to reserve:\n\nRoom: ${roomName}\nCheck-in:\nCheck-out:\nGuests:\n\nThank you.`;
    const encodedPayload = encodeURIComponent(rawMessage);
    // Replace with actual front-desk dynamic variable or business configuration if needed
    window.open(`https://wa.me/251911000000?text=${encodedPayload}`, '_blank');
  };

  return (
    <section id="rooms" className="bg-[#11141A] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Section */}
        <div className="text-center mb-20">
          <span className="text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase block mb-3">
            ✦ Premium Accommodations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-6">
            Rooms & Luxury Suites
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Experience modern hospitality in the heart of Dessie. Engineered with 4-star international 
            standards and refined with authentic Ethiopian warmth.
          </p>
        </div>

        {/* Dynamic Structural Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {roomsData.map((room) => (
            <div 
              key={room.id}
              className="group bg-[#161A23] rounded-none border border-slate-800/60 overflow-hidden flex flex-col transition-all duration-500 hover:border-[#C5A880]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Media Container Layer */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src={room.image} 
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual asset handling if physical state path missing
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161A23] via-transparent to-black/40 pointer-events-none" />
                
                {/* Visual Category Label Indicator */}
                <span className="absolute top-4 left-4 bg-[#11141A]/90 backdrop-blur-md border border-[#C5A880]/30 text-[#E2C9A1] text-[10px] font-semibold tracking-wider uppercase px-3 py-1">
                  {room.name.replace(" Room", "")}
                </span>

                {/* Direct Dynamic Pricing Trace Label */}
                <div className="absolute bottom-4 right-4 bg-[#161A23]/90 backdrop-blur-md px-3 py-1 border border-slate-800">
                  <span className="text-[#E2C9A1] font-serif text-sm font-medium">{room.price} ETB</span>
                  <span className="text-slate-400 text-[10px] font-light ml-1">/ night</span>
                </div>
              </div>

              {/* Informational Layout Blueprint */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-white tracking-wide mb-2 group-hover:text-[#E2C9A1] transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-[#C5A880] text-xs italic font-light mb-4">
                  "{room.tagline}"
                </p>
                <p className="text-slate-400 text-xs font-light line-clamp-3 leading-relaxed mb-6 flex-grow">
                  {room.description}
                </p>

                {/* Core Quantitative Metrics Line */}
                <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-800/80 py-3.5 mb-6 text-slate-300 text-xs font-light">
                  <div className="flex items-center gap-2 justify-center">
                    <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{room.capacity.split(" ")[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center border-x border-slate-800/80">
                    <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="truncate max-w-[70px]">{room.bedType.split(" ")[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Primary & Secondary Dual Interactive System Triggers */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => setActiveModalRoom(room)}
                    className="w-full py-3 border border-slate-700 text-white text-xs font-medium tracking-wider uppercase bg-transparent hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C5A880]" />
                    Details
                  </button>
                  <button
                    onClick={() => executeWhatsAppRedirect(room.name)}
                    className="w-full py-3 bg-[#C5A880] text-[#11141A] text-xs font-bold tracking-wider uppercase hover:bg-[#E2C9A1] transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Native Micro-Modal Component Integration Layer */}
        {activeModalRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
            <div 
              className="bg-[#161A23] border border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dismiss Vector Control */}
              <button 
                onClick={() => setActiveModalRoom(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#11141A]/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Context Visual Asset */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-900">
                <img 
                  src={activeModalRoom.image} 
                  alt={activeModalRoom.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161A23] via-transparent to-black/50" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#C5A880] text-[10px] font-semibold tracking-[0.2em] uppercase block mb-1">
                    Room Details & Inclusions
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                    {activeModalRoom.name}
                  </h3>
                </div>
              </div>

              {/* Comprehensive Descriptive Meta Details Payload */}
              <div className="p-6 sm:p-8">
                <p className="text-[#E2C9A1] text-sm italic font-light mb-4">
                  "{activeModalRoom.tagline}"
                </p>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {activeModalRoom.description}
                </p>

                {/* Spec Highlights Grid */}
                <div className="grid grid-cols-3 gap-4 bg-[#11141A] border border-slate-800/60 p-4 mb-6 text-xs font-light">
                  <div>
                    <span className="text-slate-500 block mb-0.5 uppercase tracking-wider text-[9px]">Capacity</span>
                    <span className="text-white font-medium">{activeModalRoom.capacity}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 uppercase tracking-wider text-[9px]">Beds Setup</span>
                    <span className="text-white font-medium truncate block">{activeModalRoom.bedType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-0.5 uppercase tracking-wider text-[9px]">Room Area</span>
                    <span className="text-white font-medium">{activeModalRoom.size}</span>
                  </div>
                </div>

                {/* Complete Amenities Checklist Matrix Grid */}
                <div className="mb-6">
                  <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    Premium In-Room Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs font-light">
                        <span className="w-1 h-1 bg-[#C5A880] rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience User Demographics Context Meta Tag */}
                <div className="border-t border-slate-800/80 pt-4 mb-6">
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider block mb-1">Ideal Accommodation For</span>
                  <p className="text-slate-300 text-xs font-light">{activeModalRoom.idealFor}</p>
                </div>

                {/* Action Footer Call To Engagement Container */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase block">Standard Dynamic Rate</span>
                    <span className="text-xl font-serif text-[#E2C9A1]">{activeModalRoom.price} ETB <span className="text-xs text-slate-400 font-sans font-light">/ night</span></span>
                  </div>
                  <button
                    onClick={() => {
                      executeWhatsAppRedirect(activeModalRoom.name);
                      setActiveModalRoom(null);
                    }}
                    className="px-6 py-3 bg-[#C5A880] text-[#11141A] text-xs font-bold tracking-wider uppercase hover:bg-[#E2C9A1] transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    {activeModalRoom.buttonTextPrimary.split(" ")[0] === "Reserve" ? "Reserve Now" : activeModalRoom.buttonTextPrimary}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
