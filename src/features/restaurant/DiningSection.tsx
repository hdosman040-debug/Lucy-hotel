import React, { useState } from 'react';
import { Coffee, Utensils, Globe } from 'lucide-react';
import { demoMenu } from '../../data/menu';

export default function DiningSection() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'international' | 'drinks'>('traditional');

  const categories = [
    { id: 'traditional', name: 'Traditional', icon: Utensils },
    { id: 'international', name: 'International', icon: Globe },
    { id: 'drinks', name: 'Beverages', icon: Coffee },
  ] as const;

  const filteredItems = demoMenu.filter(item => item.category === activeTab);

  return (
    <section id="dining" className="py-20 bg-[#FBF9F6] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase block">
            Culinary Excellence
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11141A] uppercase tracking-tight">
            Foods & Drinks Menu
          </h2>
          <div className="h-1 w-16 bg-[#C5A880] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-500">
            Savor exceptional flavors curated by our expert chefs, fusing local tradition with global standards.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 mb-12 max-w-md mx-auto bg-white p-1 rounded border border-gray-200">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#11141A] text-[#C5A880]' 
                    : 'text-gray-500 hover:text-[#11141A] hover:bg-gray-50'
                }`}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm flex justify-between items-start gap-4 hover:border-[#C5A880]/20 transition-all">
              <div className="space-y-1 flex-grow">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base text-[#11141A] uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <span className="text-sm font-extrabold text-[#C5A880] shrink-0 whitespace-nowrap">
                    {item.price} ETB
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pr-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
