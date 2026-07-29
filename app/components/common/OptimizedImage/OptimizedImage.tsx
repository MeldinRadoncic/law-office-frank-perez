import Image from 'next/image'
import type { OptimizedImageProps } from './OptimizedImage.types'

/**
 * OptimizedImage Component
 * Wrapper around Next.js Image for automatic optimization
 * Handles responsive sizing, lazy loading, and format conversion
 * Server component - no interactivity
 */

export function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 630,
  priority = false,
  className = '',
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  const objectFitClass: Record<string, string> = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    'scale-down': 'object-scale-down',
  }

  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={90}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className={`w-full h-auto ${objectFitClass[objectFit]}`}
        style={{
          objectPosition: objectPosition,
        }}
      />
    </div>
  )
}

export default OptimizedImage
