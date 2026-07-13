import React from 'react';
import { hotelInfo } from '../data/hotelInfo';
import { ShieldCheck, Award, Users, Star, StarOff } from 'lucide-react';

export default function About() {
  const { marketing, features, reviews } = hotelInfo;

  return (
    <div className="bg-[#11141A] text-white pt-28 pb-20 min-h-screen">
      {/* Brand Identity Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#C5A880] uppercase tracking-widest text-xs font-semibold block">
              ✦ Discover Our Identity
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              {marketing.welcomeTitle}
            </h1>
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              {marketing.welcomeDescription}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-800">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A880]">100%</div>
                <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase mt-1">Local Harmony</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A880]">24/7</div>
                <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase mt-1">Room Dispatch</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A880]">Top</div>
                <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase mt-1">Tier Comfort</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Block */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="rounded-sm overflow-hidden border border-[#C5A880]/10 bg-[#161a22] aspect-[4/5]">
              <img 
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTtOd-ioCggS3VMg7lVgfu3yE9LgJtmMWXTDVCj7A3LNuy5fIhHe-zHmzYZJDiSjIIM01ELOvBfYx4JMpo" 
                alt="Beautifully lit outdoor hotel swimming pool at night" 
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>
            <div className="rounded-sm overflow-hidden border border-[#C5A880]/10 bg-[#161a22] aspect-[4/5] mt-8">
              <img 
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR4E2NiVXnnwVk0aqMic-aswHfo8jS4PgYitt_fk0uFyN7Stwf13VpFnXF-gk4z8DXoWdRw23ZD1fWiu8M" 
                alt="Modern hotel gym interior with premium workout machinery" 
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Features Layout Loop */}
      <div className="bg-[#161a22] border-t border-b border-gray-800/60 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A880] uppercase tracking-widest text-xs font-semibold block mb-2">✦ Amenities Array</span>
            <h2 className="text-3xl font-serif font-bold text-white">Engineered For Perfection</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#11141A] p-6 rounded-sm border border-gray-800/40 hover:border-[#C5A880]/20 transition-all group">
                <div className="w-10 h-10 bg-[#C5A880]/10 rounded-sm flex items-center justify-center mb-4 text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#11141A] transition-colors duration-300">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Award className="w-5 h-5" />}
                  {idx === 2 && <Users className="w-5 h-5" />}
                  {idx === 3 && <Star className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2 tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guest Evaluation Review Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#C5A880] uppercase tracking-widest text-xs font-semibold block mb-2">✦ Client Testimonials</span>
          <h2 className="text-3xl font-serif font-bold text-white">Stories From Our Guests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#161a22] p-6 rounded-sm border border-gray-800/40 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm font-light italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
                <span className="text-white text-xs font-semibold tracking-wider font-serif">{review.name}</span>
                <span className="text-[10px] uppercase text-[#C5A880] bg-[#C5A880]/5 px-2 py-0.5 rounded-sm tracking-widest">Verified Guest</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
