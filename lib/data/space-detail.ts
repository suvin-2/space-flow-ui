import type { Review, SpaceImage, SpaceInfo } from "@/lib/types/space"

export const SPACE_IMAGES: SpaceImage[] = [
  { src: "https://picsum.photos/1200/800?random=10", alt: "Main space" },
  { src: "https://picsum.photos/800/600?random=11", alt: "Space view 2" },
  { src: "https://picsum.photos/800/600?random=12", alt: "Space view 3" },
  { src: "https://picsum.photos/800/600?random=13", alt: "Space view 4" },
  { src: "https://picsum.photos/800/600?random=14", alt: "Space view 5" },
]

export const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Kim",
    avatar: "https://picsum.photos/200?random=101",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely fantastic studio! The lighting equipment was top-notch and the space was incredibly clean. Perfect for our product shoot. Will definitely book again!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://picsum.photos/200?random=102",
    rating: 5,
    date: "1 month ago",
    comment:
      "Great location and easy to access. The host was very responsive and helpful. The studio had everything we needed for our fashion shoot. Highly recommend!",
  },
  {
    id: 3,
    name: "Jessica Park",
    avatar: "https://picsum.photos/200?random=103",
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
