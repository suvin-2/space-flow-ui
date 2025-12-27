"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReviewFormProps {
  reviewText: string
  rating: number
  hoverRating: number
  onReviewTextChange: (text: string) => void
  onRatingChange: (rating: number) => void
  onHoverRatingChange: (rating: number) => void
  onSubmit: () => void
}

export function ReviewForm({
  reviewText,
  rating,
  hoverRating,
  onReviewTextChange,
  onRatingChange,
  onHoverRatingChange,
  onSubmit,
}: ReviewFormProps) {
  return (
    <div className="pt-6 border-t border-border space-y-4">
      <h4 className="font-semibold text-foreground">Write a Review</h4>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">Your rating:</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onRatingChange(i + 1)}
              onMouseEnter={() => onHoverRatingChange(i + 1)}
              onMouseLeave={() => onHoverRatingChange(0)}
              className="focus:outline-none"
            >
              <Star
                className={cn(
                  "h-6 w-6 transition-colors",
                  (hoverRating || rating) > i
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground"
                )}
              />
            </button>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          ({hoverRating || rating}/5)
        </span>
      </div>
      <Textarea
        placeholder="Share your experience with this space..."
        className="min-h-[120px] resize-none"
        value={reviewText}
        onChange={(e) => onReviewTextChange(e.target.value)}
      />
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!reviewText.trim()}
          className="gap-2"
        >
          <Star className="h-4 w-4" />
          Submit Review
        </Button>
      </div>
    </div>
  )
}
