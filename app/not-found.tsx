import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import { colors, spacing, radius } from '@/lib/design-tokens'
import { NavigationHeader } from '@/app/components/sections/NavigationHeader'
import { CTASection } from '@/app/components/sections/CTASection'
import { FooterSection } from '@/app/components/sections/FooterSection'
import { Heading, Text, Button, Container } from '@/app/components/common'

export const metadata: Metadata = createMetadata({
  title: 'Page Not Found - Law Office Frank Perez',
  description: 'The page you are looking for could not be found. Return to our homepage to explore our immigration and business law services.',
  noIndex: true,
  noFollow: true,
})

const navigationProps = {
  logo: '🏛️',
  logoUrl: '/frank-logo.png',
  companyName: 'Law Office Frank Perez, PLLC',
  phone: '(646) 492-9700',
  navLinks: [],
}

const footerProps = {
  logo: '🏛️',
  logoUrl: '/frank-logo.png',
  companyName: 'Law Office Frank Perez, PLLC',
  phone: '(646) 492-9700',
  email: 'info@lawofficefrankperez.com',
  address: '119-18 Liberty Ave, South Richmond Hill, NY 11419',
  socialLinks: {
    facebook: '#',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
  copyright: '© 2026 Law Office Frank Perez, PLLC. All Rights Reserved.',
}

export default function NotFound() {
  return (
    <>
      <NavigationHeader {...navigationProps} />

      <main className="flex-grow flex flex-col min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 md:pt-40">
        {/* Hero 404 Section - CENTERED CONTENT */}
        <section className="flex-grow w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-20 right-0 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-32 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>

          {/* Centered Content */}
          <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8 md:gap-12">
            {/* Large 404 Display */}
            <h1 className={`
              text-7xl sm:text-8xl md:text-9xl font-bold
              ${colors.primary[900]}
              leading-none
              tracking-tighter
              opacity-10
              text-center
            `}>
              404
            </h1>

            {/* Page Not Found Heading - CENTERED */}
            <Heading
              level="h2"
              size="2xl"
              color="primary"
              className="!text-center w-full"
            >
              Page Not Found
            </Heading>

            {/* Description Text - CENTERED */}
            <div className="w-full max-w-xl">
              <Text
                variant="secondary"
                size="lg"
                className="leading-relaxed text-center"
              >
                The page you're looking for doesn't exist or may have been moved. But don't worry — our team is ready to help you find what you need.
              </Text>
            </div>

            {/* Go Back Button - CENTERED */}
            <div className="mt-4">
              <Button
                asLink
                href="/"
                variant="accent"
                size="lg"
                ariaLabel="Return to homepage"
                className="text-lg px-8 md:px-10"
              >
                ← Go Back
              </Button>
            </div>

            {/* Quick Help Message - CENTERED */}
            <div className="mt-8 pt-8 border-t border-gray-200 max-w-lg text-center">
              <Text
                variant="muted"
                size="sm"
                className="leading-relaxed text-center"
              >
                Looking for specific legal services? Call us directly at{' '}
                <a
                  href="tel:+18559742762"
                  className={`font-semibold ${colors.primary[900]} hover:${colors.accent[600]} transition-colors`}
                >
                  (855) 974-2762
                </a>
                {' '}or{' '}
                <a
                  href="/contact"
                  className={`font-semibold ${colors.primary[900]} hover:${colors.accent[600]} transition-colors`}
                >
                  contact our team
                </a>
                .
              </Text>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Get Back on Track"
          subtitle="Our team is here to help"
          description="Whether you need immigration law, business law, family law, or real estate assistance, we have the expertise you need."
        />
      </main>

      <FooterSection {...footerProps} />
    </>
  )
}
