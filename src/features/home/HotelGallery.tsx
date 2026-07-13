import React from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const HotelGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Illuminated Grand Facade", category: "Exterior", image: "/images/hotel/exterior-night.jpg" },
    { id: 2, title: "Modern Gymnasium Facility", category: "Wellness", image: "/images/hotel/gym.jpg" },
    { id: 3, title: "Traditional Coffee Ceremony", category: "Culture", image: "/images/hotel/coffee-traditional.jpg" },
    { id: 4, title: "Gourmet Breakfast Dining", category: "Culinary", image: "/images/hotel/dining-breakfast.jpg" },
    { id: 5, title: "Dessie City Skyline View", category: "Landscape", image: "/images/hotel/city-view.jpg" },
    { id: 6, title: "Daytime Main Entrance", category: "Exterior", image: "/images/hotel/exterior-day.jpg" },
    { id: 7, title: "Ceremonial Presentation Setup", category: "Culture", image: "/images/hotel/coffee-setup.jpg" }
  ];

  return (
    <section className="py-24 bg-[#11141A] border-t border-[#C5A880]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <span className="text-[#C5A880] text-xs font-semibold uppercase tracking-widest block mb-2">
          ✦ Visual Discoveries
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Experience Lucy International
        </h2>
        <p className="text-sm text-gray-400 font-light mt-2 max-w-xl">
          Swipe laterally to explore our premium physical amenities, traditional spaces, and high-tier architectural presence.
        </p>
      </div>

      {/* Touch & Scroll Tracking Tray */}
      <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#C5A880]/30 scrollbar-track-transparent">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[290px] sm:min-w-[360px] bg-[#161A23] rounded-sm overflow-hidden border border-[#C5A880]/10 flex-shrink-0 snap-start snap-always transform transition duration-300 hover:border-[#C5A880]/40 group"
          >
            <div className="relative h-52 w-full overflow-hidden bg-gray-900/50">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hotel/exterior-night.jpg';
                }}
              />
              <span className="absolute top-4 left-4 bg-[#11141A]/90 border border-[#C5A880]/30 text-[#E2C9A1] text-[9px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-xs backdrop-blur-xs">
                {item.category}
              </span>
            </div>
            <div className="p-5 border-t border-[#C5A880]/5">
              <h3 className="font-serif font-medium text-gray-200 text-sm tracking-wide">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
