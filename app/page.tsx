"use client"

import { useState } from "react"
import { GuestView } from "@/components/guest-view"
import { HostView } from "@/components/host-view"
import { Button } from "@/components/ui/button"
import { Building2, User } from "lucide-react"

export default function Home() {
  const [viewMode, setViewMode] = useState<"guest" | "host">("guest")

  return (
    <div className="min-h-screen">
      {/* View Mode Toggle */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-card border border-border rounded-lg p-1 shadow-lg">
        <Button
          variant={viewMode === "guest" ? "default" : "ghost"}
          size="sm"
          onClick={() => setViewMode("guest")}
          className="gap-2"
        >
          <User className="h-4 w-4" />
          Guest View
        </Button>
        <Button
          variant={viewMode === "host" ? "default" : "ghost"}
          size="sm"
          onClick={() => setViewMode("host")}
          className="gap-2"
        >
          <Building2 className="h-4 w-4" />
          Host Admin
        </Button>
      </div>

      {/* Render current view */}
      {viewMode === "guest" ? <GuestView /> : <HostView />}
    </div>
  )
}
