export interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
  isOwn?: boolean
}

export interface SpaceImage {
  src: string
  alt: string
}

export interface SpaceInfo {
  title: string
  rating: number
  reviewCount: number
  location: string
  capacity: number
}

export interface Amenity {
  icon: React.ComponentType<{ className?: string }>
  label: string
}
