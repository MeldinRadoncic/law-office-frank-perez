import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle: string
  description: string
}

export function CTASection({ title, subtitle, description }: CTASectionProps) {
  return (
    <section id="contact" className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950" />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,rgba(59,130,246,.5)_1px,transparent_1px),linear-gradient(rgba(59,130,246,.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle Badge */}
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
            {subtitle}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="tel:+12148289911"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Call (214) 828-9911
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/+12148289911"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
          >
            WhatsApp Message
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            ✓ Available 24/7 for Emergencies | ✓ Free Initial Consultation | ✓ Immediate Response
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
