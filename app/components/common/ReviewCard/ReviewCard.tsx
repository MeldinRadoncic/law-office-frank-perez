import { colors, spacing, paragraph, radius, shadows } from '@/lib/design-tokens'
import type { ReviewCardProps } from './ReviewCard.types'

export function ReviewCard({
  name,
  rating,
  review,
  date,
  firmResponse,
}: ReviewCardProps) {
  const firstLetter = name.charAt(0).toUpperCase()

  return (
    <div className={`${colors.background.white} ${spacing.padding.md} ${radius.lg} border-2 border-gray-200 ${shadows.md} hover:shadow-lg transition-shadow`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating
                ? `${colors.accent[600]}`
                : `${colors.neutral[500]}`
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className={`${paragraph.light.base} mb-6`}>
        {review}
      </p>

      {/* Firm Response - Optional */}
      {firmResponse && (
        <div className={`${colors.background.light} p-4 ${radius.md} mb-6 border-l-4 border-accent-600`}>
          <p className={`text-sm font-semibold ${colors.accent[600]} mb-2`}>Firm Response:</p>
          <p className={`${paragraph.light.sm} text-gray-700`}>
            {firmResponse}
          </p>
        </div>
      )}

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-full ${colors.background.lighter} flex items-center justify-center font-bold text-sm ${colors.accent[600]}`}
        >
          {firstLetter}
        </div>

        {/* Name & Date */}
        <div className="flex-1">
          <p className="font-semibold text-sm text-gray-900">
            {name}
          </p>
          <p className={`${paragraph.light.sm} ${colors.neutral[500]}`}>
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
