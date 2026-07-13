import React from 'react';

export default function GallerySection() {
  const items = [
    { category: "Accommodations", label: "Executive Suite Bedding Space" },
    { category: "Culinary Core", label: "Wollo Traditional Dining Zone" },
    { category: "Lounge Hub", label: "Main Structural Welcome Lobby" },
    { category: "Architecture", label: "Exterior Illumination Profile" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#11141A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block mb-3">
            Visual Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            Explore Our Spaces
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((img, idx) => (
            <div key={idx} className="relative group h-72 bg-white/[0.02] rounded-sm overflow-hidden shadow-md cursor-pointer border border-white/5">
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 font-sans">
                [ Luxury {img.category} View ]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141A] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#C5A880] text-[10px] tracking-widest uppercase font-bold block mb-1">
                  {img.category}
                </span>
                <p className="text-sm font-serif font-medium text-white">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
