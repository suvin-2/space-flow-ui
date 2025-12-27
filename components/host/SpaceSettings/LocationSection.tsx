import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SpaceSettingsData } from "@/lib/data/space-settings"

interface LocationSectionProps {
  data: Partial<SpaceSettingsData>
  isCreateMode: boolean
}

export function LocationSection({ data, isCreateMode }: LocationSectionProps) {
  return (
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
            <Input
              id="city"
              defaultValue={data.city || ""}
              placeholder={isCreateMode ? "City" : ""}
            />
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
  )
}
