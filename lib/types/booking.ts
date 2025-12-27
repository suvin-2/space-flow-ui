export interface Booking {
  id: string
  guest: string
  guestEmail?: string
  guestPhone?: string
  requestMessage?: string
  startHour: number
  duration: number
  status: "confirmed" | "pending" | "blocked"
  totalPrice?: number
  date?: Date
}

export type BookingStatus = Booking["status"]
