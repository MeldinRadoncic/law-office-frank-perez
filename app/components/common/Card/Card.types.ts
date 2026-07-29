/**
 * Card Component Types
 */

export interface CardProps {
  children: React.ReactNode
  className?: string
  hasBorder?: boolean
  hasShadow?: boolean
  borderColor?: 'gold' | 'blue' | 'none'
  padding?: 'sm' | 'md' | 'lg'
}
