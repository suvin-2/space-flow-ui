"use client"

import { Search } from "lucide-react"

interface CompactSearchHeaderProps {
  searchParams: {
    activity: string
    date: string
    time: string
  }
  onEdit: () => void
  onLogoClick: () => void
}

const ACTIVITY_LABELS: Record<string, string> = {
  meeting: "Meeting Room",
  photo: "Photo Studio",
  party: "Party Room",
  dance: "Dance Practice",
}

export function CompactSearchHeader({ searchParams, onEdit, onLogoClick }: CompactSearchHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - clickable to return home */}
          <button
            onClick={onLogoClick}
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
          >
            SpaceFlow
          </button>

          {/* Search Pill - centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <button
              onClick={onEdit}
              className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Segment 1: Activity */}
              <div className="px-6 py-2">
                <span className="text-sm font-semibold text-gray-900">
                  {ACTIVITY_LABELS[searchParams.activity] || "Any activity"}
                </span>
              </div>

              {/* Divider */}
              <div className="h-6 w-[1px] bg-gray-300" />

              {/* Segment 2: Date */}
              <div className="px-6 py-2">
                <span className="text-sm font-medium text-gray-700">
                  {searchParams.date ? formatDate(searchParams.date) : "Any date"}
                </span>
              </div>

              {/* Divider */}
              <div className="h-6 w-[1px] bg-gray-300" />

              {/* Segment 3: Time */}
              <div className="px-6 py-2">
                <span className="text-sm text-gray-500">{searchParams.time || "Any time"}</span>
              </div>

              {/* Search Button Circle */}
              <div className="mr-2 ml-2">
                <div className="bg-primary rounded-full p-2 flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
            </button>
          </div>

          {/* Placeholder for balance */}
          <div className="w-[140px]" />
        </div>
      </div>
    </header>
  )
}
