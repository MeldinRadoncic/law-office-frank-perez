import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import {
  NavigationHeader,
  HeroSection,
  TrustIndicatorsSection,
  StrategicApproachSection,
  PracticeAreasSection,
  TestimonialsSection,
  ToolsAndResourcesSection,
  AboutSection,
  RecognitionsSection,
  CTASection,
  BlogsSection,
  FAQSection,
  FooterSection,
  type StatCard,
  type PracticeArea,
  type ValuePoint,
  type Tool,
  type Recognition,
  type CTAOption,
  type Blog,
  type FAQ,
  type FooterColumn,
} from '@/app/components/sections'

export const metadata: Metadata = createMetadata({
  title: 'Immigration & Business Lawyer | New York, NJ',
  description: 'Expert immigration and business law services for families, entrepreneurs, and companies in NY and NJ. Free consultation available. Call today.',
  keywords: [
    'immigration lawyer',
    'immigration attorney',
    'business law attorney',
    'green card lawyer',
    'H-1B visa attorney',
    'employment visa',
    'New York immigration lawyer',
    'New Jersey immigration attorney',
  ],
})

// Navigation data with dropdowns
const navLinks = []

// Trust indicators data
const trustStats: StatCard[] = []

// Strategic approach values
const strategyValues: ValuePoint[] = []

// Practice areas data - DETAILED SERVICE PAGES
const practiceAreas: PracticeArea[] = []

// Services category pages to explore - expanded for SEO
const tools: Tool[] = []

// Recognitions data
const recognitions: Recognition[] = []

// CTA Options
const ctaOptions: CTAOption[] = []


// Blog data
const blogs: Blog[] = []

// FAQ data
const faqs: FAQ[] = []

export default function Home() {
  return (
    <>
      <NavigationHeader navLinks={navLinks} logoUrl="" companyName="In Progress" phone="" />
      <HeroSection
        headline="In Progress"
        tagline="In Progress"
        description="In Progress"
        ctaText="In Progress"
        ctaHref="#"
        ctaPhone="#"
        backgroundImage=""
      />
      <TrustIndicatorsSection stats={trustStats} />
      <StrategicApproachSection
        title="In Progress"
        subtitle="In Progress"
        mainDescription="In Progress"
        values={strategyValues}
      />
      <PracticeAreasSection practiceAreas={practiceAreas} title="In Progress" description="In Progress" backgroundColor="light" />
      <AboutSection
        title="In Progress"
        foundersName="In Progress"
        foundersTitle="In Progress"
        description="In Progress"
        image=""
        ctaText="In Progress"
        ctaHref="#"
        backgroundColor="white"
      />
      <RecognitionsSection recognitions={recognitions} title="In Progress" subtitle="In Progress" />
      <ToolsAndResourcesSection tools={tools} title="In Progress" subtitle="In Progress" />
      <TestimonialsSection />
      <BlogsSection blogs={blogs} title="In Progress" description="In Progress" />
      <FAQSection faqs={faqs} />
      <CTASection
        title="In Progress"
        subtitle="In Progress"
        description="In Progress"
      />
      <FooterSection
        logo=""
        companyName="In Progress"
        phone=""
        email=""
        address=""
        copyright="In Progress"
        socialLinks={{}}
      />
    </>
  )
}
