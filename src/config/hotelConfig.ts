import { HotelConfig } from '../types/config';

export const hotelConfig: HotelConfig = {
  brand: {
    name: "Lucy Hotel",
    tagline: "LUCY HOTEL",
    subtitle: "Elevate Your Stay",
    logoUrl: "https://images.unsplash.com/photo-1541535881962-e66031b86b33?auto=format&fit=crop&w=120&h=120&q=80",
    theme: {
      primaryBg: "#11141A",
      luxuryGold: "#C5A880",
      champagne: "#E2C9A1",
      textLight: "#FFFFFF",
      textDark: "#11141A",
      textMuted: "#64748B"
    }
  },
  contact: {
    phone: "+251 33 111 2233",
    whatsappNumber: "251911223344",
    email: "reservations@lucyhotel.com",
    address: "Piazza Street, Dessie",
    city: "Dessie",
    region: "Wollo, Ethiopia",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.123!2d39.633!3d11.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzU4LjgiTiAzOc跨MzcnNTguOCJF!5e0!3m2!1sen!2set!4v1625000000000!5m2!1sen!2set"
  },
  amenitiesMaster: [
    { id: "wifi", label: "High-Speed Wi-Fi", iconName: "Wifi" },
    { id: "pool", label: "Infinity Pool", iconName: "Waves" },
    { id: "gym", label: "Wellness Gym", iconName: "Dumbbell" },
    { id: "ac", label: "Climate Control", iconName: "Wind" },
    { id: "service", label: "24/7 Butler Service", iconName: "UserCheck" },
    { id: "bar", label: "Premium Lounge", iconName: "Coffee" }
  ],
  rooms: [
    {
      id: "wollo-exec-suite",
      title: "Wollo Executive Suite",
      slug: "wollo-executive-suite",
      description: "An ultra-luxurious sanctuary pairing panoramic views of Tossa Mountain with hand-woven Ethiopian textile accents and modern spatial climate automations.",
      capacity: 2,
      bedType: "1 Imperial King Bed",
      size: "65 m²",
      pricePerNight: 280,
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "service", "ac", "bar"],
      isFeatured: true
    },
    {
      id: "tossa-deluxe",
      title: "Tossa Mountain Deluxe",
      slug: "tossa-mountain-deluxe",
      description: "Elegant minimalist architecture framing local landscape. Features a custom freestanding soaking tub and high-fidelity internal acoustics.",
      capacity: 2,
      bedType: "1 Queen Bed",
      size: "45 m²",
      pricePerNight: 190,
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      amenities: ["wifi", "ac", "bar"],
      isFeatured: false
    }
  ],
  dining: {
    traditional: {
      title: "Wollo Heritage Culinary Experience",
      subtitle: "Centuries-old regional recipes re-imagined with master contemporary precision.",
      items: [
        {
          id: "wollo-komboshta",
          title: "Wollo Komboshta Platter",
          description: "A ceremonial selection of tender local cuts slowly braised with organic clarified butter (Niter Kibbeh) and house-ground Berbere.",
          price: 32,
          imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
          isChefRecommendation: true
        },
        {
          id: "bunna-ritual",
          title: "Imperial Coffee Ritual",
          description: "Premium single-origin heritage Arabica beans roasted table-side over aromatic frankincense smokelines.",
          price: 12,
          imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
          isChefRecommendation: false
        }
      ]
    },
    international: {
      title: "Global Gastronomy",
      subtitle: "World-class signature dishes curated by internationally acclaimed chefs.",
      items: [
        {
          id: "wagyu-ribeye",
          title: "A5 Wagyu Ribeye",
          description: "Perfectly marbled cut seared over signature volcanic stone layers, finished with structural sea salt flakes.",
          price: 85,
          imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
          isChefRecommendation: true
        }
      ]
    }
  },
  facilities: [
    { id: "f1", title: "Corporate Conference Hall", description: "State-of-the-art cinematic projection networks accommodating up to 300 business leaders.", iconName: "Users" },
    { id: "f2", title: "The Imperial Spa & Hammam", description: "Rejuvenating somatic therapies utilizing signature botanical extractions from the Ethiopian highlands.", iconName: "Sparkles" }
  ],
  testimonials: [
    { id: "t1", guestName: "Amara Bekele", role: "International Tech Consultant", rating: 5, comment: "The attention to detailed luxury rivaled the best properties in Paris. The synergy of modern comfort with deep Wollo heritage is completely unmatched." }
  ],
  attractions: [
    { id: "a1", title: "Tossa Mountain Viewpoint", distance: "15 mins drive", description: "Spectacular vantage point offering breathtaking, sweeping views across historical Dessie." }
  ]
};
