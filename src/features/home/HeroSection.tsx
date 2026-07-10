import React from 'react';
import { ShieldCheck, ArrowRight, Award, Waves, Dumbbell } from 'lucide-react';
import { hotelInfo } from '../../data/hotelInfo';

export default function HeroSection() {
  return (
    <section id="home" className="w-full relative">
      {/* Immersive Photo Background Wrapper */}
      <div className="relative min-h-[85vh] py-28 md:py-40 px-4 flex flex-col justify-center items-center text-center overflow-hidden">
        
        {/* Full-Bleed High Performance HTML Image Element */}
        <img 
          src="/hotel-building.jpg" 
          alt="Lucy Hotel Building Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Dark Linear Overlay for Ultra-Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-[#11141A] z-10"></div>
        
        {/* Content Container */}
        <div className="relative max-w-3xl mx-auto space-y-6 px-4 z-20">
          <span className="text-[#C5A880] text-xs font-bold tracking-widest uppercase bg-[#C5A880]/15 px-4 py-1.5 rounded-full border border-[#C5A880]/30 inline-block backdrop-blur-sm">
            ✦ The Premier Luxury Destination in Dessie
          </span>
          
          {/* Most Attractive Hook & Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-md">
            LUCY HOTEL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] via-[#E2C9A1] to-[#C5A880]">
              Elevate Your Stay
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto font-normal leading-relaxed drop-shadow">
            Experience unmatched hospitality in the heart of Wollo. Unwind in our luxury rooms, dive into our sparkling pool, and recharge in our state-of-the-art gymnasium.
          </p>
          
          {/* Call to Actions */}
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#booking" className="bg-[#C5A880] hover:bg-[#A38456] text-[#11141A] font-bold px-8 py-3.5 rounded-sm transition-all text-sm uppercase tracking-wider shadow-xl flex items-center justify-center gap-2">
              Book Your Stay <ArrowRight size={16} />
            </a>
            <a href="#dining" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-sm transition-all text-sm uppercase tracking-wider backdrop-blur-sm flex items-center justify-center gap-2">
              Explore Dining
            </a>
          </div>
        </div>
      </div>

      {/* Brief Value Statement Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11141A] uppercase tracking-tight">
            {hotelInfo.marketing.welcomeTitle}
          </h2>
          <div className="h-1 w-16 bg-[#C5A880] mx-auto rounded-full"></div>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            {hotelInfo.marketing.welcomeDescription}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-[#C5A880]/30 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-white transition-all">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-base text-[#11141A] mb-2 uppercase tracking-wide">Premium Wi-Fi</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Stay fully connected with uninterrupted high-speed internet access optimized for business workflows.</p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-[#C5A880]/30 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-white transition-all">
              <Award size={20} />
            </div>
            <h3 className="font-bold text-base text-[#11141A] mb-2 uppercase tracking-wide">Fine Dining</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Savor an exquisite selection of traditional Wollo delicacies and international masterpieces.</p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-[#C5A880]/30 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-white transition-all">
              <Waves size={20} />
            </div>
            <h3 className="font-bold text-base text-[#11141A] mb-2 uppercase tracking-wide">Swimming Pool</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Relax, refresh, and clear your mind by spending time inside our sparkling, pristine outdoor pool container.</p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-[#C5A880]/30 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-white transition-all">
              <Dumbbell size={20} />
            </div>
            <h3 className="font-bold text-base text-[#11141A] mb-2 uppercase tracking-wide">Modern Gym</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Stay strong and energetic with high-quality weight equipment and cardiovascular workout machines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
