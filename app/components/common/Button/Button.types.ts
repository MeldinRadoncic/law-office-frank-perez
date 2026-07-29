/**
 * Button Component Types
 */

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
  asLink?: boolean
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}
