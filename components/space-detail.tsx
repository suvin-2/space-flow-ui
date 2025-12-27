"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { BookingWidget } from "./booking-widget"
import { Star, MapPin, Users, Wifi, Car, Wind, Coffee, Projector, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { cn } from "@/lib/utils"

interface SpaceDetailProps {
  onBack?: () => void
}

const SPACE_IMAGES = [
  { src: "/modern-photo-studio-main-shot.jpg", alt: "Main space" },
  { src: "/studio-equipment-and-lighting.jpg", alt: "Space view 2" },
  { src: "/studio-seating-area.jpg", alt: "Space view 3" },
  { src: "/studio-white-background.jpg", alt: "Space view 4" },
  { src: "/studio-colorful-backdrop.jpg", alt: "Space view 5" },
]

const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Sarah Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely fantastic studio! The lighting equipment was top-notch and the space was incredibly clean. Perfect for our product shoot. Will definitely book again!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "1 month ago",
    comment:
      "Great location and easy to access. The host was very responsive and helpful. The studio had everything we needed for our fashion shoot. Highly recommend!",
  },
  {
    id: 3,
    name: "Jessica Park",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 month ago",
    comment:
      "Very professional setup with great natural light. Only minor issue was parking was a bit tight, but overall an excellent experience for content creation.",
  },
]

export function SpaceDetail({ onBack }: SpaceDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % SPACE_IMAGES.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + SPACE_IMAGES.length) % SPACE_IMAGES.length)
  }

  return (
    <div className="bg-gradient-to-b from-blue-50/30 to-white min-h-screen">
      {/* Back Button */}
      {onBack && (
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to search
          </Button>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Grid Layout (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[450px] rounded-2xl overflow-hidden mb-8 border border-border">
            <div className="col-span-2 row-span-2 bg-muted">
              <img
                src={SPACE_IMAGES[0].src || "/placeholder.svg"}
                alt={SPACE_IMAGES[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-muted">
              <img
                src={SPACE_IMAGES[1].src || "/placeholder.svg"}
                alt={SPACE_IMAGES[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-muted">
              <img
                src={SPACE_IMAGES[2].src || "/placeholder.svg"}
                alt={SPACE_IMAGES[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-muted">
              <img
                src={SPACE_IMAGES[3].src || "/placeholder.svg"}
                alt={SPACE_IMAGES[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 bg-muted">
              <img
                src={SPACE_IMAGES[4].src || "/placeholder.svg"}
                alt={SPACE_IMAGES[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Carousel (shown only on mobile) */}
          <div className="md:hidden mb-8">
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[4/3] bg-muted">
                <img
                  src={SPACE_IMAGES[currentImageIndex].src || "/placeholder.svg"}
                  alt={SPACE_IMAGES[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {SPACE_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/60",
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-8">
            {/* Left Content - Space Info */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Modern Photo Studio in Gangnam
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-foreground">4.9</span>
                        <span>(127 reviews)</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>Gangnam-gu, Seoul</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        <span>Up to 15 people</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Card className="border-border">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                    <TabsTrigger
                      value="about"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="amenities"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Amenities
                    </TabsTrigger>
                    <TabsTrigger
                      value="location"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Location
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="p-6 space-y-4">
                    <div className="space-y-4">
                      <p className="text-foreground leading-relaxed">
                        Professional photo studio in the heart of Gangnam, perfect for commercial shoots, content
                        creation, and creative projects. Features multiple backdrop options, professional lighting
                        equipment, and a comfortable preparation area.
                      </p>
                      <p className="text-foreground leading-relaxed">
                        The studio includes natural light from large windows combined with professional studio lighting.
                        Ideal for fashion photography, product shoots, and video production. Easy access to public
                        transportation and parking available.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Wifi, label: "High-speed WiFi" },
                        { icon: Car, label: "Free Parking" },
                        { icon: Wind, label: "Air Conditioning" },
                        { icon: Coffee, label: "Coffee & Tea" },
                        { icon: Projector, label: "Equipment Included" },
                        { icon: Users, label: "Waiting Area" },
                      ].map((amenity) => (
                        <div key={amenity.label} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <amenity.icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="p-6">
                    <div className="space-y-4">
                      <div className="h-64 bg-muted rounded-lg flex items-center justify-center border border-border">
                        <div className="text-center text-muted-foreground">
                          <MapPin className="h-12 w-12 mx-auto mb-2" />
                          <p>Gangnam-gu, Seoul</p>
                          <p className="text-sm mt-1">5 min walk from Gangnam Station</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="p-6">
                    <div className="space-y-6">
                      {/* Write a Review Button */}
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">Guest Reviews</h3>
                          <p className="text-sm text-muted-foreground mt-1">127 verified reviews</p>
                        </div>
                        <Button variant="outline" className="gap-2 bg-transparent">
                          <Star className="h-4 w-4" />
                          Write a Review
                        </Button>
                      </div>

                      {/* Reviews List */}
                      <div className="space-y-6">
                        {MOCK_REVIEWS.map((review) => (
                          <div key={review.id} className="space-y-3">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-semibold text-foreground">{review.name}</p>
                                    <p className="text-xs text-muted-foreground">{review.date}</p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
                              </div>
                            </div>
                            {review.id !== MOCK_REVIEWS[MOCK_REVIEWS.length - 1].id && (
                              <div className="border-b border-border pt-3" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Right Sidebar - Sticky Booking Panel */}
            <div className="lg:sticky lg:top-4 h-fit">
              <BookingWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
