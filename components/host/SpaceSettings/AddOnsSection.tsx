import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { AddOn } from "@/lib/data/space-settings"

interface AddOnsSectionProps {
  addons: AddOn[]
  isCreateMode: boolean
}

export function AddOnsSection({ addons, isCreateMode }: AddOnsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add-on Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isCreateMode && (
          <div className="space-y-3">
            {addons.map((addon, i) => (
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
  )
}
