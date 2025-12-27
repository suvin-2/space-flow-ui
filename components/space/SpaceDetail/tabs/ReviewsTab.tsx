"use client"

import { TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Pencil, Trash2, X, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Review } from "@/lib/types/space"

interface ReviewsTabProps {
  reviews: Review[]
  editingReviewId: number | null
  editingText: string
  editingRating: number
  editingHoverRating: number
  onEditReview: (review: Review) => void
  onUpdateReview: () => void
  onCancelEdit: () => void
  onDeleteReview: (reviewId: number) => void
  onEditingTextChange: (text: string) => void
  onEditingRatingChange: (rating: number) => void
  onEditingHoverRatingChange: (rating: number) => void
  children?: React.ReactNode
}

export function ReviewsTab({
  reviews,
  editingReviewId,
  editingText,
  editingRating,
  editingHoverRating,
  onEditReview,
  onUpdateReview,
  onCancelEdit,
  onDeleteReview,
  onEditingTextChange,
  onEditingRatingChange,
  onEditingHoverRatingChange,
  children,
}: ReviewsTabProps) {
  return (
    <TabsContent value="reviews" className="p-6">
      <div className="space-y-6">
        {/* Reviews Header */}
        <div className="pb-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Guest Reviews</h3>
          <p className="text-sm text-muted-foreground mt-1">127 verified reviews</p>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={review.id} className="space-y-3">
              {editingReviewId === review.id ? (
                /* Edit Mode */
                <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Rating:</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => onEditingRatingChange(i + 1)}
                          onMouseEnter={() => onEditingHoverRatingChange(i + 1)}
                          onMouseLeave={() => onEditingHoverRatingChange(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={cn(
                              "h-5 w-5 transition-colors",
                              (editingHoverRating || editingRating) > i
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    value={editingText}
                    onChange={(e) => onEditingTextChange(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onCancelEdit}
                      className="gap-1"
                    >
                      <X className="h-4 w-4" />
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={onUpdateReview}
                      disabled={!editingText.trim()}
                      className="gap-1"
                    >
                      <Check className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                /* View Mode */
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
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        {review.isOwn && (
                          <div className="flex items-center gap-1 ml-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => onEditReview(review)}
                            >
                              <Pencil className="h-4 w-4 text-muted-foreground" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => onDeleteReview(review.id)}
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
                  </div>
                </div>
              )}
              {index !== reviews.length - 1 && (
                <div className="border-b border-border pt-3" />
              )}
            </div>
          ))}
        </div>

        {/* Review Form (passed as children) */}
        {children}
      </div>
    </TabsContent>
  )
}
