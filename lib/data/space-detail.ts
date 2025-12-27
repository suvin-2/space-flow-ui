import type { Review, SpaceImage, SpaceInfo } from "@/lib/types/space"

export const SPACE_IMAGES: SpaceImage[] = [
  { src: "/modern-photo-studio-main-shot.jpg", alt: "Main space" },
  { src: "/studio-equipment-and-lighting.jpg", alt: "Space view 2" },
  { src: "/studio-seating-area.jpg", alt: "Space view 3" },
  { src: "/studio-white-background.jpg", alt: "Space view 4" },
  { src: "/studio-colorful-backdrop.jpg", alt: "Space view 5" },
]

export const MOCK_REVIEWS: Review[] = [
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

export const SPACE_INFO: SpaceInfo = {
  title: "Modern Photo Studio in Gangnam",
  rating: 4.9,
  reviewCount: 127,
  location: "Gangnam-gu, Seoul",
  capacity: 15,
}
