export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'traditional' | 'international' | 'drinks';
}

export const demoMenu: MenuItem[] = [
  {
    id: "trad-1",
    name: "Special Wollo Beyaynetu",
    description: "An authentic arrangement of traditional fasting stews served on fresh, fluffy injera.",
    price: 350,
    category: "traditional"
  },
  {
    id: "trad-2",
    name: "Tibs (Sautéed Beef)",
    description: "Tender beef cubes sautéed with onions, green chilies, and authentic Ethiopian clarified butter.",
    price: 500,
    category: "traditional"
  },
  {
    id: "int-1",
    name: "Lucy Grilled Chicken Breast",
    description: "Marinated chicken breast served with fresh local seasonal vegetables and cream garlic sauce.",
    price: 650,
    category: "international"
  },
  {
    id: "int-2",
    name: "Club Sandwich with Fries",
    description: "Classic multi-layer sandwich filled with grilled chicken, eggs, lettuce, tomato, and premium house mayo.",
    price: 450,
    category: "international"
  },
  {
    id: "drink-1",
    name: "Traditional Ethiopian Macchiato",
    description: "Rich, multi-layered premium espresso shot balanced perfectly with steamed frothy milk.",
    price: 80,
    category: "drinks"
  },
  {
    id: "drink-2",
    name: "Fresh Seasonal Avocado Juice",
    description: "Thick, creamy pureed local avocados served layers-style with a splash of fresh lime.",
    price: 150,
    category: "drinks"
  }
];
