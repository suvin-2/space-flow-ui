"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { BookingBlock } from "./BookingBlock"
import { HOURS, DAYS } from "@/lib/data/schedule"
import type { Booking } from "@/lib/types/booking"

interface CalendarGridProps {
  weekDates: Date[]
  bookings: Record<number, Booking[]>
  onBookingClick: (booking: Booking, dayIndex: number) => void
}

export function CalendarGrid({ weekDates, bookings, onBookingClick }: CalendarGridProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Week of {weekDates[0]?.toLocaleDateString("en-US", { month: "long", day: "numeric" })} -{" "}
          {weekDates[6]?.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-8 border-b">
              <div className="p-4 font-semibold text-sm bg-muted/50">Time</div>
              {DAYS.map((day, i) => (
                <div key={day} className="p-4 text-center border-l">
                  <div className="font-semibold">{day}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {weekDates[i]?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </div>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="relative">
              {HOURS.map((hour) => (
                <div key={hour} className="grid grid-cols-8 border-b">
                  <div className="p-3 text-sm font-medium bg-muted/50 border-r">
                    {hour.toString().padStart(2, "0")}:00
                  </div>
                  {DAYS.map((_, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="relative h-16 border-l hover:bg-muted/30 cursor-pointer group"
                    >
                      {/* Booking blocks */}
                      {bookings[dayIndex]?.map((booking) => {
                        if (booking.startHour === hour) {
                          return (
                            <BookingBlock
                              key={booking.id}
                              booking={booking}
                              onClick={() => {
                                if (booking.status !== "blocked") {
                                  onBookingClick(booking, dayIndex)
                                }
                              }}
                            />
                          )
                        }
                        return null
                      })}

                      {/* Add button on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-6 w-6">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
