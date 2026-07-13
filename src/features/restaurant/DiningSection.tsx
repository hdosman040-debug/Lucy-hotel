import React, { useState } from 'react';
import { Utensils, Award, Sparkles } from 'lucide-react';
import { hotelConfig } from '../../config/hotelConfig';

type MenuTab = 'traditional' | 'international';

export default function DiningSection() {
  const { dining } = hotelConfig;
  const [activeTab, setActiveTab] = useState<MenuTab>('traditional');

  const currentCategory = dining[activeTab];

  if (!currentCategory) {
    return null;
  }

  return (
    <section id="dining" className="bg-[#11141A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading Module */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <span className="text-[#C5A880] text-xs font-serif tracking-[0.3em] block uppercase">
              ✦ FINE CULINARY ART
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white leading-tight">
              A Symphony of Exquisite Flavors
            </h2>
          </div>
          
          {/* Minimalist State Toggles */}
          <div className="flex space-x-2 border-b border-white/10 pb-1 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 font-medium transition-all duration-300 relative ${
                activeTab === 'traditional' ? 'text-[#C5A880]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Traditional Wollo
              {activeTab === 'traditional' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880] animate-fade-in" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 font-medium transition-all duration-300 relative ${
                activeTab === 'international' ? 'text-[#C5A880]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Global Gastronomy
              {activeTab === 'international' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880] animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="bg-white/[0.01] border-l-2 border-[#C5A880] p-6 mb-12 max-w-3xl">
          <h3 className="text-[#E2C9A1] font-serif text-lg mb-1 tracking-wide">
            {currentCategory.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Dynamic Food Grid Array */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white/[0.02] border border-white/5 p-6 flex flex-col sm:flex-row gap-6 items-start group hover:border-white/10 transition-all duration-300"
            >
              {/* Image Box */}
              <div className="w-full sm:w-32 h-32 shrink-0 bg-black/30 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'><rect width='100%' height='100%' fill='%231E293B'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='12' fill='%23C5A880'>Gourmet Plate</text></svg>";
                  }}
                />
                {item.isChefRecommendation && (
                  <div className="absolute bottom-0 left-0 w-full bg-[#C5A880] text-[#11141A] text-[8px] font-bold uppercase tracking-widest text-center py-1">
                    Chef Choice
                  </div>
                )}
              </div>

              {/* Informational Cluster */}
              <div className="flex-grow space-y-2 w-full">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-md font-serif text-white tracking-wide group-hover:text-[#E2C9A1] transition-colors duration-300 flex items-center gap-2">
                    {item.title}
                    {item.isChefRecommendation && <Sparkles className="w-3.5 h-3.5 text-[#E2C9A1] shrink-0" />}
                  </h4>
                  <span className="text-sm font-serif text-[#C5A880] shrink-0">${item.price}</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center text-[10px] text-slate-500 uppercase tracking-widest gap-1.5 font-mono">
                  <Utensils className="w-3 h-3 text-[#C5A880]" />
                  <span>Signature Selection</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
