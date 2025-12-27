import { TabsContent } from "@/components/ui/tabs"
import { Wifi, Car, Wind, Coffee, Projector, Users } from "lucide-react"

const AMENITIES = [
  { icon: Wifi, label: "High-speed WiFi" },
  { icon: Car, label: "Free Parking" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Coffee, label: "Coffee & Tea" },
  { icon: Projector, label: "Equipment Included" },
  { icon: Users, label: "Waiting Area" },
]

export function AmenitiesTab() {
  return (
    <TabsContent value="amenities" className="p-6">
      <div className="grid grid-cols-2 gap-4">
        {AMENITIES.map((amenity) => (
          <div key={amenity.label} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <amenity.icon className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-medium text-sm">{amenity.label}</span>
          </div>
        ))}
      </div>
    </TabsContent>
  )
}
