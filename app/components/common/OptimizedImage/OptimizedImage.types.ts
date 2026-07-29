/**
 * OptimizedImage Component Types
 */

export interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  objectPosition?: string
}
