import { Star, MapPin, Users } from "lucide-react"
import type { SpaceInfo } from "@/lib/types/space"

interface SpaceHeaderProps {
  info: SpaceInfo
}

export function SpaceHeader({ info }: SpaceHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {info.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">{info.rating}</span>
              <span>({info.reviewCount} reviews)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{info.location}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>Up to {info.capacity} people</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
