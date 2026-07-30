interface PracticeArea {
  icon: string
  title: string
  description: string
  link: string
}

interface PracticeAreasSectionProps {
  practiceAreas: PracticeArea[]
  title: string
  description: string
  backgroundColor?: 'light' | 'dark' | 'white'
}

export function PracticeAreasSection({
  practiceAreas,
  title,
  description,
  backgroundColor = 'light',
}: PracticeAreasSectionProps) {
  const bgClass = {
    light: 'bg-gradient-to-b from-white to-gray-50',
    dark: 'bg-slate-900',
    white: 'bg-white',
  }[backgroundColor]

  return (
    <section id="practice-areas" className={`w-full py-20 md:py-24 lg:py-32 ${bgClass} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practiceAreas.map((area, index) => (
            <a
              key={index}
              href={area.link}
              className="group relative p-8 md:p-10 rounded-2xl bg-white border border-gray-200 hover:border-blue-500/50 shadow-md hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
