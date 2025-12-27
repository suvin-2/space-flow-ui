import { cn } from "@/lib/utils"
import type { Booking } from "@/lib/types/booking"

interface BookingBlockProps {
  booking: Booking
  onClick: () => void
}

export function BookingBlock({ booking, onClick }: BookingBlockProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "absolute inset-x-1 rounded-md p-2 text-xs font-medium text-white overflow-hidden cursor-pointer hover:opacity-90 transition-opacity",
        booking.status === "confirmed" && "bg-green-500",
        booking.status === "pending" && "bg-yellow-500",
        booking.status === "blocked" && "bg-gray-500 cursor-default"
      )}
      style={{
        height: `${booking.duration * 64}px`,
        zIndex: 10,
      }}
    >
      <div className="truncate">{booking.guest}</div>
      <div className="text-[10px] opacity-90">
        {booking.startHour}:00 - {booking.startHour + booking.duration}:00
      </div>
    </div>
  )
}
