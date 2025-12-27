"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Plus, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"

interface Booking {
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

const HOURS = Array.from({ length: 14 }, (_, i) => i + 9) // 9:00 to 22:00
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function ScheduleManager() {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sample booking data with enhanced details
  const bookings: Record<number, Booking[]> = {
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

  const getWeekDates = () => {
    const today = new Date()
    const weekStart = new Date(today)
    weekStart.setDate(today.getDate() - today.getDay() + 1 + currentWeek * 7) // Start on Monday

    return DAYS.map((_, i) => {
      const date = new Date(weekStart)
      date.setDate(weekStart.getDate() + i)
      return date
    })
  }

  const weekDates = getWeekDates()

  const handleBookingClick = (booking: Booking, dayIndex: number) => {
    if (booking.status === "blocked") return
    const bookingWithDate = { ...booking, date: weekDates[dayIndex] }
    setSelectedBooking(bookingWithDate)
    setIsModalOpen(true)
  }

  const handleApprove = () => {
    console.log("[v0] Approving booking:", selectedBooking?.id)
    setIsModalOpen(false)
  }

  const handleReject = () => {
    console.log("[v0] Rejecting booking:", selectedBooking?.id)
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    console.log("[v0] Cancelling booking:", selectedBooking?.id)
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule Manager</h1>
          <p className="text-muted-foreground mt-1">View and manage your booking calendar</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentWeek(0)}>
            This Week
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500" />
          <span>Confirmed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-500" />
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-500" />
          <span>Blocked</span>
        </div>
      </div>

      {/* Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>
            Week of {weekDates[0].toLocaleDateString("en-US", { month: "long", day: "numeric" })} -{" "}
            {weekDates[6].toLocaleDateString("en-US", { month: "long", day: "numeric" })}
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
                      {weekDates[i].toLocaleDateString("en-US", { month: "short", day: "numeric" })}
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
                      <div key={dayIndex} className="relative h-16 border-l hover:bg-muted/30 cursor-pointer group">
                        {/* Booking blocks */}
                        {bookings[dayIndex]?.map((booking) => {
                          if (booking.startHour === hour) {
                            return (
                              <div
                                key={booking.id}
                                onClick={() => handleBookingClick(booking, dayIndex)}
                                className={cn(
                                  "absolute inset-x-1 rounded-md p-2 text-xs font-medium text-white overflow-hidden cursor-pointer hover:opacity-90 transition-opacity",
                                  booking.status === "confirmed" && "bg-green-500",
                                  booking.status === "pending" && "bg-yellow-500",
                                  booking.status === "blocked" && "bg-gray-500 cursor-default",
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

      {/* Instructions */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Click on any time slot to block it and prevent bookings, or hover over a booking to
            view details and manage it.
          </p>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl">Booking Details</DialogTitle>
              <Badge
                variant={selectedBooking?.status === "confirmed" ? "default" : "secondary"}
                className={cn(
                  selectedBooking?.status === "confirmed" && "bg-green-500",
                  selectedBooking?.status === "pending" && "bg-yellow-500 text-black",
                )}
              >
                {selectedBooking?.status?.toUpperCase()}
              </Badge>
            </div>
            <DialogDescription>Review and manage this reservation</DialogDescription>
          </DialogHeader>

          {selectedBooking && (
            <div className="space-y-4 py-4">
              {/* Guest Info */}
              <div>
                <h3 className="font-semibold text-lg mb-2">{selectedBooking.guest}</h3>
                <div className="space-y-2 text-sm">
                  {selectedBooking.guestEmail && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {selectedBooking.guestEmail}
                    </div>
                  )}
                  {selectedBooking.guestPhone && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      {selectedBooking.guestPhone}
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Details */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {selectedBooking.date?.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Time</span>
                  <span className="font-medium">
                    {selectedBooking.startHour}:00 - {selectedBooking.startHour + selectedBooking.duration}:00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-medium">{selectedBooking.duration} hours</span>
                </div>
                {selectedBooking.totalPrice && (
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-semibold">Total Price</span>
                    <span className="font-bold text-lg">₩{selectedBooking.totalPrice.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Request Message */}
              {selectedBooking.requestMessage && (
                <div>
                  <h4 className="font-semibold mb-2">Guest Message</h4>
                  <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                    {selectedBooking.requestMessage}
                  </p>
                </div>
              )}
            </div>
          )}

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            {selectedBooking?.status === "pending" && (
              <>
                <Button variant="outline" onClick={handleReject} className="flex-1 bg-transparent">
                  Reject
                </Button>
                <Button onClick={handleApprove} className="flex-1 bg-green-600 hover:bg-green-700">
                  Approve
                </Button>
              </>
            )}
            {selectedBooking?.status === "confirmed" && (
              <>
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                  Close
                </Button>
                <Button variant="destructive" onClick={handleCancel} className="flex-1">
                  Cancel Booking
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
