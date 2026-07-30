interface Recognition {
  title: string
  year: string
}

interface RecognitionsSectionProps {
  recognitions: Recognition[]
  title: string
  subtitle: string
}

export function RecognitionsSection({
  recognitions,
  title,
  subtitle,
}: RecognitionsSectionProps) {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Recognitions Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="group relative flex gap-8 items-start p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-500"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    ✓
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    {recognition.year}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center text-blue-400 group-hover:text-blue-600 transition-colors">
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-slate-950 to-blue-950">
            <p className="text-white text-xl font-bold leading-relaxed">
              "With over 40 years of experience, Frank Perez has the expertise and knowledge to win your case and prevail in circumstances where less accomplished attorneys will fail."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecognitionsSection
