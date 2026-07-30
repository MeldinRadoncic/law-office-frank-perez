'use client'

import { motion } from 'framer-motion'
import { Heading } from '@/app/components/common/Heading'
import { spacing, responsive, transitions } from '@/lib/design-tokens'

interface HeroSectionProps {
  headline: string
  tagline: string
  description: string
  ctaText: string
  ctaHref: string
  ctaPhone: string
  backgroundImage: string
}

export function HeroSection({
  headline,
  tagline,
  description,
  ctaText,
  ctaPhone,
  backgroundImage,
}: HeroSectionProps) {
  // Instant animations - appear RIGHT NOW
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0,
      },
    },
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* LAYER 1: Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* LAYER 2: White Overlay (0.4 opacity) */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-white/40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6 }}
      />

      {/* LAYER 3: Content - VISIBLE INSTANTLY */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center py-16 sm:py-20">
          {/* Tagline Badge */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-900 text-xs sm:text-sm font-semibold whitespace-nowrap hover:scale-105 transition-transform">
              {tagline}
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <Heading
              level="h1"
              size="5xl"
              color="primary"
              className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              {headline}
            </Heading>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 mx-auto leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTA Buttons - NO ACTION - VISIBLE NOW */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <div className="hover:scale-105 transition-transform">
              <button
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-base sm:text-lg ${transitions.normal} hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-600/50 text-center`}
              >
                {ctaText}
              </button>
            </div>

            <div className="hover:scale-105 transition-transform">
              <button
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-bold text-base sm:text-lg ${transitions.normal} hover:bg-blue-50 text-center`}
              >
                {ctaPhone}
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-blue-600 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
