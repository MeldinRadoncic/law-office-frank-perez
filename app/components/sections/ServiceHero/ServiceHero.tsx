'use client'

import { Container, Heading, Text } from '@/app/components/common'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { spacing, colors, fontSize, paragraph } from '@/lib/design-tokens'
import type { ServiceHeroProps } from './ServiceHero.types'

/**
 * ServiceHero Component
 * Compact hero section for service pages
 * Title + Description only (not full screen)
 * Responsive and centered on all screen sizes
 */

export function ServiceHero({
  headline,
  description,
}: ServiceHeroProps) {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <Container maxWidth="2xl" padding={true}>
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6"
        >
          {/* Headline - Responsive, wraps to 2 lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
            className="w-full max-w-3xl"
          >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${colors.primary[900]} leading-snug tracking-tight`}>
              {headline}
            </h1>
          </motion.div>

          {/* Description - Fully black text using centralized styles */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="max-w-2xl w-full px-2 sm:px-4"
            >
              <p className={`${paragraph.light.base} text-base sm:text-lg md:text-xl`}>
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ServiceHero
