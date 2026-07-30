import Link from 'next/link'

interface AboutSectionProps {
  title: string
  foundersName: string
  foundersTitle: string
  description: string
  image: string
  ctaText: string
  ctaHref: string
  backgroundColor?: 'white' | 'light'
}

export function AboutSection({
  title,
  foundersName,
  foundersTitle,
  description,
  image,
  ctaText,
  ctaHref,
  backgroundColor = 'white',
}: AboutSectionProps) {
  const bgClass = backgroundColor === 'light' ? 'bg-gray-50' : 'bg-white'

  return (
    <section id="about" className={`w-full py-20 md:py-24 lg:py-32 ${bgClass} relative overflow-hidden`}>
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-slate-700 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={foundersName}
                  className="w-full h-auto object-cover aspect-square md:aspect-auto max-w-md"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {title}
            </h2>

            {/* Attorney Name & Title */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {foundersName}
              </p>
              <p className="text-lg text-gray-600 font-medium">
                {foundersTitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Credentials */}
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-semibold text-gray-900">Former Dallas Police Officer</p>
                  <p className="text-gray-600 text-sm">Established 1982</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-gray-900">Former Assistant District Attorney</p>
                  <p className="text-gray-600 text-sm">Dallas County</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-semibold text-gray-900">40+ Years of Experience</p>
                  <p className="text-gray-600 text-sm">Proven track record of successful cases</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
