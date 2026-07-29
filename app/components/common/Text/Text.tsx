import { colors, fontSize } from '@/lib/design-tokens'
import type { TextProps, TextVariant, TextSize } from './Text.types'

/**
 * Text Component
 * Flexible text/paragraph component with variants and sizes
 * Server component - no interactivity
 */

function getVariantColor(variant: TextVariant): string {
  const variants: Record<TextVariant, string> = {
    body: colors.primary[700],
    secondary: colors.neutral[700],
    muted: colors.neutral[600],
    accent: colors.accent[600],
  }
  return variants[variant]
}

function getFontSize(size: TextSize): string {
  const sizes: Record<TextSize, string> = {
    xs: fontSize.xs,
    sm: fontSize.sm,
    base: fontSize.base,
    lg: fontSize.lg,
    xl: fontSize.xl,
  }
  return sizes[size]
}

export function Text({
  children,
  variant = 'body',
  size = 'base',
  className = '',
  asSpan = false,
}: TextProps) {
  const colorClass = getVariantColor(variant)
  const sizeClass = getFontSize(size)

  const baseStyles = `
    ${sizeClass}
    ${colorClass}
    leading-relaxed
  `

  const Element = asSpan ? 'span' : 'p'

  return <Element className={`${baseStyles} ${className}`}>{children}</Element>
}

export default Text
