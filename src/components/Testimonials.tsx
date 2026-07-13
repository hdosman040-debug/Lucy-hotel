import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const logs = [
    {
      name: "Solomon Kassa",
      role: "Tech Consultant / Corporate Guest",
      text: "The internet stability here outpaces standard premium locations completely. Combined with the absolute professional behavior of the desk, this is my go-to choice in Dessie.",
      rating: 5
    },
    {
      name: "Dr. Aisha Mohammed",
      role: "Regional Event Organizer",
      text: "We deployed our structural team conference here for three days. The conference rooms are fully quiet, and the traditional Wollo delicacies provided during lunch breaks were stellar.",
      rating: 5
    },
    {
      name: "Elias Tesfaye",
      role: "Leisure Family Traveler",
      text: "Extremely clean rooms, massive structural space allocation inside the family suite, and deep hospitality warmth. Direct WhatsApp communication allows rapid booking confirmation with no friction.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white text-[#11141A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block mb-3">
            Verified Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Guest Trust Indicators
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {logs.map((card, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-sm shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-5 text-[#C5A880]">
                  {[...Array(card.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 italic">
                  "{card.text}"
                </p>
              </div>
              <div>
                <div className="w-8 h-0.5 bg-gray-300 mb-3" />
                <h4 className="text-sm font-serif font-bold text-[#11141A]">{card.name}</h4>
                <span className="text-[11px] text-gray-400 font-medium">{card.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
