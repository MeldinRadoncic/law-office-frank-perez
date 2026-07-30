interface ValuePoint {
  icon: string
  title: string
  description: string
}

interface StrategicApproachSectionProps {
  title: string
  subtitle: string
  mainDescription: string
  values: ValuePoint[]
}

export function StrategicApproachSection({
  title,
  subtitle,
  mainDescription,
  values,
}: StrategicApproachSectionProps) {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-blue-600 font-semibold text-lg mb-3">{subtitle}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            {mainDescription}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group flex gap-6 p-8 rounded-2xl border border-gray-200 hover:border-blue-400/50 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrategicApproachSection
