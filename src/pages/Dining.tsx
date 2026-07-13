import React, { useState } from 'react';
import { demoMenu, MenuItem } from '../data/menu';
import { Coffee, Utensils, Globe, Compass } from 'lucide-react';

type FilterCategory = 'all' | 'traditional' | 'international' | 'drinks';

export default function Dining() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredMenu = demoMenu.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const categories: { id: FilterCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Full Menu', icon: <Compass className="w-4 h-4" /> },
    { id: 'traditional', label: 'Traditional', icon: <Utensils className="w-4 h-4" /> },
    { id: 'international', label: 'International', icon: <Globe className="w-4 h-4" /> },
    { id: 'drinks', label: 'Beverages & Café', icon: <Coffee className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-[#11141A] text-white pt-28 pb-20 min-h-screen">
      {/* Structural Hero Header Context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-[#C5A880] uppercase tracking-widest text-xs font-semibold block mb-3">
          ✦ Culinary Masters
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
          The Lucy Restaurant & Lounge
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 font-light text-sm sm:text-base">
          Experience gourmet excellence bridging traditional Wollo flavors with classic continental cuisine. Crafted by master chefs utilizing premier regional ingredients.
        </p>
      </div>

      {/* Featured Gastronomy Visual Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-sm overflow-hidden border border-[#C5A880]/10 aspect-[16/10] bg-[#161a22]">
            <img 
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSNqIPkp1P-EqkAXX7CfurOqY-dsDKw14YwV4FNPhevEqmFOKrXt-J4vMBlqUWoTLOA9jNlkvAebxaafOI" 
              alt="Authentic arrangement of traditional fasting stews served on fresh injera flatbread" 
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-1">Authentic Heritage</span>
              <h3 className="text-xl font-serif font-bold text-white">Wollo Beyaynetu Platter</h3>
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-[#C5A880]/10 aspect-[16/10] bg-[#161a22]">
            <img 
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSFG0PQS_D4f73-AGcxdH67FpX6O7muMiprf6sXCFIAkfc9-zUnHaV4ZxIgWvOfEQsJk-fSAsE5V1YI66c" 
              alt="Rich multi-layered premium espresso shot balanced with steamed frothy milk in a glass" 
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[#C5A880] text-xs uppercase tracking-widest font-semibold block mb-1">Barista Selection</span>
              <h3 className="text-xl font-serif font-bold text-white">Traditional Layered Macchiato</h3>
            </div>
          </div>
        </div>
      </div>

      {/* State Selection Filtering Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-[#C5A880] text-[#11141A] border-[#C5A880]'
                : 'bg-[#161a22] text-gray-400 border-gray-800 hover:text-white hover:border-[#C5A880]/40'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Cards Catalog Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMenu.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#161a22] p-6 rounded-sm border border-gray-800/60 flex justify-between items-start gap-4 hover:border-[#C5A880]/20 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                  {item.name}
                </h3>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  item.category === 'traditional' ? 'bg-[#C5A880]/10 text-[#C5A880]' :
                  item.category === 'international' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  {item.category}
                </span>
              </div>
              <p className="text-gray-400 text-xs font-light leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
            <div className="text-[#C5A880] font-serif font-bold whitespace-nowrap text-right text-base">
              {item.price} ETB
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
