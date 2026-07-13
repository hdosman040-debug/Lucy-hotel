import React from 'react';
import ServicesShowcase from '../components/ServicesShowcase';
import CulturalGallery from '../components/CulturalGallery';
import BookingForm from '../components/BookingForm';
import { HotelGallery } from '../features/home/HotelGallery';

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Banner Section using structural photo background */}
      <header id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#11141A]/80 to-[#11141A] z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-105"
          style={{ backgroundImage: "url('/hotel-building.jpg')" }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
          <span className="text-amber-500 tracking-widest text-sm font-bold block uppercase animate-pulse">
            Dessie, Wollo, Ethiopia
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            LUCY HOTEL
            <span className="block text-xl sm:text-2xl font-light text-gray-300 tracking-widest mt-2 normal-case">
              Elevate Your Stay
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Where authentic Ethiopian cultural heritage meets elite, ultra-modern premium luxury hospitality configurations.
          </p>
          <div className="pt-4">
            <a 
              href="#booking" 
              className="bg-amber-500 text-[#11141A] font-bold text-sm tracking-wider px-8 py-4 rounded-sm hover:bg-amber-600 transition-colors uppercase shadow-lg shadow-amber-500/10"
            >
              Book Your Premium Stay Now
            </a>
          </div>
        </div>
      </header>

      {/* About Segment */}
      <section id="about" className="py-16 bg-[#161920] border-t border-gray-900 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl font-bold text-amber-500 uppercase tracking-wider">About Lucy Hotel</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nestled in the breathtaking city of Dessie, Lucy Hotel stands as a beacon of luxury in the historic Wollo region. Dedicated to offering sophisticated services, localized comfort, and premium global standards to international business leaders and leisure travelers alike.
          </p>
        </div>
      </section>

      {/* Authentic Horizontally Scrollable Property Visual Journey Showcase */}
      <div className="border-t border-gray-900">
        <HotelGallery />
      </div>

      {/* Dynamic Interactive Services Matrix Layout Grid */}
      <ServicesShowcase />

      {/* Immersive Local Heritage & Luxury Visual Grid Element */}
      <CulturalGallery />

      {/* Central Integrated Modular Booking Engine */}
      <section id="booking" className="py-20 bg-[#161920] border-t border-gray-900 px-4">
        <BookingForm />
      </section>
    </div>
  );
}
