interface StatCard {
  statistic: string
  description: string
}

interface TrustIndicatorsSectionProps {
  stats: StatCard[]
}

export function TrustIndicatorsSection({ stats }: TrustIndicatorsSectionProps) {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20 transform hover:scale-105"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 transition-all duration-500" />

              <div className="relative z-10">
                {/* Statistic */}
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    {stat.statistic}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustIndicatorsSection
