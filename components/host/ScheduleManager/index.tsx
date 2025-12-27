"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ScheduleLegend } from "./ScheduleLegend"
import { CalendarGrid } from "./CalendarGrid"
import { BookingDetailModal } from "./BookingDetailModal"

import { DAYS, MOCK_BOOKINGS } from "@/lib/data/schedule"
import type { Booking } from "@/lib/types/booking"

export function ScheduleManager() {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getWeekDates = () => {
    const today = new Date()
    const weekStart = new Date(today)
    weekStart.setDate(today.getDate() - today.getDay() + 1 + currentWeek * 7)

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
      {/* Header */}
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
      <ScheduleLegend />

      {/* Calendar */}
      <CalendarGrid
        weekDates={weekDates}
        bookings={MOCK_BOOKINGS}
        onBookingClick={handleBookingClick}
      />

      {/* Instructions */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Click on any time slot to block it and prevent bookings, or hover
            over a booking to view details and manage it.
          </p>
        </CardContent>
      </Card>

      {/* Booking Detail Modal */}
      <BookingDetailModal
        booking={selectedBooking}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onApprove={handleApprove}
        onReject={handleReject}
        onCancel={handleCancel}
      />
    </div>
  )
}
