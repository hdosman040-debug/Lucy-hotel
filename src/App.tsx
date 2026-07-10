import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './features/home/HeroSection';
import RoomsSection from './features/rooms/RoomsSection';
import DiningSection from './features/restaurant/DiningSection';
import BookingSection from './features/booking/BookingSection';
import ReviewsAndContact from './components/ReviewsAndContact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F6]">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Fully Configured Product Demo Viewport */}
      <main className="flex-grow pt-20">
        <HeroSection />
        <RoomsSection />
        <DiningSection />
        <BookingSection />
        <ReviewsAndContact />
      </main>

      {/* Global Sticky Footer */}
      <Footer />
    </div>
  );
}
