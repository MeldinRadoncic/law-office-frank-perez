import { colors, fontSize } from '@/lib/design-tokens'
import type { HeadingProps, HeadingLevel, HeadingSize, HeadingColor } from './Heading.types'

/**
 * Heading Component
 * Semantic heading element with responsive sizing and colors
 * Server component - no interactivity
 */

function getHeadingElement(level: HeadingLevel): React.ElementType {
  const elements: Record<HeadingLevel, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  }
  return elements[level]
}

function getFontSizeClass(size: HeadingSize): string {
  const sizes: Record<HeadingSize, string> = {
    sm: fontSize.lg,
    md: fontSize['2xl'],
    lg: fontSize['3xl'],
    xl: fontSize['4xl'],
    '2xl': fontSize['4xl'],
    '3xl': fontSize['5xl'],
    '4xl': fontSize['5xl'],
    '5xl': `${fontSize['5xl']} md:text-6xl lg:text-7xl`,
  }
  return sizes[size]
}

function getColorClass(color: HeadingColor): string {
  const colorClasses: Record<HeadingColor, string> = {
    primary: colors.primary[900],
    secondary: colors.neutral[700],
    accent: colors.accent[600],
  }
  return colorClasses[color]
}

function getAlignClass(level?: string): string {
  if (level === 'h2' || level === 'h3' || level === 'h4') {
    return 'text-center'
  }
  return ''
}

export function Heading({
  children,
  level = 'h2',
  size = 'md',
  color = 'primary',
  className = '',
}: HeadingProps) {
  const HeadingElement = getHeadingElement(level)
  const fontSizeClass = getFontSizeClass(size)
  const colorClass = getColorClass(color)
  const alignClass = getAlignClass(level)

  const baseStyles = `
    font-bold
    leading-tight
    tracking-tight
    ${fontSizeClass}
    ${colorClass}
    ${alignClass}
  `

  return (
    <HeadingElement className={`${baseStyles} ${className}`}>
      {children}
    </HeadingElement>
  )
}

export default Heading
