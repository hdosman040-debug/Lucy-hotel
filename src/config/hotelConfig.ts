export interface RoomConfig {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  image: string;
}

export interface DiningItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  isChefRecommendation: boolean;
}

export interface DiningCategory {
  title: string;
  subtitle: string;
  items: DiningItem[];
}


export const hotelConfig = {

  brand: {
    name: "Lucy Hotel",
    location: "Dessie, Wollo, Ethiopia",
    tagline: "Ethiopian Hospitality In The Heart Of Wollo",
    description:
      "Experience comfortable accommodation, warm Ethiopian hospitality, and convenient access to the historic landscapes of Dessie.",
    logo: "/logo.png"
  },


  contact: {
    phone: "+251XXXXXXXXX",
    email: "reservations@lucyhotel.com",
    whatsapp: "251XXXXXXXXX",
    whatsappNumber: "251XXXXXXXXX",
    address: "Dessie, Wollo Region, Ethiopia"
  },


  rooms: [
    {
      id: "standard",
      title: "Standard Room",
      description: "Comfortable accommodation with modern amenities.",
      pricePerNight: 0,
      image: "/images/rooms/standard.jpg"
    },
    {
      id: "deluxe",
      title: "Deluxe Room",
      description: "Spacious room with premium comfort.",
      pricePerNight: 0,
      image: "/images/rooms/deluxe.jpg"
    },
    {
      id: "suite",
      title: "Luxury Suite",
      description: "Exclusive suite experience.",
      pricePerNight: 0,
      image: "/images/rooms/suite.jpg"
    }
  ] as RoomConfig[],


  dining: {

    traditional: {
      title: "Traditional Ethiopian Cuisine",
      subtitle: "Authentic flavors inspired by Wollo heritage.",
      items: [
        {
          id: "breakfast",
          imageUrl: "/images/food/traditional.jpg",
          title: "Ethiopian Breakfast",
          description: "Fresh traditional Ethiopian flavors.",
          price: 0,
          isChefRecommendation: true
        }
      ]
    },


    international: {
      title: "International Cuisine",
      subtitle: "Popular meals prepared with care.",
      items: [
        {
          id: "international",
          imageUrl: "/images/food/international.jpg",
          title: "International Meals",
          description: "A selection of global dishes.",
          price: 0,
          isChefRecommendation: true
        }
      ]
    },


    drinks: {
      title: "Beverages",
      subtitle: "Coffee and refreshing drinks.",
      items: [
        {
          id: "coffee",
          imageUrl: "/images/food/coffee.jpg",
          title: "Ethiopian Coffee",
          description: "Fresh traditional coffee experience.",
          price: 0,
          isChefRecommendation: true
        }
      ]
    }

  } as Record<string, DiningCategory>,


  social: {
    facebook: "",
    instagram: "",
    telegram: ""
  },


  booking: {
    method: "whatsapp",
    defaultMessage:
      "Hello Lucy Hotel, I would like to ask about room availability."
  },


  navigation: [
    {
      key: "home",
      label: "Home",
      path: "/"
    },
    {
      key: "rooms",
      label: "Rooms",
      path: "/rooms"
    },
    {
      key: "dining",
      label: "Dining",
      path: "/dining"
    },
    {
      key: "about",
      label: "About Us",
      path: "/#about"
    },
    {
      key: "services",
      label: "Services",
      path: "/#experiences"
    },
    {
      key: "gallery",
      label: "Gallery",
      path: "/#gallery"
    },
    {
      key: "contact",
      label: "Contact",
      path: "/#contact"
    }
  ],


  features: [],


  seo: {
    title: "Lucy Hotel Dessie",
    description:
      "Luxury Ethiopian hospitality in Wollo."
  }

};


export default hotelConfig;
