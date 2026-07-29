'use client'

import { transitions, colors, spacing, fontSize } from '@/lib/design-tokens'

interface LoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Loading({
  message = 'Sending your message...',
  size = 'md',
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  }

  return (
    <div className={`flex flex-col items-center justify-center ${spacing.gap.md}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`absolute ${dotSizeClasses[size]} ${colors.accent[600]} rounded-full ${transitions.normal}`}
            style={{
              top: '50%',
              left: '50%',
              animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
              transform: `rotate(${i * 120}deg) translateY(-${size === 'sm' ? 12 : size === 'md' ? 16 : 20}px)`,
            }}
          />
        ))}
      </div>
      {message && (
        <p className={`${colors.neutral[600]} ${fontSize.sm} text-center`}>{message}</p>
      )}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Loading
