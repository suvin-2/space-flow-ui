export interface SpaceSettingsData {
  name: string
  description: string
  maxCapacity: string
  squareFeet: string
  address: string
  city: string
  district: string
  directions: string
  hourlyRate: string
  minHours: string
  maxHours: string
  advanceBooking: string
  openTime: string
  closeTime: string
}

export interface AddOn {
  name: string
  price: string
}

export const SPACE_DATA: Record<string, SpaceSettingsData> = {
  "gangnam-studio": {
    name: "Modern Photo Studio in Gangnam",
    description:
      "Welcome to our premium photo studio in the heart of Gangnam. Our space features professional lighting equipment, backdrops, and a spacious shooting area perfect for product photography, portraits, and creative projects.",
    maxCapacity: "15",
    squareFeet: "800",
    address: "123 Gangnam-daero, Gangnam-gu, Seoul",
    city: "Seoul",
    district: "Gangnam-gu",
    directions: "5 min walk from Gangnam Station Exit 3",
    hourlyRate: "20000",
    minHours: "2",
    maxHours: "8",
    advanceBooking: "7",
    openTime: "09:00",
    closeTime: "22:00",
  },
  "hongdae-party": {
    name: "Hongdae Party Room",
    description: "Vibrant party space with sound system and LED lighting in the heart of Hongdae.",
    maxCapacity: "30",
    squareFeet: "1200",
    address: "456 Hongdae-ro, Mapo-gu, Seoul",
    city: "Seoul",
    district: "Mapo-gu",
    directions: "3 min walk from Hongik University Station Exit 9",
    hourlyRate: "35000",
    minHours: "3",
    maxHours: "10",
    advanceBooking: "14",
    openTime: "18:00",
    closeTime: "02:00",
  },
  "itaewon-meeting": {
    name: "Itaewon Meeting Room",
    description: "Professional meeting space with projector and whiteboard in Itaewon business district.",
    maxCapacity: "12",
    squareFeet: "500",
    address: "789 Itaewon-ro, Yongsan-gu, Seoul",
    city: "Seoul",
    district: "Yongsan-gu",
    directions: "Direct access from Itaewon Station Exit 1",
    hourlyRate: "15000",
    minHours: "1",
    maxHours: "6",
    advanceBooking: "3",
    openTime: "08:00",
    closeTime: "20:00",
  },
  "new-space": {
    name: "New Space",
    description: "Your newly created space",
    maxCapacity: "10",
    squareFeet: "600",
    address: "New Address",
    city: "Seoul",
    district: "New District",
    directions: "New directions",
    hourlyRate: "25000",
    minHours: "2",
    maxHours: "8",
    advanceBooking: "7",
    openTime: "09:00",
    closeTime: "22:00",
  },
}

export const DEFAULT_ADDONS: AddOn[] = [
  { name: "Professional Lighting Kit", price: "5,000" },
  { name: "Cleaning Fee", price: "10,000" },
  { name: "Background Setup", price: "8,000" },
  { name: "Equipment Storage", price: "3,000" },
]
