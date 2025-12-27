"use client"

import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { Star, MapPin, Users, Clock } from "lucide-react"

const SPACES = [
  {
    id: 1,
    name: "Modern Meeting Room - Gangnam",
    image: "/modern-photo-studio-main-shot.jpg",
    price: 25000,
    rating: 4.9,
    reviews: 127,
    location: "Gangnam-gu, Seoul",
    capacity: 15,
    category: "Meeting Room",
  },
  {
    id: 2,
    name: "Professional Photo Studio",
    image: "/studio-equipment-and-lighting.jpg",
    price: 35000,
    rating: 4.8,
    reviews: 89,
    location: "Hongdae, Seoul",
    capacity: 10,
    category: "Photo Studio",
  },
  {
    id: 3,
    name: "Event Space with Kitchen",
    image: "/studio-seating-area.jpg",
    price: 40000,
    rating: 5.0,
    reviews: 64,
    location: "Itaewon, Seoul",
    capacity: 20,
    category: "Party Room",
  },
  {
    id: 4,
    name: "Dance Practice Studio",
    image: "/studio-white-background.jpg",
    price: 20000,
    rating: 4.7,
    reviews: 156,
    location: "Sinchon, Seoul",
    capacity: 12,
    category: "Dance Studio",
  },
  {
    id: 5,
    name: "Executive Conference Room",
    image: "/studio-colorful-backdrop.jpg",
    price: 50000,
    rating: 4.9,
    reviews: 43,
    location: "Yeouido, Seoul",
    capacity: 25,
    category: "Meeting Room",
  },
  {
    id: 6,
    name: "Creative Workshop Space",
    image: "/modern-photo-studio-with-professional-lighting.jpg",
    price: 30000,
    rating: 4.8,
    reviews: 92,
    location: "Mapo-gu, Seoul",
    capacity: 18,
    category: "Workshop",
  },
]

interface SpaceListSectionProps {
  onSelectSpace: () => void
  isLoading?: boolean
}

function SpaceCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border rounded-xl">
      <div className="h-48 w-full bg-muted animate-shimmer rounded-t-xl" />
      <div className="p-6 space-y-3">
        <div className="h-5 w-3/4 bg-muted animate-shimmer rounded" />
        <div className="h-4 w-1/2 bg-muted animate-shimmer rounded" />
        <div className="h-4 w-2/3 bg-muted animate-shimmer rounded" />
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="h-6 w-24 bg-muted animate-shimmer rounded" />
          <div className="h-9 w-20 bg-muted animate-shimmer rounded" />
        </div>
      </div>
    </Card>
  )
}

export function SpaceListSection({ onSelectSpace, isLoading = false }: SpaceListSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Available Spaces</h2>
            {isLoading ? (
              <Skeleton className="h-4 w-48 mt-1" />
            ) : (
              <p className="text-muted-foreground mt-1">{SPACES.length} spaces available in your area</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <SpaceCardSkeleton key={i} />)
            : SPACES.map((space, index) => (
                <Card
                  key={space.id}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-border rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards ${
                    index === 0
                      ? "delay-0"
                      : index === 1
                        ? "delay-100"
                        : index === 2
                          ? "delay-200"
                          : index === 3
                            ? "delay-300"
                            : index === 4
                              ? "delay-[400ms]"
                              : "delay-[500ms]"
                  }`}
                  onClick={onSelectSpace}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={space.image || "/placeholder.svg"}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-card/95 text-foreground border-border">
                      {space.category}
                    </Badge>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg text-foreground leading-tight line-clamp-2">{space.name}</h3>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-foreground">{space.rating}</span>
                        <span>({space.reviews})</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Up to {space.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{space.location}</span>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">₩{space.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground font-medium">/ hour</span>
                      </div>
                      <Button size="sm" variant="outline" className="font-semibold bg-transparent">
                        <Clock className="h-4 w-4 mr-1" />
                        Book
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}
