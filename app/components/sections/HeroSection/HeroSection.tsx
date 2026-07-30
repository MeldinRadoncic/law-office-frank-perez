'use client'

import Link from 'next/link'
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
  ctaHref,
  ctaPhone,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* LAYER 1: Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* LAYER 2: White Overlay (0.4 opacity) */}
      <div className="absolute inset-0 w-full h-full bg-white/40 z-10" />

      {/* LAYER 3: Content (Not affected by overlay opacity) */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center py-16 sm:py-20">
          {/* Tagline Badge */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-900 text-xs sm:text-sm font-semibold whitespace-nowrap">
              {tagline}
            </span>
          </div>

          {/* Main Headline - Using Reusable Heading Component */}
          <Heading
            level="h1"
            size="5xl"
            color="primary"
            className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            {headline}
          </Heading>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 mx-auto leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <Link
              href={ctaHref}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-base sm:text-lg ${transitions.normal} hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-600/50 text-center`}
            >
              {ctaText}
            </Link>
            <a
              href={`tel:${ctaPhone}`}
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-bold text-base sm:text-lg ${transitions.normal} hover:bg-blue-50 text-center`}
            >
              {ctaPhone}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-blue-600 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
