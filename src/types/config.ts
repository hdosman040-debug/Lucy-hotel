export interface HotelTheme {
  primaryBg: string;
  luxuryGold: string;
  champagne: string;
  textLight: string;
  textDark: string;
  textMuted: string;
}

export interface HotelBrand {
  name: string;
  tagline: string; logoUrl?: string;
  subtitle: string;
  theme: HotelTheme;
}

export interface ContactInfo {
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  region: string;
  googleMapEmbedUrl: string;
}

export interface Amenity {
  id: string;
  label: string;
  iconName: string;
}

export interface Room {
  id: string;
  title: string;
  slug: string;
  description: string;
  capacity: number;
  bedType: string;
  size: string;
  pricePerNight: number;
  imageUrl: string;
  amenities: string[];
  isFeatured: boolean;
}

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  isChefRecommendation: boolean;
}

export interface DiningCategory {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export interface DiningSection {
  traditional: DiningCategory;
  international: DiningCategory;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  role: string;
  rating: number;
  comment: string;
}

export interface Attraction {
  id: string;
  title: string;
  distance: string;
  description: string;
}

export interface HotelConfig {
  brand: HotelBrand;
  contact: ContactInfo;
  amenitiesMaster: Amenity[];
  rooms: Room[];
  dining: DiningSection;
  facilities: Facility[];
  testimonials: Testimonial[];
  attractions: Attraction[];
}
