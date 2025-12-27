"use client"

import { Button } from "./ui/button"
import { useState } from "react"
import { Calendar, Clock, Search, Presentation, Camera, PartyPopper, Music } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"

const HOUR_OPTIONS = Array.from({ length: 14 }, (_, i) => {
  const hour = i + 9
  return `${hour.toString().padStart(2, "0")}:00`
})

interface HeroSectionProps {
  onSearch: (params: { activity: string; date: string; time: string }) => void
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleSearch = () => {
    onSearch({
      activity: selectedActivity,
      date: selectedDate,
      time: selectedTime,
    })
  }

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100/40 via-white to-indigo-100/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight tracking-tight">
              Find the perfect space for your workflow
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book professional spaces by the hour for meetings, shoots, and events
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-semibold text-foreground mb-2 block">What activity?</label>
                <Select value={selectedActivity} onValueChange={setSelectedActivity}>
                  <SelectTrigger className="h-10 py-2 px-3 w-full box-border bg-white border-input rounded-md">
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
                    className="h-10 py-2 px-3 w-full box-border pl-10 bg-white border-input rounded-md"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-sm font-semibold text-foreground mb-2 block">Time</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="h-10 py-2 px-3 w-full box-border bg-white border-input rounded-md">
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
                <Button onClick={handleSearch} className="h-10 py-2 px-8 w-full md:w-auto box-border font-semibold">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
            {[
              { icon: Presentation, label: "Meeting Room", value: "meeting" },
              { icon: Camera, label: "Photo Studio", value: "photo" },
              { icon: PartyPopper, label: "Party Room", value: "party" },
              { icon: Music, label: "Dance Practice", value: "dance" },
            ].map((category) => (
              <button
                key={category.label}
                onClick={() => {
                  setSelectedActivity(category.value)
                }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-card transition-colors group"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
