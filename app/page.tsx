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
  title: 'International Criminal Defense | Frank Perez Law',
  description: 'Expert federal criminal defense for international cases. Frank Perez - 40+ years experience. Drug trafficking, sanctions, extradition defense. Call (214) 828-9911.',
  keywords: [
    'criminal defense attorney',
    'federal criminal defense',
    'international criminal defense',
    'drug trafficking attorney',
    'OFAC defense lawyer',
    'extradition attorney',
    'Dallas criminal defense',
    'white collar crimes',
  ],
})

// Navigation data
const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// Trust indicators data
const trustStats: StatCard[] = [
  {
    statistic: '40+',
    description: 'Years of Experience',
  },
  {
    statistic: '500+',
    description: 'Cases Defended Successfully',
  },
  {
    statistic: '24/7',
    description: 'Available for Emergencies',
  },
]

// Strategic approach values
const strategyValues: ValuePoint[] = [
  {
    icon: '🛡️',
    title: 'Expert Defense',
    description: 'Former prosecutor & law enforcement expertise',
  },
  {
    icon: '⚡',
    title: 'Aggressive Representation',
    description: 'Identify weaknesses in government cases',
  },
  {
    icon: '🌍',
    title: 'International Expertise',
    description: 'Specialized in complex international matters',
  },
  {
    icon: '📞',
    title: 'Immediate Support',
    description: 'Available 24/7 for consultations',
  },
]

// Practice areas data
const practiceAreas: PracticeArea[] = [
  {
    icon: '💊',
    title: 'Drug Charges',
    description: 'International drug crimes are aggressively prosecuted. Frank Perez has defended hundreds of cases.',
    link: '#',
  },
  {
    icon: '🏛️',
    title: 'OFAC Defense',
    description: 'Help with OFAC legal problems and SDN list placement. Expert sanctions defense.',
    link: '#',
  },
  {
    icon: '💰',
    title: 'Money Laundering',
    description: 'Complex financial crime defense. Protecting your rights in federal investigations.',
    link: '#',
  },
  {
    icon: '✈️',
    title: 'Extradition Defense',
    description: 'Defending against international extradition proceedings. Proven track record.',
    link: '#',
  },
  {
    icon: '⚖️',
    title: 'Federal Conspiracy',
    description: 'Complex federal conspiracy charges require experienced defense strategy.',
    link: '#',
  },
  {
    icon: '📋',
    title: 'Civil Matters',
    description: 'Criminal defense, personal injury claims, contract disputes, civil litigation.',
    link: '#',
  },
]

// Services category pages
const tools: Tool[] = []

// Recognitions data
const recognitions: Recognition[] = [
  {
    title: 'Former Dallas Police Officer',
    year: '1982',
  },
  {
    title: 'Former Assistant District Attorney',
    year: 'Dallas County',
  },
  {
    title: '40+ Years Criminal Defense',
    year: 'Established Track Record',
  },
]

// CTA Options
const ctaOptions: CTAOption[] = []

// Blog data
const blogs: Blog[] = []

// FAQ data
const faqs: FAQ[] = [
  {
    question: 'What should I say if I\'m being questioned?',
    answer: 'You need to remain silent. Most police and government officials are skilled interrogators. Simply tell them that you\'re invoking your rights to an attorney and to remain silent.',
  },
  {
    question: 'What if I am indicted?',
    answer: 'If you are indicted, you will proceed to a bond hearing. The judge will decide if you will be released on bond pending trial. You need a criminal defense attorney to help fight for your release.',
  },
  {
    question: 'Will my case go to trial?',
    answer: 'It depends on the situation. If your crime is not serious, prosecutors could be willing to negotiate a plea. Whether a case proceeds to trial is a strategic decision.',
  },
  {
    question: 'If I am convicted, what next?',
    answer: 'We will work with you quickly to decide whether filing an appeal would be advisable. If so, we\'ll get to work immediately on proper filings and the brief.',
  },
]

export default function Home() {
  return (
    <>
      <NavigationHeader
        navLinks={navLinks}
        logoUrl="/frank-logo.png"
        companyName="Law Office Frank Perez"
        phone="(214) 828-9911"
      />
      <HeroSection
        headline="Your Trusted Advocate in Federal Criminal Defense"
        tagline="40+ Years of Experience"
        description="Expert representation in international criminal defense, drug trafficking, OFAC sanctions, and extradition cases. Frank Perez combines former law enforcement and prosecutor experience to aggressively protect your rights."
        ctaText="Schedule Consultation"
        ctaHref="tel:+12148289911"
        ctaPhone="(214) 828-9911"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80"
      />
      <TrustIndicatorsSection stats={trustStats} />
      <AboutSection
        title="About Frank Perez"
        foundersName="Frank Perez, Esq."
        foundersTitle="Founder & Principal Attorney"
        description="With over 40 years of experience, Frank Perez has defended high-profile international cases. His unique background as a former Dallas Police Officer (1982) and Assistant District Attorney gives him unparalleled insight into government prosecution strategies. He aggressively identifies weaknesses in government cases and fights to protect your constitutional rights."
        image="/frank.png"
        ctaText="Schedule Consultation"
        ctaHref="tel:+12148289911"
        backgroundColor="white"
      />
      <StrategicApproachSection
        title="Our Approach"
        subtitle="Strategic Criminal Defense"
        mainDescription="Frank Perez combines former law enforcement and prosecutor experience with aggressive defense tactics to protect your freedom."
        values={strategyValues}
      />
      <PracticeAreasSection
        practiceAreas={practiceAreas}
        title="Practice Areas"
        description="Specialized defense for complex federal and international criminal cases"
        backgroundColor="light"
      />
      <RecognitionsSection
        recognitions={recognitions}
        title="Proven Track Record"
        subtitle="40+ Years of Successful Defense"
      />
      <ToolsAndResourcesSection tools={tools} title="" subtitle="" />
      <TestimonialsSection />
      <FAQSection faqs={faqs} />
      <BlogsSection blogs={blogs} title="" description="" />
      <CTASection
        title="Need Immediate Legal Help?"
        subtitle="Contact Frank Perez Today"
        description="Available 24/7 for emergencies. Call now for immediate consultation."
      />
      <FooterSection
        logo=""
        companyName="Law Office Frank Perez, P.C."
        phone="(214) 828-9911"
        email="fperez@frankperezlaw.com"
        address="9110 Scyene Rd., Dallas, TX 75227"
        copyright="© 2026 Law Office Frank Perez P.C. All Rights Reserved."
        socialLinks={{
          facebook: '#',
          linkedin: '#',
          twitter: '#',
          instagram: '#',
        }}
      />
    </>
  )
}
