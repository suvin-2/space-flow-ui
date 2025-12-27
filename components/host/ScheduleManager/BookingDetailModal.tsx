"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Booking } from "@/lib/types/booking"

interface BookingDetailModalProps {
  booking: Booking | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onApprove: () => void
  onReject: () => void
  onCancel: () => void
}

export function BookingDetailModal({
  booking,
  isOpen,
  onOpenChange,
  onApprove,
  onReject,
  onCancel,
}: BookingDetailModalProps) {
  if (!booking) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Booking Details</DialogTitle>
            <Badge
              variant={booking.status === "confirmed" ? "default" : "secondary"}
              className={cn(
                booking.status === "confirmed" && "bg-green-500",
                booking.status === "pending" && "bg-yellow-500 text-black"
              )}
            >
              {booking.status?.toUpperCase()}
            </Badge>
          </div>
          <DialogDescription>Review and manage this reservation</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Guest Info */}
          <div>
            <h3 className="font-semibold text-lg mb-2">{booking.guest}</h3>
            <div className="space-y-2 text-sm">
              {booking.guestEmail && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {booking.guestEmail}
                </div>
              )}
              {booking.guestPhone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {booking.guestPhone}
                </div>
              )}
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Date</span>
              <span className="font-medium">
                {booking.date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Time</span>
              <span className="font-medium">
                {booking.startHour}:00 - {booking.startHour + booking.duration}:00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Duration</span>
              <span className="font-medium">{booking.duration} hours</span>
            </div>
            {booking.totalPrice && (
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm font-semibold">Total Price</span>
                <span className="font-bold text-lg">₩{booking.totalPrice.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Request Message */}
          {booking.requestMessage && (
            <div>
              <h4 className="font-semibold mb-2">Guest Message</h4>
              <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                {booking.requestMessage}
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          {booking.status === "pending" && (
            <>
              <Button variant="outline" onClick={onReject} className="flex-1 bg-transparent">
                Reject
              </Button>
              <Button onClick={onApprove} className="flex-1 bg-green-600 hover:bg-green-700">
                Approve
              </Button>
            </>
          )}
          {booking.status === "confirmed" && (
            <>
              <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Close
              </Button>
              <Button variant="destructive" onClick={onCancel} className="flex-1">
                Cancel Booking
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
