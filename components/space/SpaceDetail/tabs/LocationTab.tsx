import { TabsContent } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

interface LocationTabProps {
  location: string
  directions?: string
}

export function LocationTab({ location, directions = "5 min walk from Gangnam Station" }: LocationTabProps) {
  return (
    <TabsContent value="location" className="p-6">
      <div className="space-y-4">
        <div className="h-64 bg-muted rounded-lg flex items-center justify-center border border-border">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p>{location}</p>
            <p className="text-sm mt-1">{directions}</p>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
