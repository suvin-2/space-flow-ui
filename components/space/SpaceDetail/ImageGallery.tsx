"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SpaceImage } from "@/lib/types/space"

interface ImageGalleryProps {
  images: SpaceImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* Desktop Grid Layout (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[450px] rounded-2xl overflow-hidden mb-8 border border-border">
        <div className="col-span-2 row-span-2 bg-muted">
          <img
            src={images[0]?.src || "/placeholder.svg"}
            alt={images[0]?.alt}
            className="w-full h-full object-cover"
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="col-span-1 row-span-1 bg-muted">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel (shown only on mobile) */}
      <div className="md:hidden mb-8">
        <div className="relative rounded-2xl overflow-hidden border border-border">
          <div className="aspect-[4/3] bg-muted">
            <img
              src={images[currentImageIndex]?.src || "/placeholder.svg"}
              alt={images[currentImageIndex]?.alt}
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
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/60"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
