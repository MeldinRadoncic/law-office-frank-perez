/**
 * Heading Component Types
 */

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
export type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
export type HeadingColor = 'primary' | 'secondary' | 'accent'

export interface HeadingProps {
  children: React.ReactNode
  level?: HeadingLevel
  size?: HeadingSize
  color?: HeadingColor
  className?: string
  align?: 'left' | 'center' | 'right'
}
