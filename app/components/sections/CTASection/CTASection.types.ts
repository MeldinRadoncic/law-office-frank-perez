/**
 * CTASection Component Types
 * Using centralized design tokens for colors, spacing, radius, shadows
 */

export interface CTAOption {
  id: string
  icon: string
  text: string
  href: string
  label: string
}

export interface CTASectionProps {
  title: string
  subtitle: string
  description: string
  disclaimer?: string
}
