export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  capacity: string;
  bedType: string;
  size: string;
  amenities: string[];
  idealFor: string;
  buttonTextPrimary: string;
  buttonTextSecondary: string;
  images?: string[];
  pricePerNight?: number;
  maxGuests?: string;
}

export const roomsData: Room[] = [
  {
    id: "standard-comfort",
    name: "Standard Comfort Room",
    tagline: "Comfortable Essentials for a Relaxing Stay",
    description: "Our Standard Comfort Rooms provide a peaceful and welcoming environment for guests visiting Dessie for business, tourism, or short stays.",
    image: "/images/rooms/standard-bed.jpg",
    price: 3500,
    capacity: "1–2 Guests",
    bedType: "Queen Bed / Twin Beds",
    size: "28 m²",
    amenities: ["Private Bathroom", "WiFi Access", "Television", "Air Conditioning", "Daily Housekeeping"],
    idealFor: "Business travelers, solo guests, and short stays.",
    buttonTextPrimary: "Reserve via WhatsApp",
    buttonTextSecondary: "View Room Details"
  },
  {
    id: "superior-room",
    name: "Superior Room",
    tagline: "More Space. Enhanced Comfort.",
    description: "Superior Rooms provide additional space and upgraded comfort for guests who prefer a more relaxing stay with premium bedding.",
    image: "/images/rooms/standard-bed.jpg",
    price: 4800,
    capacity: "1–2 Guests",
    bedType: "King / Twin Bed Options",
    size: "35 m²",
    amenities: ["Seating Area", "Modern Bathroom", "WiFi Access", "Entertainment System", "Coffee Station"],
    idealFor: "Couples, professionals, and extended stays.",
    buttonTextPrimary: "Reserve via WhatsApp",
    buttonTextSecondary: "Explore Superior Room"
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Premium Comfort with Elegant Design",
    description: "The Deluxe Room provides a higher level of comfort with spacious interiors, refined accommodation arrangements, and custom linen bedding ensembles.",
    image: "/images/rooms/deluxe-bed.jpg",
    price: 6500,
    capacity: "2 Guests",
    bedType: "King Bed",
    size: "42 m²",
    amenities: ["Relaxation Area", "Premium Bathroom", "Television", "High-Speed WiFi", "Room Service"],
    idealFor: "Couples, VIP guests, and premium travelers.",
    buttonTextPrimary: "Book Your Stay",
    buttonTextSecondary: "View Deluxe Room"
  },
  {
    id: "executive-room",
    name: "Executive Room",
    tagline: "Designed for Business Travelers",
    description: "Executive Rooms combine comfort and productivity for professionals visiting Dessie. Fitted out with top-tier quiet spaces optimized for remote operations.",
    image: "/images/rooms/deluxe-bed.jpg", 
    price: 8000,
    capacity: "1–2 Guests",
    bedType: "Premium Bed",
    size: "48 m²",
    amenities: ["Workspace Area", "Fast Internet", "Coffee Setup", "Comfortable Seating", "Modern Bathroom"],
    idealFor: "Executives, conference guests, and business visitors.",
    buttonTextPrimary: "Contact Hotel",
    buttonTextSecondary: "Discover Executive Room"
  },
  {
    id: "lucy-signature-suite",
    name: "Lucy Signature Suite",
    tagline: "The Complete Lucy Experience",
    description: "The Signature Suite represents the highest level of accommodation at Lucy International Hotel. Designed for guests seeking spacious comfort, privacy, and exceptional hospitality.",
    image: "/images/rooms/deluxe-bed.jpg",
    price: 12500,
    capacity: "2–4 Guests",
    bedType: "Luxury Bedroom Suite",
    size: "75 m²",
    amenities: ["Separate Living Space", "Dining Area", "Premium Master Bathroom", "WiFi Access", "Special Guest Services"],
    idealFor: "VIP guests, families, celebrations, and luxury stays.",
    buttonTextPrimary: "Request Reservation",
    buttonTextSecondary: "View Signature Suite"
  }
];

export const demoRooms = roomsData.map(room => ({
  ...room,
  images: [room.image],
  pricePerNight: room.price,
  maxGuests: room.capacity
}));
