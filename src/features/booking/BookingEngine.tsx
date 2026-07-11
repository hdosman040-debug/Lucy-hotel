import React, { useState } from 'react';
import { Calendar, Users, Home, Send, AlertCircle } from 'lucide-react';
import { hotelConfig } from '../../config/hotelConfig';

export default function BookingEngine() {
  const { rooms, contact } = hotelConfig;

  // Form states initialized safely
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState(rooms[0]?.id || '');
  const [guestName, setGuestName] = useState('');
  const [error, setError] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Field Protection Validation Logic
    if (!guestName.trim()) {
      setError('Please provide a guest name for the registry reservation reservation.');
      return;
    }
    if (!checkIn || !checkOut) {
      setError('Please select valid check-in and check-out dates.');
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      setError('Check-out date must fall strictly after the selected check-in date.');
      return;
    }

    // Locate matching accommodation parameters from configuration metadata
    const selectedRoom = rooms.find(r => r.id === roomType);
    const roomTitle = selectedRoom ? selectedRoom.title : 'Luxury Suite';

    // Build the high-converting luxury reservation payload text string
    const textPayload = `✦ LUXURY RESERVATION REQUEST ✦\n\n` +
      `• Guest Name: ${guestName}\n` +
      `• Accommodation: ${roomTitle}\n` +
      `• Arrival Date: ${checkIn}\n` +
      `• Departure Date: ${checkOut}\n` +
      `• Occupancy: ${guests} Guests\n\n` +
      `Please confirm suite availability and process our operational registry package.`;

    // Package the structured payload directly into the universal WhatsApp API endpoint path
    const encodedPayload = encodeURIComponent(textPayload);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodedPayload}`;

    // Open transaction pipeline chat stream instantly
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="bg-[#11141A] py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading Module */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#C5A880] text-xs font-serif tracking-[0.3em] block uppercase">
            ✦ RESERVATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white">
            Secure Your Sanctuary
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            Submit your itinerary parameters below. Our digital concierge instantly packages and transfers your booking payload straight to our front desk operational terminal via a secure WhatsApp line.
          </p>
        </div>

        {/* Core Operational Form Panel */}
        <div className="bg-white/[0.01] border border-white/5 p-8 md:p-12 relative overflow-hidden">
          
          {error && (
            <div className="mb-6 bg-red-950/40 border border-red-500/30 text-red-200 text-xs p-4 flex items-center space-x-3 rounded-none animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            
            {/* Input Element: Full Name */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#E2C9A1] font-medium block">
                Primary Guest Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., Almaz Abate"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#11141A] border border-white/10 text-white text-sm px-4 py-3.5 focus:border-[#C5A880] focus:outline-none transition-colors rounded-none placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Element: Check-In */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#E2C9A1] font-medium block flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" /> Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#11141A] border border-white/10 text-white text-sm px-4 py-3.5 focus:border-[#C5A880] focus:outline-none transition-colors rounded-none [color-scheme:dark]"
                />
              </div>

              {/* Input Element: Check-Out */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#E2C9A1] font-medium block flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" /> Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#11141A] border border-white/10 text-white text-sm px-4 py-3.5 focus:border-[#C5A880] focus:outline-none transition-colors rounded-none [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Element: Accommodation Selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#E2C9A1] font-medium block flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#C5A880]" /> Desired Suite Tier
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full bg-[#11141A] border border-white/10 text-white text-sm px-4 py-3.5 focus:border-[#C5A880] focus:outline-none transition-colors rounded-none appearance-none cursor-pointer [color-scheme:dark]"
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.title} — ${room.pricePerNight} / night
                    </option>
                  ))}
                </select>
              </div>

              {/* Input Element: Guest Count */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#E2C9A1] font-medium block flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5A880]" /> Total Occupants
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#11141A] border border-white/10 text-white text-sm px-4 py-3.5 focus:border-[#C5A880] focus:outline-none transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Executive Members</option>
                </select>
              </div>
            </div>

            {/* Submit Reservation Action CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#C5A880] hover:bg-[#E2C9A1] text-[#11141A] text-xs uppercase tracking-widest py-4 font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl"
              >
                <span>Initialize WhatsApp Concierge Pipeline</span>
                <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
