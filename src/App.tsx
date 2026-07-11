import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './features/home/HeroSection';
import RoomsSection from './features/rooms/RoomsSection';
import DiningSection from './features/restaurant/DiningSection';
import BookingEngine from './features/booking/BookingEngine';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#11141A] text-white selection:bg-[#C5A880] selection:text-[#11141A] antialiased scroll-smooth">
      {/* Global Brand Header Navigation */}
      <Navbar />

      {/* Main Structural Layout Sequence */}
      <main>
        <HeroSection />
        <RoomsSection />
        <DiningSection />
        <BookingEngine />
        <LocationSection />
      </main>

      {/* Global Brand Closure Footer */}
      <Footer />
    </div>
  );
}
