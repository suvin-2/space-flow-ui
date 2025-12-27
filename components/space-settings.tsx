"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Upload, X } from "lucide-react"

interface SpaceSettingsProps {
  isCreateMode: boolean
  selectedSpace: string
  onSpaceCreate?: (spaceName: string) => void
}

const spaceData: Record<string, any> = {
  "gangnam-studio": {
    name: "Modern Photo Studio in Gangnam",
    description:
      "Welcome to our premium photo studio in the heart of Gangnam. Our space features professional lighting equipment, backdrops, and a spacious shooting area perfect for product photography, portraits, and creative projects.",
    maxCapacity: "15",
    squareFeet: "800",
    address: "123 Gangnam-daero, Gangnam-gu, Seoul",
    city: "Seoul",
    district: "Gangnam-gu",
    directions: "5 min walk from Gangnam Station Exit 3",
    hourlyRate: "20000",
    minHours: "2",
    maxHours: "8",
    advanceBooking: "7",
    openTime: "09:00",
    closeTime: "22:00",
  },
  "hongdae-party": {
    name: "Hongdae Party Room",
    description: "Vibrant party space with sound system and LED lighting in the heart of Hongdae.",
    maxCapacity: "30",
    squareFeet: "1200",
    address: "456 Hongdae-ro, Mapo-gu, Seoul",
    city: "Seoul",
    district: "Mapo-gu",
    directions: "3 min walk from Hongik University Station Exit 9",
    hourlyRate: "35000",
    minHours: "3",
    maxHours: "10",
    advanceBooking: "14",
    openTime: "18:00",
    closeTime: "02:00",
  },
  "itaewon-meeting": {
    name: "Itaewon Meeting Room",
    description: "Professional meeting space with projector and whiteboard in Itaewon business district.",
    maxCapacity: "12",
    squareFeet: "500",
    address: "789 Itaewon-ro, Yongsan-gu, Seoul",
    city: "Seoul",
    district: "Yongsan-gu",
    directions: "Direct access from Itaewon Station Exit 1",
    hourlyRate: "15000",
    minHours: "1",
    maxHours: "6",
    advanceBooking: "3",
    openTime: "08:00",
    closeTime: "20:00",
  },
  "new-space": {
    name: "New Space",
    description: "Your newly created space",
    maxCapacity: "10",
    squareFeet: "600",
    address: "New Address",
    city: "Seoul",
    district: "New District",
    directions: "New directions",
    hourlyRate: "25000",
    minHours: "2",
    maxHours: "8",
    advanceBooking: "7",
    openTime: "09:00",
    closeTime: "22:00",
  },
}

export function SpaceSettings({ isCreateMode, selectedSpace, onSpaceCreate }: SpaceSettingsProps) {
  const data = isCreateMode ? {} : spaceData[selectedSpace] || {}

  const handleCreateSpace = () => {
    if (onSpaceCreate) {
      onSpaceCreate("New Space")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{isCreateMode ? "Create New Space" : "Space Settings"}</h1>
        <p className="text-muted-foreground mt-1">
          {isCreateMode ? "Fill in the details for your new space" : "Configure your space details and pricing"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="space-name">Space Name</Label>
                <Input
                  id="space-name"
                  defaultValue={data.name || ""}
                  placeholder={isCreateMode ? "Enter space name" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  defaultValue={data.description || ""}
                  placeholder={isCreateMode ? "Describe your space..." : ""}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="max-capacity">Max Capacity</Label>
                  <Input
                    id="max-capacity"
                    type="number"
                    defaultValue={data.maxCapacity || ""}
                    placeholder={isCreateMode ? "0" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="square-feet">Square Feet</Label>
                  <Input
                    id="square-feet"
                    type="number"
                    defaultValue={data.squareFeet || ""}
                    placeholder={isCreateMode ? "0" : ""}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Input
                  id="address"
                  defaultValue={data.address || ""}
                  placeholder={isCreateMode ? "Enter full address" : ""}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue={data.city || ""} placeholder={isCreateMode ? "City" : ""} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    defaultValue={data.district || ""}
                    placeholder={isCreateMode ? "District" : ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="directions">Directions / Nearby Landmarks</Label>
                <Textarea
                  id="directions"
                  rows={2}
                  defaultValue={data.directions || ""}
                  placeholder={isCreateMode ? "e.g., 5 min walk from subway station..." : ""}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add-on Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isCreateMode && (
                <div className="space-y-3">
                  {[
                    { name: "Professional Lighting Kit", price: "5,000" },
                    { name: "Cleaning Fee", price: "10,000" },
                    { name: "Background Setup", price: "8,000" },
                    { name: "Equipment Storage", price: "3,000" },
                  ].map((addon, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Input defaultValue={addon.name} className="flex-1" placeholder="Add-on name" />
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">₩</span>
                        <Input defaultValue={addon.price} className="w-28" placeholder="Price" />
                      </div>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <Button variant="outline" className="w-full bg-transparent">
                + Add New Option
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Span 1) */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hourly-rate">Hourly Rate (₩)</Label>
                <Input
                  id="hourly-rate"
                  type="number"
                  defaultValue={data.hourlyRate || ""}
                  placeholder={isCreateMode ? "0" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="min-hours">Minimum Hours</Label>
                <Input
                  id="min-hours"
                  type="number"
                  defaultValue={data.minHours || ""}
                  placeholder={isCreateMode ? "0" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-hours">Maximum Hours</Label>
                <Input
                  id="max-hours"
                  type="number"
                  defaultValue={data.maxHours || ""}
                  placeholder={isCreateMode ? "0" : ""}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="advance-booking">Advance Booking (days)</Label>
                <Input
                  id="advance-booking"
                  type="number"
                  defaultValue={data.advanceBooking || ""}
                  placeholder={isCreateMode ? "0" : ""}
                />
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Operating Hours</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="open-time" className="text-xs">
                      Open
                    </Label>
                    <Input id="open-time" type="time" defaultValue={data.openTime || ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="close-time" className="text-xs">
                      Close
                    </Label>
                    <Input id="close-time" type="time" defaultValue={data.closeTime || ""} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium mb-1">Click to upload</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              </div>

              {!isCreateMode && (
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative aspect-video bg-muted rounded-md overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/30" />
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
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
