import React from 'react';
import { MapPin, Compass, Navigation } from 'lucide-react';
import { hotelConfig } from '../config/hotelConfig';

export default function LocationSection() {
  const { contact, attractions } = hotelConfig;

  return (
    <section id="location" className="bg-[#11141A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Informational Attraction Space */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#C5A880] text-xs font-serif tracking-[0.3em] block uppercase">
                ✦ THE NEIGHBORHOOD
              </span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white leading-tight">
                An Historic Sanctuary
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                Nestled beautifully in {contact.city}, {contact.region}, our property frames historical pathways while maintaining convenient connectivity.
              </p>
            </div>

            {/* Attractions Loop */}
            <div className="space-y-4">
              {attractions.map((attraction) => (
                <div 
                  key={attraction.id} 
                  className="bg-white/[0.01] border border-white/5 p-5 flex gap-4 items-start hover:border-[#C5A880]/20 transition-all duration-300"
                >
                  <div className="bg-[#C5A880]/10 p-2.5 shrink-0">
                    <Compass className="w-4 h-4 text-[#C5A880]" />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <h4 className="text-sm font-medium text-white tracking-wide">{attraction.title}</h4>
                      <span className="text-[10px] font-mono text-[#C5A880] shrink-0 uppercase tracking-widest bg-white/5 px-2 py-0.5">{attraction.distance}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address Context Card */}
            <div className="pt-4 border-t border-white/5 flex items-start space-x-3 text-slate-300">
              <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block text-[#E2C9A1] mb-1">Physical Address</span>
                <p className="text-xs font-light tracking-wide">{contact.address}, {contact.city}, {contact.region}</p>
              </div>
            </div>
          </div>

          {/* Luxury Frame Container for Map Sandbox */}
          <div className="lg:col-span-7 w-full h-96 lg:h-[480px] bg-white/[0.02] border border-white/5 p-2 group hover:border-white/10 transition-colors duration-500">
            <div className="w-full h-full bg-[#1e293b]/20 relative overflow-hidden">
              <iframe
                title="Lucy Hotel Premium Location Matrix"
                src={contact.googleMapEmbedUrl}
                className="w-full h-full border-0 grayscale invert opacity-75 contrast-125 group-hover:opacity-90 transition-opacity duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
