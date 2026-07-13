import React from 'react';
import { Wifi, Utensils, Car, Clock, Shield, Dumbbell, Plane, Coffee } from 'lucide-react';

export default function AmenitiesSection() {
  const provisions = [
    { icon: Wifi, title: "Premium Free Wi-Fi", desc: "High-speed symmetric network connectivity built across all rooms and public spaces." },
    { icon: Utensils, title: "Fine Wollo & Int'l Dining", desc: "Authentic local delicacies served alongside a curated menu of international favorites." },
    { icon: Car, title: "Secure Private Parking", desc: "A continuously monitored multi-vehicle space compound dedicated exclusively to guest parking." },
    { icon: Clock, title: "24/7 Front Desk Reception", desc: "Our professional reception operators are standing by around the clock to handle your inquiries." },
    { icon: Coffee, title: "Luxury Room Service", desc: "Enjoy direct-to-door food, beverages, and personal delivery options with a single tap." },
    { icon: Shield, title: "Conference Facilities", desc: "Fully integrated, acoustically private business chambers ready for executive presentations." },
    { icon: Dumbbell, title: "Modern Gymnastics Hub", desc: "Premium aerobic machines and free weights to maintain your physical performance." },
    { icon: Plane, title: "Airport Transit Assistance", desc: "Seamless vehicle transit coordination linking regional arrivals safely back to our entry lounge." },
  ];

  return (
    <section id="amenities" className="py-24 bg-[#11141A] text-white border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block mb-3">
            Hotel Infrastructure Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            World-Class Amenities
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {provisions.map((item, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-sm hover:bg-white/[0.04] hover:border-[#C5A880]/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-sm bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-5 group-hover:bg-[#C5A880] group-hover:text-[#11141A] transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-[#C5A880] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
