'use client'

/**
 * Centralized Animation Hook using Framer Motion
 * Single source of truth for ALL animations across the website
 * Use this hook in any component for consistent animations
 */

import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Animation variants for different use cases
 * Change these values here and it affects the entire website!
 */
export const animationVariants = {
  // Section headings
  sectionHeading: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },

  // Cards and list items
  card: {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1, // 100ms between items
      },
    }),
  },

  // Images sliding from left
  imageLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  },

  // Images sliding from right
  imageRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  },

  // Text content
  textBlock: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },

  // Buttons
  button: {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  },
}

/**
 * Hook to use animations in any component
 * Returns: ref (for intersection observer), inView (boolean)
 * Usage:
 *   const { ref, inView } = useScrollAnimation()
 *   <motion.div ref={ref} variants={animationVariants.card} initial="hidden" animate={inView ? "visible" : "hidden"} />
 */
export function useScrollAnimation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return { ref, inView }
}

/**
 * Global animation settings
 * Change these to affect ALL animations on the entire website
 */
export const animationConfig = {
  // Stagger delay between items (in seconds)
  staggerDelay: 0.1,

  // Standard animation duration
  duration: 0.6,

  // Image animation duration
  imageDuration: 0.7,

  // Easing function
  ease: 'easeOut' as const,

  // Hover scale effect
  hoverScale: 1.05,

  // Margin for intersection observer (when animation triggers)
  intersectionMargin: '0px 0px -100px 0px',
}
