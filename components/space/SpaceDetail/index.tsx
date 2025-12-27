"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronLeft } from "lucide-react"
import { BookingWidget } from "@/components/booking-widget"

import { ImageGallery } from "./ImageGallery"
import { SpaceHeader } from "./SpaceHeader"
import { AboutTab } from "./tabs/AboutTab"
import { AmenitiesTab } from "./tabs/AmenitiesTab"
import { LocationTab } from "./tabs/LocationTab"
import { ReviewsTab } from "./tabs/ReviewsTab"
import { ReviewForm } from "./ReviewForm"

import { SPACE_IMAGES, MOCK_REVIEWS, SPACE_INFO } from "@/lib/data/space-detail"
import type { Review } from "@/lib/types/space"

interface SpaceDetailProps {
  onBack?: () => void
}

export function SpaceDetail({ onBack }: SpaceDetailProps) {
  // Review state
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS)
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)

  // Edit state
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState("")
  const [editingRating, setEditingRating] = useState(5)
  const [editingHoverRating, setEditingHoverRating] = useState(0)

  // Delete confirmation state
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null)

  // Review handlers
  const handleSubmitReview = () => {
    if (!reviewText.trim()) return

    const newReview: Review = {
      id: Date.now(),
      name: "You",
      avatar: "https://picsum.photos/200?random=100",
      rating: rating,
      date: "Just now",
      comment: reviewText.trim(),
      isOwn: true,
    }

    setReviews((prev) => [newReview, ...prev])
    setReviewText("")
    setRating(5)
  }

  const handleEditReview = (review: Review) => {
    setEditingReviewId(review.id)
    setEditingText(review.comment)
    setEditingRating(review.rating)
  }

  const handleUpdateReview = () => {
    if (!editingText.trim() || editingReviewId === null) return

    setReviews((prev) =>
      prev.map((review) =>
        review.id === editingReviewId
          ? { ...review, comment: editingText.trim(), rating: editingRating }
          : review
      )
    )
    setEditingReviewId(null)
    setEditingText("")
    setEditingRating(5)
  }

  const handleCancelEdit = () => {
    setEditingReviewId(null)
    setEditingText("")
    setEditingRating(5)
  }

  const handleDeleteReview = (reviewId: number) => {
    setDeleteConfirmId(reviewId)
  }

  const confirmDelete = () => {
    if (deleteConfirmId === null) return
    setReviews((prev) => prev.filter((review) => review.id !== deleteConfirmId))
    setDeleteConfirmId(null)
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
          {/* Image Gallery */}
          <ImageGallery images={SPACE_IMAGES} />

          {/* Split Layout */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-8">
            {/* Left Content - Space Info */}
            <div className="space-y-6">
              {/* Header */}
              <SpaceHeader info={SPACE_INFO} />

              {/* Tabs */}
              <Card className="border-border overflow-hidden">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full h-auto justify-start bg-transparent border-b border-border rounded-none p-0 gap-0">
                    <TabsTrigger
                      value="about"
                      className="h-12 px-6 rounded-none bg-transparent shadow-none border-0 border-b-2 border-transparent text-muted-foreground transition-all focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:font-semibold hover:text-foreground"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="amenities"
                      className="h-12 px-6 rounded-none bg-transparent shadow-none border-0 border-b-2 border-transparent text-muted-foreground transition-all focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:font-semibold hover:text-foreground"
                    >
                      Amenities
                    </TabsTrigger>
                    <TabsTrigger
                      value="location"
                      className="h-12 px-6 rounded-none bg-transparent shadow-none border-0 border-b-2 border-transparent text-muted-foreground transition-all focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:font-semibold hover:text-foreground"
                    >
                      Location
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="h-12 px-6 rounded-none bg-transparent shadow-none border-0 border-b-2 border-transparent text-muted-foreground transition-all focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:font-semibold hover:text-foreground"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>

                  <AboutTab />
                  <AmenitiesTab />
                  <LocationTab location={SPACE_INFO.location} />

                  {/* Reviews Tab with Form */}
                  <ReviewsTab
                    reviews={reviews}
                    editingReviewId={editingReviewId}
                    editingText={editingText}
                    editingRating={editingRating}
                    editingHoverRating={editingHoverRating}
                    onEditReview={handleEditReview}
                    onUpdateReview={handleUpdateReview}
                    onCancelEdit={handleCancelEdit}
                    onDeleteReview={handleDeleteReview}
                    onEditingTextChange={setEditingText}
                    onEditingRatingChange={setEditingRating}
                    onEditingHoverRatingChange={setEditingHoverRating}
                  >
                    <ReviewForm
                      reviewText={reviewText}
                      rating={rating}
                      hoverRating={hoverRating}
                      onReviewTextChange={setReviewText}
                      onRatingChange={setRating}
                      onHoverRatingChange={setHoverRating}
                      onSubmit={handleSubmitReview}
                    />
                  </ReviewsTab>
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmId !== null} onOpenChange={(open) => !open && setDeleteConfirmId(null)}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Delete Review</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this review? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
