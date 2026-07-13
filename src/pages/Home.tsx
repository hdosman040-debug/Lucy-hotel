import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../features/home/HeroSection';
import AmenitiesSection from '../components/AmenitiesSection';
import ExperienceSection from '../components/ExperienceSection';
import { HotelGallery } from '../features/home/HotelGallery';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#11141A] text-white overflow-hidden">
      {/* 1. Premium Core Hero Layer */}
      <HeroSection />

      {/* 2. Dynamic Property Visual Journey Showcase (MOVED RIGHT HERE) */}
      <HotelGallery />

      {/* 3. Cultural Sophistication Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#C5A880]/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C5A880] uppercase tracking-widest text-xs font-semibold block mb-3">
              ✦ Discover Authentic Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-white leading-tight">
              Where Modern Luxury Meets <br />
              <span className="text-[#E2C9A1]">Wollo Hospitality</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Nestled in the breathtaking landscape of Dessie, Lucy Hotel represents the pinnacle of premium accommodation in the region. We blend timeless architectural refinement with the warm cultural heart of Ethiopia.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              From our hand-selected local culinary treasures to state-of-the-art corporate spaces, every detail is engineered to deliver unparalleled comfort for business leaders and world travelers alike.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#C5A880] hover:text-[#E2C9A1] transition-colors group"
            >
              Browse Luxury Accommodations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative rounded-sm overflow-hidden border border-[#C5A880]/20 bg-[#11141A] p-3">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDwrt6o2uOjnebjcSJOs-s8kmsBaZKxshwOOnp07NKBGgpjbSASRgzy5tUMkhpCNbDQT675QFhdTh8aKQ"
                alt="Lucy Hotel Premium Suite Living Space Experience"
                className="w-full h-full object-cover rounded-sm filter brightness-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Reusable Core Service Highlights Matrices */}
      <AmenitiesSection />
      <ExperienceSection />
    </div>
  );
}
