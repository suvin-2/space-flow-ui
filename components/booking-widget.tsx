"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Calendar } from "./ui/calendar"
import { Separator } from "./ui/separator"
import { Clock, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]

export function BookingWidget() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [startTime, setStartTime] = useState<string | null>(null)
  const [endTime, setEndTime] = useState<string | null>(null)

  const hourlyRate = 20000

  const handleTimeClick = (time: string) => {
    if (!startTime) {
      // First click - set as start
      setStartTime(time)
      setEndTime(null)
    } else if (!endTime) {
      // Second click - determine which should be start/end
      const firstIdx = TIME_SLOTS.indexOf(startTime)
      const secondIdx = TIME_SLOTS.indexOf(time)

      if (secondIdx > firstIdx) {
        // Second time is later - set as end
        setEndTime(time)
      } else if (secondIdx < firstIdx) {
        // Second time is earlier - swap them
        setStartTime(time)
        setEndTime(startTime)
      } else {
        // Same time clicked - reset
        setStartTime(null)
        setEndTime(null)
      }
    } else {
      // Already have both - start new selection
      setStartTime(time)
      setEndTime(null)
    }
  }

  const resetSelection = () => {
    setStartTime(null)
    setEndTime(null)
  }

  const getTimeRangeCount = () => {
    if (!startTime || !endTime) return 0
    const startIdx = TIME_SLOTS.indexOf(startTime)
    const endIdx = TIME_SLOTS.indexOf(endTime)
    return endIdx - startIdx
  }

  const isInRange = (time: string) => {
    if (!startTime || !endTime) return false
    const timeIdx = TIME_SLOTS.indexOf(time)
    const startIdx = TIME_SLOTS.indexOf(startTime)
    const endIdx = TIME_SLOTS.indexOf(endTime)
    return timeIdx >= startIdx && timeIdx < endIdx
  }

  const totalHours = getTimeRangeCount()
  const total = totalHours * hourlyRate

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Card className="border-border shadow-xl">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="flex items-baseline justify-between">
          <div>
            <span className="text-3xl font-bold text-primary">₩{hourlyRate.toLocaleString()}</span>
            <span className="text-base font-normal text-muted-foreground ml-1">/ hour</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Date Selection */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Select Date</label>
          <div className="border border-border rounded-xl p-3 bg-muted/30 w-full">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md w-full"
              disabled={(date) => {
                // Only disable dates before today
                const checkDate = new Date(date)
                checkDate.setHours(0, 0, 0, 0)
                return checkDate < today
              }}
              modifiers={{
                today: today,
              }}
              modifiersClassNames={{
                today: "font-bold underline",
              }}
            />
          </div>
        </div>

        {/* Time Grid Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Select Time Range
            </label>
            {startTime && (
              <Button variant="ghost" size="sm" onClick={resetSelection} className="gap-1.5 h-8 px-3">
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </Button>
            )}
          </div>

          <div className="p-4 bg-muted/30 rounded-xl border border-border space-y-3">
            {!startTime ? (
              <p className="text-sm text-muted-foreground text-center py-2">Click a time slot to start</p>
            ) : !endTime ? (
              <p className="text-sm text-muted-foreground text-center py-2">
                Selected: <span className="font-semibold text-foreground">{startTime}</span> - Click end time
              </p>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2">
                <Badge variant="default" className="text-sm px-3 py-1">
                  {startTime} - {endTime}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {totalHours} {totalHours === 1 ? "hour" : "hours"}
                </Badge>
              </div>
            )}

            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isStart = slot === startTime
                const isEnd = slot === endTime
                const inRange = isInRange(slot)

                return (
                  <Button
                    key={slot}
                    onClick={() => handleTimeClick(slot)}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "text-xs font-semibold transition-all h-10",
                      (isStart || isEnd || inRange) &&
                        "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground",
                      inRange && !isStart && !isEnd && "bg-primary/80",
                    )}
                  >
                    {slot}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <Separator />

        {/* Price Summary */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              ₩{hourlyRate.toLocaleString()} × {totalHours} {totalHours === 1 ? "hour" : "hours"}
            </span>
            <span className="font-semibold text-foreground">₩{total.toLocaleString()}</span>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">₩{total.toLocaleString()}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button size="lg" className="w-full text-base font-semibold h-12" disabled={totalHours === 0}>
          {totalHours === 0 ? "Select time range to book" : "Request Booking"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">Instant confirmation • Free cancellation</p>
      </CardContent>
    </Card>
  )
}
