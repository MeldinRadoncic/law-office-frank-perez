import { Container, Heading, Text } from '@/app/components/common'
import { colors, radius, paragraph } from '@/lib/design-tokens'

export function VisitUsSection() {
  return (
    <section className={`${colors.background.white} py-16 md:py-24 lg:py-32`}>
      <Container>
        <Heading level="h2" size="2xl" color="primary" align="center" className="mb-4 text-center md:text-left">
          Office Location
        </Heading>
        <Text className={`${paragraph.light.base} text-center md:text-left max-w-2xl mx-auto md:mx-0 mb-12`}>
          Conveniently located in Woodbridge, NJ to serve clients across the tristate area.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center md:justify-start">
          {/* Map */}
          <div className={`overflow-hidden ${radius.lg} h-96`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.0789594892355!2d-74.27684!3d40.55937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b4c1e5e5e5e5%3A0x1234567890abcdef!2s525%20Green%20St%2C%20Iselin%2C%20NJ%2008830!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info & Directions */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className={`${colors.background.light} p-8 ${radius.lg} mb-6`}>
              <Heading level="h3" size="lg" color="primary" align="center" className="mb-4 text-center md:text-left">
                Woodbridge, NJ Office
              </Heading>
              <div className="space-y-3">
                <Text className={`${paragraph.light.base} font-semibold`}>523 Green Street, Iselin, NJ 08830</Text>
                <Text className={paragraph.light.base}>
                  <strong>Phone:</strong> (855) 974-2762
                </Text>
                <Text className={paragraph.light.base}>
                  <strong>Fax:</strong> (866) 964-2676
                </Text>
                <Text className={paragraph.light.base}>
                  <strong>Toll Free:</strong> (214) 828-9911 (1-855-9-742762)
                </Text>
                <Text className={paragraph.light.base}>
                  <strong>Email:</strong> info@lawofficefrankperez.com
                </Text>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=525+Green+Street,+Iselin,+NJ+08830"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors w-full md:w-auto`}
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
