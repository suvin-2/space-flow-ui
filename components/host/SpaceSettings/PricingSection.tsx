import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { SpaceSettingsData } from "@/lib/data/space-settings"

interface PricingSectionProps {
  data: Partial<SpaceSettingsData>
  isCreateMode: boolean
}

export function PricingSection({ data, isCreateMode }: PricingSectionProps) {
  return (
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
  )
}
