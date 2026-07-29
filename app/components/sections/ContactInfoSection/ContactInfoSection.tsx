import { Container, Heading, Text } from '@/app/components/common'
import { colors, radius, paragraph } from '@/lib/design-tokens'

export function ContactInfoSection() {
  return (
    <section className={`${colors.background.light} py-12 md:py-16 lg:py-20`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <Heading level="h3" size="lg" color="primary" align="center" className="mb-4 text-center md:text-left">
              Call Us
            </Heading>
            <Text className={`${paragraph.light.base} mb-2`}>
              <strong>Toll Free:</strong>
            </Text>
            <a href="tel:1-855-9-742762" className="text-accent-600 font-bold text-lg hover:text-accent-700">
              (214) 828-9911
            </a>
            <Text className={`${paragraph.light.base} text-sm`}>
              (1-855-974-2762)
            </Text>
            <Text className={`${paragraph.light.base} mt-4 mb-2`}>
              <strong>Email:</strong>
            </Text>
            <a href="mailto:info@lawofficefrankperez.com" className="text-accent-600 font-bold hover:text-accent-700">
              info@lawofficefrankperez.com
            </a>
            <Text className={`${paragraph.light.base} mt-4 mb-2`}>
              <strong>Fax:</strong>
            </Text>
            <Text className={paragraph.light.base}>
              855-975-0900
            </Text>
          </div>

          <div className="text-center md:text-left">
            <Heading level="h3" size="lg" color="primary" align="center" className="mb-4 text-center md:text-left">
              Consultations
            </Heading>

            <div className={`${colors.background.white} p-4 ${radius.lg} mb-4 border-l-4 border-accent-600`}>
              <Heading level="h4" size="lg" color="primary" align="center" className="mb-2 text-center md:text-left">
                FREE Consultation
              </Heading>
              <Text className={`${paragraph.light.base} text-sm`}>
                Free initial email or telephone consultation for individuals and employers interested in hiring an immigration lawyer.
              </Text>
              <Text className={`${paragraph.light.base} text-xs text-gray-600 mt-2 italic`}>
                Limited to general description of law and our services. No legal advice without attorney-client relationship.
              </Text>
            </div>

            <div className={`${colors.background.white} p-4 ${radius.lg} border-l-4 border-accent-600`}>
              <Heading level="h4" size="lg" color="primary" align="center" className="mb-2 text-center md:text-left">
                PAID Consultation - $200
              </Heading>
              <Text className={`${paragraph.light.base} text-sm`}>
                In-office personal or phone consultation with an Immigration Lawyer.
              </Text>
              <Text className={`${paragraph.light.base} text-xs text-gray-600 mt-2`}>
                ✓ If retained within 2 weeks, entire $200 fee credited toward legal fees.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
