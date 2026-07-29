import { radius, shadows } from '@/lib/design-tokens'
import type { CardProps } from './Card.types'

/**
 * Card Component
 * Reusable card container for content grouping
 * Server component - no interactivity
 */

export function Card({
  children,
  className = '',
  hasBorder = true,
  hasShadow = true,
  borderColor = 'gold',
  padding = 'md',
}: CardProps) {
  const paddingStyles: Record<string, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const borderStyles: Record<string, string> = {
    gold: 'border-t-4 border-amber-600',
    blue: 'border-l-4 border-blue-900',
    none: '',
  }

  const baseStyles = `
    bg-white
    ${radius.lg}
    ${hasShadow ? shadows.md : ''}
    ${paddingStyles[padding]}
    ${hasBorder ? borderStyles[borderColor] : ''}
    transition-shadow
    duration-300
    hover:shadow-lg
  `

  return <div className={`${baseStyles} ${className}`}>{children}</div>
}

export default Card
