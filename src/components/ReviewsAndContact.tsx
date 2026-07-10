import React from 'react';
import { Star, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { hotelInfo } from '../data/hotelInfo';

export default function ReviewsAndContact() {
  return (
    <section className="bg-white border-t border-gray-100">
      
      {/* Testimonials Block */}
      <div id="reviews" className="py-25 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase block">Guest Feedback</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11141A] uppercase tracking-tight">What Our Guests Say</h2>
          <div className="h-1 w-16 bg-[#C5A880] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hotelInfo.reviews.map((rev, idx) => (
            <div key={idx} className="bg-[#FBF9F6] border border-gray-100 p-6 rounded-sm shadow-sm space-y-4">
              <div className="flex text-[#C5A880]">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs text-gray-600 italic leading-relaxed">"{rev.text}"</p>
              <h4 className="text-sm font-bold text-[#11141A] uppercase tracking-wider">— {rev.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Map Block */}
      <div id="contact" className="py-20 bg-[#FBF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Details Panel */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase block">Get In Touch</span>
              <h2 className="text-2xl font-extrabold text-[#11141A] uppercase tracking-tight">Contact Lucy Hotel</h2>
              <div className="h-1 w-16 bg-[#C5A880] rounded-full"></div>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed">
              Have questions regarding booking configurations, conference halls, pool access packages, or corporate memberships? Reach out directly via phone or WhatsApp.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-sm">
                <MapPin className="text-[#C5A880]" size={20} />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#11141A]">Location</h4>
                  <p className="text-xs text-gray-500">{hotelInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-sm">
                <Phone className="text-[#C5A880]" size={20} />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#11141A]">Phone Support</h4>
                  <a href={`tel:${hotelInfo.phone}`} className="text-xs text-gray-500 hover:text-[#C5A880]">{hotelInfo.phone}</a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${hotelInfo.whatsapp.replace('+', '')}`} 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-sm text-xs uppercase tracking-wider shadow-md w-full sm:w-auto"
              >
                <MessageSquare size={16} /> Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Premium Google Maps Placeholder Grid Container */}
          <div className="bg-gradient-to-br from-[#1E232E] to-[#11141A] rounded-sm p-8 text-center flex flex-col justify-center items-center text-white relative min-h-[300px] shadow-inner">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="z-10 space-y-3 max-w-sm">
              <MapPin size={36} className="text-[#C5A880] mx-auto animate-pulse" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#C5A880]">Google Maps Integration</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Production placeholder. Real-time geographical framing configurations can layer instantly right here.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
