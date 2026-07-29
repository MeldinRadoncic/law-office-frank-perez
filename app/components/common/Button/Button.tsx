'use client'

import { colors, transitions, radius } from '@/lib/design-tokens'
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types'

/**
 * Button Component
 * Reusable button for all CTAs, forms, and actions
 * Supports multiple variants and sizes
 */

function getVariantStyles(variant: ButtonVariant): string {
  const variants: Record<ButtonVariant, string> = {
    // Primary: Navy blue button
    primary: `${colors.background.dark} text-white hover:opacity-90 border-2 border-blue-900`,

    // Accent: Navy blue button (main CTA)
    accent: `bg-blue-900 text-white hover:bg-blue-950 border-2 border-blue-900`,

    // Secondary: Navy border with navy text
    secondary: `bg-white text-blue-900 hover:bg-blue-50 border-2 border-blue-900`,

    // Outline: Transparent with navy border
    outline: `bg-transparent text-blue-900 hover:bg-blue-50 border-2 border-blue-900`,
  }

  return variants[variant]
}

function getSizeStyles(size: ButtonSize): string {
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return sizes[size]
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  asLink = false,
  href = '#',
  target,
  rel,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    font-semibold
    cursor-pointer
    ${radius.lg}
    ${transitions.normal}
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-blue-900
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:pointer-events-none
  `

  const variantStyles = getVariantStyles(variant)
  const sizeStyles = getSizeStyles(size)
  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`

  // Render as link if asLink is true
  if (asLink) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </a>
    )
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {children}
    </button>
  )
}

export default Button
