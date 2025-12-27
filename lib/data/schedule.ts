import type { Booking } from "@/lib/types/booking"

export const HOURS = Array.from({ length: 14 }, (_, i) => i + 9) // 9:00 to 22:00
export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export const MOCK_BOOKINGS: Record<number, Booking[]> = {
  0: [
    // Monday
    {
      id: "1",
      guest: "Sarah Kim",
      guestEmail: "sarah.kim@email.com",
      guestPhone: "+82 10-1234-5678",
      requestMessage: "Need the space for a product photoshoot. Will bring my own equipment.",
      startHour: 10,
      duration: 4,
      status: "confirmed",
      totalPrice: 80000,
    },
    { id: "2", guest: "Block", startHour: 18, duration: 3, status: "blocked" },
  ],
  2: [
    // Wednesday
    {
      id: "3",
      guest: "James Park",
      guestEmail: "james.park@email.com",
      guestPhone: "+82 10-9876-5432",
      requestMessage: "Planning a small birthday party. Can I bring decorations?",
      startHour: 14,
      duration: 3,
      status: "pending",
      totalPrice: 60000,
    },
  ],
  4: [
    // Friday
    {
      id: "4",
      guest: "Michelle Lee",
      guestEmail: "michelle.lee@email.com",
      guestPhone: "+82 10-5555-7777",
      requestMessage: "Corporate team building event. Need space for 10-12 people.",
      startHour: 15,
      duration: 5,
      status: "confirmed",
      totalPrice: 100000,
    },
  ],
  6: [
    // Sunday
    {
      id: "5",
      guest: "David Choi",
      guestEmail: "david.choi@email.com",
      guestPhone: "+82 10-3333-4444",
      requestMessage: "First time booking. Looking forward to using the studio!",
      startHour: 11,
      duration: 2,
      status: "pending",
      totalPrice: 40000,
    },
  ],
}
