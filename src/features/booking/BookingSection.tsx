import React, { useState } from 'react';
import { CalendarCheck, Send, MessageSquare } from 'lucide-react';
import { hotelInfo } from '../../data/hotelInfo';
import { demoRooms } from '../../data/rooms';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: demoRooms[0]?.name || 'Standard Comfort Room',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, you would insert rows into Supabase right here.
    // For this high-intent demo, we print confirmation and prepare a WhatsApp dispatch.
    setSubmitted(true);
  };

  const triggerWhatsAppRouting = () => {
    const textMessage = `Hello Lucy Hotel, I would like to make a reservation request:\n\n` +
      `• Name: ${formData.fullName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Room: ${formData.roomType}\n` +
      `• Check-In: ${formData.checkIn}\n` +
      `• Check-Out: ${formData.checkOut}\n` +
      `• Guests: ${formData.guests}\n` +
      `• Note: ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Get current date string formatted as YYYY-MM-DD for minimum date picker attributes
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase block">
            Instant Reservation
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11141A] uppercase tracking-tight">
            Book Your Stay
          </h2>
          <div className="h-1 w-16 bg-[#C5A880] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Submit your stay preferences below. Our front-desk desk team will verify room availability instantly.
          </p>
        </div>

        {submitted ? (
          /* Premium Confirmation Display Card */
          <div className="bg-[#FBF9F6] border-2 border-[#C5A880]/30 p-8 text-center rounded-sm space-y-6 shadow-sm animate-fadeIn">
            <div className="w-16 h-16 bg-[#C5A880]/10 text-[#C5A880] rounded-full flex items-center justify-center mx-auto">
              <CalendarCheck size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#11141A] uppercase tracking-wide">Request Received Successfully!</h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                Thank you, <strong className="text-[#11141A]">{formData.fullName}</strong>. Your reservation parameters are temporarily stored in local component state.
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Accelerate Booking via Mobile</p>
              <button
                onClick={triggerWhatsAppRouting}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-sm text-xs uppercase tracking-wider shadow-md transition-all w-full sm:w-auto"
              >
                <MessageSquare size={16} />
                Send Request via WhatsApp
              </button>
              <button 
                onClick={() => setSubmitted(false)}
                className="block text-xs text-gray-400 underline mx-auto hover:text-gray-600"
              >
                Edit Request Form
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Request Form */
          <form onSubmit={handleSubmit} className="bg-[#FBF9F6] border border-gray-200 p-6 sm:p-10 rounded-sm space-y-6 shadow-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Full Name</label>
                <input 
                  type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  placeholder="e.g., Almaz Ibrahim"
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Phone Number</label>
                <input 
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  placeholder="e.g., 0911XXXXXX"
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Email Address (Optional)</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="name@example.com"
                className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Check-In Date</label>
                <input 
                  type="date" name="checkIn" required min={todayStr} value={formData.checkIn} onChange={handleChange}
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Check-Out Date</label>
                <input 
                  type="date" name="checkOut" required min={formData.checkIn || todayStr} value={formData.checkOut} onChange={handleChange}
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Select Suite Category</label>
                <select 
                  name="roomType" value={formData.roomType} onChange={handleChange}
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]"
                >
                  {demoRooms.map((room) => (
                    <option key={room.id} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Total Guests</label>
                <select 
                  name="guests" value={formData.guests} onChange={handleChange}
                  className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700 tracking-wider">Special Requests / Notes</label>
              <textarea 
                name="message" rows={3} value={formData.message} onChange={handleChange}
                placeholder="Let us know if you require early check-in, shuttle service, etc..."
                className="w-full text-sm border border-gray-300 p-3 rounded-sm bg-white focus:outline-none focus:border-[#C5A880] text-[#11141A] resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#11141A] hover:bg-[#1E232E] text-[#C5A880] font-bold py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Send size={14} />
              Submit Booking Request
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
