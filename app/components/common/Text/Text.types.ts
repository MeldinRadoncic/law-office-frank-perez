/**
 * Text Component Types
 */

export type TextVariant = 'body' | 'secondary' | 'muted' | 'accent'
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

export interface TextProps {
  children: React.ReactNode
  variant?: TextVariant
  size?: TextSize
  className?: string
  asSpan?: boolean
}
