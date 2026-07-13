import React from 'react';
import { Bed, Utensils, Users, Wine, Wifi } from 'lucide-react';

export default function ServicesShowcase() {
  const sections = [
    {
      id: 'rooms',
      title: 'Luxury Accommodation & Suites',
      icon: <Bed className="w-8 h-8 text-amber-500" />,
      description: 'Experience refined comfort in our meticulously designed rooms. Featuring premium Ethiopian traditional accents blended with modern high-end amenities, private balconies overlooking Dessie, and elite orthogonal bedding architectures.',
      badge: 'Premium Stay'
    },
    {
      id: 'food-and-restaurant',
      title: 'Wollo & International Fine Dining',
      icon: <Utensils className="w-8 h-8 text-amber-500" />,
      description: 'Savor gourmet excellence crafted by master culinary experts. From authentic, rich cultural Wollo delicacies to exquisite contemporary international plates, our kitchen provides an unparalleled gastronomic trip.',
      badge: 'Fine Cuisine'
    },
    {
      id: 'meeting-and-conference',
      title: 'Elite Meetings & Conference Halls',
      icon: <Users className="w-8 h-8 text-amber-500" />,
      description: 'Host flawless corporate gatherings, high-level summits, or private celebrations in our top-tier event venues. Outfitted with state-of-the-art acoustics, high-density projection matrices, and bespoke catering.',
      badge: 'Executive Hub'
    },
    {
      id: 'bar',
      title: 'The Charcoal Vibe Lounge & Bar',
      icon: <Wine className="w-8 h-8 text-amber-500" />,
      description: 'Unwind in an atmospheric oasis featuring curated specialty blends, top-shelf international spirits, and signature house infusions. Designed as a premium space for evening relaxation and high-profile networking.',
      badge: 'Lounge'
    },
    {
      id: 'free-wifi',
      title: 'High-Density Premium Free Wi-Fi',
      icon: <Wifi className="w-8 h-8 text-amber-500" />,
      description: 'Stay effortlessly connected across the entire hotel footprint. Powered by localized enterprise-grade fiber infrastructure, delivering high-throughput speeds optimized for remote workflows, streaming, and global communications.',
      badge: 'Gigabit Network'
    }
  ];

  return (
    <section className="bg-[#11141A] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-amber-500 tracking-widest text-xs font-bold uppercase">Our World-Class Offerings</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">EXPERIENCE LUXURY SERVICES</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Alternating Layout Grid */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-[#1a1d24] border border-gray-800 rounded-lg p-8 md:p-12 transition-all duration-300 hover:border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-[#11141A] rounded-md border border-gray-800">
                    {section.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                    {section.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-wide text-white">{section.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{section.description}</p>
              </div>

              {/* Action Intent anchor linking down to the central WhatsApp dynamic setup */}
              <div className="flex-shrink-0">
                <a
                  href="#booking"
                  className="inline-block bg-transparent text-amber-500 border border-amber-500/40 hover:bg-amber-500 hover:text-[#11141A] font-semibold text-sm tracking-wider px-6 py-3 rounded-sm transition-all duration-200 uppercase text-center w-full md:w-auto"
                >
                  Reserve Service
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
