"use client"

import { Button } from "./ui/button"
import { useState } from "react"
import { Calendar, Clock, Search, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"

const HOUR_OPTIONS = Array.from({ length: 14 }, (_, i) => {
  const hour = i + 9
  return `${hour.toString().padStart(2, "0")}:00`
})

interface ExpandedSearchOverlayProps {
  searchParams: {
    activity: string
    date: string
    time: string
  }
  onSearch: (params: { activity: string; date: string; time: string }) => void
  onClose: () => void
}

export function ExpandedSearchOverlay({ searchParams, onSearch, onClose }: ExpandedSearchOverlayProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>(searchParams.activity)
  const [selectedDate, setSelectedDate] = useState<string>(searchParams.date)
  const [selectedTime, setSelectedTime] = useState<string>(searchParams.time)

  const handleSearch = () => {
    onSearch({
      activity: selectedActivity,
      date: selectedDate,
      time: selectedTime,
    })
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Expanded Search Panel */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-200">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

          <h2 className="text-2xl font-bold text-foreground mb-6">Edit your search</h2>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-semibold text-foreground mb-2 block">What activity?</label>
              <Select value={selectedActivity} onValueChange={setSelectedActivity}>
                <SelectTrigger className="h-12 py-2 px-3 w-full box-border bg-white border-input rounded-md">
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meeting">Meeting Room</SelectItem>
                  <SelectItem value="photo">Photo Studio</SelectItem>
                  <SelectItem value="party">Party Room</SelectItem>
                  <SelectItem value="dance">Dance Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold text-foreground mb-2 block">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none z-10" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="h-12 py-2 px-3 w-full box-border pl-10 bg-white border-input rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold text-foreground mb-2 block">Time</label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="h-12 py-2 px-3 w-full box-border bg-white border-input rounded-md">
                  <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {HOUR_OPTIONS.map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-shrink-0">
              <Button onClick={handleSearch} className="h-12 py-2 px-8 w-full md:w-auto box-border font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
