import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50 text-[#11141A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#C5A880] font-semibold text-xs tracking-widest uppercase block">
              The Heritage Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#11141A]">
              Ethiopian Hospitality Meets Modern Comfort
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880]" />
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              At Lucy Hotel, we bring together high-end structural architecture and the legendary warmth of Wollo hospitality. From our carefully trained service crew to our daily traditional premium coffee arrangements, guests experience genuine care tailored to international luxury expectations.
            </p>
            <div className="border-l-2 border-[#C5A880] pl-4 italic text-xs text-gray-500 font-light py-1">
              "We provide an elegant, safe, and highly accessible environment right in the heart of Dessie, helping corporate teams, families, and solo tourists remain fully aligned."
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-[#11141A] h-48 rounded-sm overflow-hidden shadow-md flex flex-col justify-end p-4 border border-[#C5A880]/10">
                <span className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold">Lounge Area</span>
                <p className="text-white text-xs font-serif font-medium">Refined Comfort</p>
              </div>
              <div className="bg-[#11141A] h-64 rounded-sm overflow-hidden shadow-md flex flex-col justify-end p-4 border border-[#C5A880]/10">
                <span className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold">Traditional Coffee</span>
                <p className="text-white text-xs font-serif font-medium">Authentic Wollo Heritage</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#11141A] h-64 rounded-sm overflow-hidden shadow-md flex flex-col justify-end p-4 border border-[#C5A880]/10">
                <span className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold">Boutique Spaces</span>
                <p className="text-white text-xs font-serif font-medium">Impeccable Privacy</p>
              </div>
              <div className="bg-[#11141A] h-48 rounded-sm overflow-hidden shadow-md flex flex-col justify-end p-4 border border-[#C5A880]/10">
                <span className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold">Local Dining</span>
                <p className="text-white text-xs font-serif font-medium">Cultural Gastronomy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
