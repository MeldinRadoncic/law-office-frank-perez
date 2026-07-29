import { spacing } from '@/lib/design-tokens'
import type { ContainerProps } from './Container.types'

/**
 * Container Component
 * Max-width wrapper with centering and responsive padding
 * Server component - no interactivity
 */

export function Container({
  children,
  className = '',
  maxWidth = 'lg',
  padding = true,
}: ContainerProps) {
  const maxWidthMap: Record<string, string> = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-full',
    full: 'w-full',
  }

  const baseStyles = `
    mx-auto
    w-full
    ${maxWidthMap[maxWidth]}
    ${padding ? spacing.containerPadding.md : ''}
  `

  return <div className={`${baseStyles} ${className}`}>{children}</div>
}

export default Container
