import { Container, Heading, Text } from '@/app/components/common'
import { colors, spacing, paragraph, radius, shadows, responsive } from '@/lib/design-tokens'
import type { ProcessTimelineSectionProps } from './ProcessTimelineSection.types'

export function ProcessTimelineSection({
  title,
  subtitle,
  steps,
}: ProcessTimelineSectionProps) {
  return (
    <section className={`${colors.background.light} py-16 md:py-24 lg:py-32`}>
      <Container>
        <div className={`${responsive.centerContent} mb-12 md:mb-16`}>
          <Heading level="h2" size="2xl" color="primary" align="center" className="mb-4 lg:text-left">
            {title}
          </Heading>
          {subtitle && (
            <Text className={`${paragraph.light.base} max-w-2xl mx-auto lg:mx-0`}>
              {subtitle}
            </Text>
          )}
        </div>

        {/* Desktop Timeline */}
        <div className={`hidden md:grid grid-cols-1 md:grid-cols-5 ${spacing.gap.md}`}>
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className={`${colors.background.white} ${radius.lg} ${spacing.padding.md} text-center ${shadows.sm} hover:${shadows.md} transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`w-16 h-16 mx-auto mb-4 ${radius.full} ${colors.background.lighter} flex items-center justify-center border-2 ${colors.accent[600]} border-opacity-20`}>
                  <span className={`text-3xl font-bold ${colors.accent[600]}`}>{step.number}</span>
                </div>
                <Heading level="h3" size="sm" color="primary" className="mb-3">
                  {step.title}
                </Heading>
                <p className={`${paragraph.light.sm}`}>{step.description}</p>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-amber-200 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className={`md:hidden space-y-4`}>
          {steps.map((step, index) => (
            <div key={step.number} className={`flex ${spacing.gap.lg}`}>
              <div className={`flex flex-col items-center`}>
                <div className={`w-12 h-12 ${radius.full} ${colors.background.white} ${colors.accent[600]} border-2 flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-1 h-12 ${colors.accent[600]} bg-opacity-30 mt-2`}></div>
                )}
              </div>
              <div className={`pb-4`}>
                <Heading level="h3" size="sm" color="primary" className="mb-2">
                  {step.title}
                </Heading>
                <p className={`${paragraph.light.sm}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProcessTimelineSection
