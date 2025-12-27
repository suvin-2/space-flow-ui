"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { DashboardOverview } from "./dashboard-overview"
import { ScheduleManager } from "./schedule-manager"
import { ReservationsList } from "./reservations-list"
import { SpaceSettings } from "./space-settings"

export type View = "dashboard" | "calendar" | "reservations" | "settings"

export function HostView() {
  const [currentView, setCurrentView] = useState<View>("dashboard")
  const [selectedSpace, setSelectedSpace] = useState("gangnam-studio")
  const [isCreateMode, setIsCreateMode] = useState(false)

  const handleSpaceChange = (spaceId: string) => {
    if (spaceId === "add-new") {
      setIsCreateMode(true)
      setSelectedSpace("add-new") // Update dropdown to show creation state
      setCurrentView("settings") // Navigate to settings
    } else {
      setIsCreateMode(false)
      setSelectedSpace(spaceId)
    }
  }

  const handleSpaceCreate = (spaceName: string) => {
    setIsCreateMode(false)
    setSelectedSpace("new-space") // Switch to the newly created space
    setCurrentView("dashboard") // Redirect to dashboard
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        selectedSpace={selectedSpace}
        onSpaceChange={handleSpaceChange}
        isCreateMode={isCreateMode}
      />

      <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64">
        {currentView === "dashboard" && <DashboardOverview />}
        {currentView === "calendar" && <ScheduleManager />}
        {currentView === "reservations" && <ReservationsList />}
        {currentView === "settings" && (
          <SpaceSettings isCreateMode={isCreateMode} selectedSpace={selectedSpace} onSpaceCreate={handleSpaceCreate} />
        )}
      </main>
    </div>
  )
}
