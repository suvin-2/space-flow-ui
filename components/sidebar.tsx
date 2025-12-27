"use client"

import { Button } from "./ui/button"
import { LayoutDashboard, Calendar, ListOrdered, Settings, Building2 } from "lucide-react"
import type { View } from "./host-view"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Label } from "./ui/label"

interface SidebarProps {
  currentView: View
  onViewChange: (view: View) => void
  selectedSpace: string
  onSpaceChange: (spaceId: string) => void
  isCreateMode: boolean
}

export function Sidebar({ currentView, onViewChange, selectedSpace, onSpaceChange, isCreateMode }: SidebarProps) {
  const navItems = [
    { id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar" as View, label: "Calendar", icon: Calendar },
    { id: "reservations" as View, label: "Reservations", icon: ListOrdered },
    { id: "settings" as View, label: "Space Settings", icon: Settings },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border p-4 hidden lg:block">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6 px-2">
        <Building2 className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">SpaceFlow</span>
      </div>

      <div className="mb-6 pb-6 border-b border-sidebar-border">
        <Label className="text-xs font-medium text-muted-foreground mb-2 block px-2">CURRENT SPACE</Label>
        <Select value={selectedSpace} onValueChange={onSpaceChange}>
          <SelectTrigger className="w-full bg-background">
            <SelectValue placeholder="Select a space" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gangnam-studio">Gangnam Studio</SelectItem>
            <SelectItem value="hongdae-party">Hongdae Party Room</SelectItem>
            <SelectItem value="itaewon-meeting">Itaewon Meeting Room</SelectItem>
            <SelectItem value="add-new" className="text-primary font-medium">
              {isCreateMode ? "Creating New Space..." : "+ Add New Space"}
            </SelectItem>
            <SelectItem value="new-space" className="hidden data-[state=checked]:block">
              New Space
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isDisabled = isCreateMode && item.id !== "settings"

          return (
            <Button
              key={item.id}
              variant={currentView === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                currentView === item.id && "shadow-sm",
                isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
              )}
              onClick={() => !isDisabled && onViewChange(item.id)}
              disabled={isDisabled}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}
