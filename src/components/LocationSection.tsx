import React from 'react';
import { MapPin, Phone, Compass } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[#11141A] text-white border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block">
              Regional Location Data
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white">
              Settle In The Center Of Dessie
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880]" />
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Lucy Hotel is perfectly situated to enable rapid business access to regional management hubs while acting as an ideal base for local historical tours in Wollo.
            </p>

            <div className="space-y-4 pt-4 text-xs font-light tracking-wide">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">Physical Address</p>
                  <p className="text-gray-400 mt-0.5">Main Commercial Avenue, Dessie, Wollo, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">Concierge Channel</p>
                  <p className="text-gray-400 mt-0.5">+251 911 234 567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">Proximal Landmarks</p>
                  <p className="text-gray-400 mt-0.5">5 minutes from central municipal buildings; short transit links to regional travel checkpoints.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full h-96 bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden relative flex items-center justify-center text-center p-6">
            <div className="space-y-3">
              <MapPin className="w-8 h-8 text-[#C5A880] mx-auto animate-bounce" />
              <p className="text-sm font-serif font-bold text-white">Interactive Mapping System Container</p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
                [ Local SEO Map Integrated Here to target localized Ethiopian search engine discovery without blocking client thread processing speed ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
