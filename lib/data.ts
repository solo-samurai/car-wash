export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  type: "mobile" | "center" | "both";
  category: "wash" | "detail" | "maintenance";
}

export interface Partner {
  id: string;
  name: string;
  address: string;
  rating: number;
  hasValet: boolean;
  valetFee?: number;
  services: string[]; // Service IDs
}

export interface Worker {
  id: string;
  name: string;
  rating: number;
  location: { lat: number; lng: number };
  isAvailable: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "basic_wash",
    name: "Basic Wash",
    description: "Exterior wash & dry",
    price: 15,
    duration: 30,
    type: "both",
    category: "wash",
  },
  {
    id: "premium_wash",
    name: "Premium Wash",
    description: "Exterior wash, dry & tire shine",
    price: 25,
    duration: 45,
    type: "both",
    category: "wash",
  },
  {
    id: "deluxe_wash",
    name: "Deluxe Wash",
    description: "Full exterior & interior cleaning",
    price: 40,
    duration: 60,
    type: "both",
    category: "wash",
  },
  {
    id: "interior_detail",
    name: "Interior Detailing",
    description: "Deep interior clean & vacuum",
    price: 35,
    duration: 90,
    type: "mobile",
    category: "detail",
  },
  {
    id: "oil_change",
    name: "Oil Change Package",
    description: "Synthetic oil & filter change",
    price: 50,
    duration: 30,
    type: "center",
    category: "maintenance",
  },
  {
    id: "fluid_topup",
    name: "Fluid Top-up",
    description: "Washer fluid, coolant",
    price: 15,
    duration: 15,
    type: "center",
    category: "maintenance",
  },
];

export const PARTNERS: Partner[] = [
  {
    id: "p1",
    name: "Sparkle Auto Center",
    address: "123 Main St, Downtown",
    rating: 4.8,
    hasValet: true,
    valetFee: 10,
    services: [
      "basic_wash",
      "premium_wash",
      "deluxe_wash",
      "oil_change",
      "fluid_topup",
    ],
  },
  {
    id: "p2",
    name: "QuickFix Garage",
    address: "456 Oak Ave, Westside",
    rating: 4.5,
    hasValet: false,
    services: ["basic_wash", "premium_wash", "oil_change", "fluid_topup"],
  },
  {
    id: "p3",
    name: "Elite Detailing",
    address: "789 Pine Rd, North Hills",
    rating: 4.9,
    hasValet: true,
    valetFee: 15,
    services: [
      "basic_wash",
      "premium_wash",
      "deluxe_wash",
      "oil_change",
      "fluid_topup",
    ],
  },
];

export const WORKERS: Worker[] = [
  {
    id: "w1",
    name: "Ali Ahmed",
    rating: 4.9,
    location: { lat: 0, lng: 0 }, // Mock location
    isAvailable: true,
  },
  {
    id: "w2",
    name: "Sara Hassan",
    rating: 4.8,
    location: { lat: 0, lng: 0 },
    isAvailable: true,
  },
  {
    id: "w3",
    name: "Omar Khalid",
    rating: 4.7,
    location: { lat: 0, lng: 0 },
    isAvailable: false,
  },
];
