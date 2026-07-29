import Image from "next/image";
import Link from "next/link";
import { Container, Heading, Text, Button } from '@/app/components/common'
import { colors, spacing, paragraph, radius, shadows, responsive } from '@/lib/design-tokens'
import type { CardSectionProps } from './CardSection.types'

export function CardSection({
  title,
  titleLine2,
  subtitle,
  cards,
  badgeLabel = 'Visa Option',
  badgeIcon = '📋',
}: CardSectionProps) {
  return (
    <section className={`${colors.background.white} py-16 md:py-24 lg:py-32`}>
      <Container>
        <div className={`${responsive.centerContent} mb-12 md:mb-16`}>
          <Heading level="h2" size="2xl" color="primary" align="center" className="mb-4 lg:text-left">
            {title}
            {titleLine2 && (
              <>
                <br className="hidden sm:block" />
                {titleLine2}
              </>
            )}
          </Heading>
          {subtitle && (
            <Text className={`${paragraph.light.base} max-w-2xl mx-auto lg:mx-0`}>
              {subtitle}
            </Text>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.lg}`}>
          {cards.map((card) => (
            <div key={card.title} className={`${colors.background.white} ${radius.lg} ${shadows.md} hover:${shadows.lg} overflow-hidden transition-shadow duration-300`}>
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={card.icon || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'}
                  alt={`${card.title} - ${card.subtitle} - Law Office Frank Perez expert legal services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className={spacing.padding.lg}>
                <div className={`inline-block px-3 py-1 ${radius.full} ${colors.background.lighter} mb-3`}>
                  <span className={`text-xs font-semibold ${colors.accent[600]}`}>{badgeIcon} {badgeLabel}</span>
                </div>

                <Heading level="h3" size="xl" color="primary" className="mb-1">
                  {card.title}
                </Heading>
                <p className={`${colors.accent[600]} font-semibold mb-2 text-sm`}>{card.subtitle}</p>
                <p className={`${paragraph.light.base} mb-4`}>{card.description}</p>

                <div className={`space-y-2 mb-6`}>
                  {card.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`${colors.accent[600]} font-bold text-lg flex-shrink-0`}>✓</span>
                      <span className={`${paragraph.light.sm}`}>{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="secondary"
                  size="md"
                  asLink={true}
                  href={card.href}
                >
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CardSection
