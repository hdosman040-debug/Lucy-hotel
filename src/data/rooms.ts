export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedType: string;
  amenities: string[];
}

export const demoRooms: Room[] = [
  {
    id: "standard-room",
    name: "Standard Comfort Room",
    description: "An elegant, budget-friendly option offering total comfort with modern amenities, perfect for short business or leisure stays.",
    pricePerNight: 2500, // Demo local currency value (ETB structure)
    maxGuests: 2,
    bedType: "Queen Size",
    amenities: ["Free High-Speed Wi-Fi", "Private Bathroom", "Smart TV", "Complimentary Breakfast"]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Premium Room",
    description: "Spacious luxury designed for refined travelers. Includes enhanced seating areas and a panoramic view of beautiful Dessie cityscape.",
    pricePerNight: 4000,
    maxGuests: 2,
    bedType: "King Size",
    amenities: ["Free High-Speed Wi-Fi", "Private Bathroom", "Smart TV", "Complimentary Breakfast", "Mini Bar Ready", "Air Conditioning"]
  },
  {
    id: "suite-room",
    name: "Lucy Executive Suite",
    description: "The ultimate signature VIP experience. Features a separate private living area, premium local coffee setup, and personalized room service configurations.",
    pricePerNight: 7500,
    maxGuests: 3,
    bedType: "King Size Imperial",
    amenities: ["Free High-Speed Wi-Fi", "Luxury Bath & Shower", "Smart TV", "Complimentary Breakfast", "Mini Bar Ready", "Air Conditioning", "Private Lounge"]
  }
];
