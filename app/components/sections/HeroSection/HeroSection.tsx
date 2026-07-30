'use client'

import Link from 'next/link'

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="mb-4 inline-block">
          <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm">
            {tagline}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            {ctaText}
          </Link>
          <a
            href={`tel:${ctaPhone}`}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
          >
            {ctaPhone}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
