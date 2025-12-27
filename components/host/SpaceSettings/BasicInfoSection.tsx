import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SpaceSettingsData } from "@/lib/data/space-settings"

interface BasicInfoSectionProps {
  data: Partial<SpaceSettingsData>
  isCreateMode: boolean
}

export function BasicInfoSection({ data, isCreateMode }: BasicInfoSectionProps) {
  return (
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
  )
}
