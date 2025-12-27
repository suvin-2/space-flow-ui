"use client"

import { Button } from "@/components/ui/button"

import { BasicInfoSection } from "./BasicInfoSection"
import { LocationSection } from "./LocationSection"
import { AddOnsSection } from "./AddOnsSection"
import { PricingSection } from "./PricingSection"
import { PhotosSection } from "./PhotosSection"

import { SPACE_DATA, DEFAULT_ADDONS } from "@/lib/data/space-settings"

interface SpaceSettingsProps {
  isCreateMode: boolean
  selectedSpace: string
  onSpaceCreate?: (spaceName: string) => void
}

export function SpaceSettings({ isCreateMode, selectedSpace, onSpaceCreate }: SpaceSettingsProps) {
  const data = isCreateMode ? {} : SPACE_DATA[selectedSpace] || {}

  const handleCreateSpace = () => {
    if (onSpaceCreate) {
      onSpaceCreate("New Space")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {isCreateMode ? "Create New Space" : "Space Settings"}
        </h1>
        <p className="text-muted-foreground mt-1">
          {isCreateMode
            ? "Fill in the details for your new space"
            : "Configure your space details and pricing"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <BasicInfoSection data={data} isCreateMode={isCreateMode} />
          <LocationSection data={data} isCreateMode={isCreateMode} />
          <AddOnsSection addons={DEFAULT_ADDONS} isCreateMode={isCreateMode} />
        </div>

        {/* Right Column (Span 1) */}
        <div className="space-y-6">
          <PricingSection data={data} isCreateMode={isCreateMode} />
          <PhotosSection isCreateMode={isCreateMode} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button onClick={isCreateMode ? handleCreateSpace : undefined}>
          {isCreateMode ? "Create Space" : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
