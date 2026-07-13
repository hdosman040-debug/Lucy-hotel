import React from 'react';
import { Camera, Sparkles, Coffee, Compass } from 'lucide-react';

export default function CulturalGallery() {
  const galleryItems = [
    {
      title: 'Wollo Imperial Suite',
      category: 'Luxury Living',
      description: 'Bespoke architectural layouts blending modern geometric design with rich traditional Ethiopian motifs.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      bgGradient: 'from-amber-600/20 to-black/80'
    },
    {
      title: 'Traditional Coffee Haven',
      category: 'Cultural Experience',
      description: 'An immersive space dedicated to the authentic, aromatic art of the multi-layered Ethiopian coffee ceremony.',
      icon: <Coffee className="w-5 h-5 text-amber-500" />,
      bgGradient: 'from-amber-900/40 to-black/80'
    },
    {
      title: 'Tossa Mountain Vista',
      category: 'Panoramic Views',
      description: 'Enjoy sweeping, elevated high-altitude views of iconic local land formations straight from our terrace canopy.',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      bgGradient: 'from-slate-700/30 to-black/80'
    },
    {
      title: 'Gourmet Culinary Exhibit',
      category: 'Fine Dining',
      description: 'Exquisitely plated dishes featuring a fusion of authentic Wollo spices and international culinary design.',
      icon: <Camera className="w-5 h-5 text-amber-500" />,
      bgGradient: 'from-orange-800/20 to-black/80'
    }
  ];

  return (
    <section id="gallery" className="bg-[#11141A] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header Layout */}
        <div className="text-center space-y-3">
          <span className="text-amber-500 tracking-widest text-xs font-bold uppercase block">Visual Prestige</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">CURATED EXPERIENCES</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm max-w-lg mx-auto pt-2">
            A window into the premium comforts and rich local environment defining your stay at Lucy Hotel.
          </p>
        </div>

        {/* CSS Grid Matrix: Responsive Stack to Dual-Column Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-72 rounded-lg overflow-hidden border border-gray-800 bg-[#161920] flex items-end p-6 transition-all duration-300 hover:border-amber-500/40"
            >
              {/* Dynamic contextual background gradient wrapper standing in place for structural media assets */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${item.bgGradient} z-0 group-hover:scale-105 transition-transform duration-500`} />
              
              {/* Subtle architectural mesh pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10" />

              {/* Textual Content Container Block */}
              <div className="relative z-20 space-y-2 w-full">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{item.category}</span>
                </div>
                
                <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md transform transition-all duration-300">
                  {item.description}
                </p>
              </div>

              {/* Top Right Decorative Gold Edge Bracket Accent */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-amber-500/20 group-hover:border-amber-500 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
