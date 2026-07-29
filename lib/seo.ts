import type { Metadata } from 'next'

/**
 * CENTRALIZED METADATA SYSTEM FOR LAW OFFICE FRANK PEREZ
 *
 * USAGE:
 * ------
 * In any page file (e.g., app/services/immigration/page.tsx):
 *
 *   import { createMetadata } from '@/lib/seo'
 *
 *   export const metadata = createMetadata({
 *     title: 'Immigration Law Services - Law Office Frank Perez',
 *     description: 'Expert immigration law services...',
 *     keywords: ['immigration', 'visa', 'green card'],
 *   })
 *
 * All unspecified fields (ogImage, canonical, robots, twitter, etc.)
 * default to centralized site values. Only override what's unique to the page.
 *
 * SOCIAL MEDIA SHARING:
 * --------------------
 * - Open Graph (Facebook, LinkedIn) uses title, description, and ogImage
 * - Twitter cards use card: summary_large_image with all three fields
 * - Custom ogImage per page: include ogImage in the config
 * - Default uses /logo.jpg for all pages
 */

export interface PageMetadataConfig {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
}

export const siteMetadata = {
  siteName: 'Law Office Frank Perez, PLLC',
  siteUrl: 'https://lawofficefrankperez.com',
  founder: 'Frank Perez, Esq.',
  experience: '40+ years of criminal defense experience',
  email: 'info@lawofficefrankperez.com',
  tollfree: '(214) 828-9911',
  offices: {
    main: {
      name: 'Main Office (Queens, NY)',
      street: '119-18 Liberty Ave',
      city: 'South Richmond Hill',
      state: 'NY',
      zip: '11419',
      phone: '(646) 492-9700',
      fax: '(866) 964-2676',
    },
    branch: {
      name: 'Branch Office (Woodbridge, NJ)',
      street: '525 Green Street',
      city: 'Iselin',
      state: 'NJ',
      zip: '08830',
      phone: '(855) 974-2762',
      fax: '(866) 964-2676',
    },
  },
  languages: ['English', 'Hindi', 'Punjabi', 'Urdu', 'Spanish', 'Mandarin'],
  practiceAreas: [
    'Immigration Law',
    'Business Law',
    'Family Law',
    'Real Estate Law',
  ],
}

const defaultMetadata = {
  title: `${siteMetadata.siteName} - Immigration & Business Law`,
  description:
    'Full-service immigration and business law firm with offices in New York and New Jersey. Expert representation for individuals and corporations in US immigration law, business transactions, family law, and real estate law. 20+ years of experience.',
  keywords: [
    'immigration lawyer',
    'immigration attorney',
    'business law',
    'real estate law',
    'family law',
    'green card',
    'work visa',
    'H-1B visa',
    'New York',
    'New Jersey',
    'Queens',
    'Woodbridge',
  ],
  ogImage: '/logo.jpg',
}

export function createMetadata(
  pageConfig: PageMetadataConfig = {}
): Metadata {
  const title = pageConfig.title || defaultMetadata.title
  const description = pageConfig.description || defaultMetadata.description
  const keywords = pageConfig.keywords || defaultMetadata.keywords
  const ogImage = pageConfig.ogImage || defaultMetadata.ogImage
  const canonical = pageConfig.canonical || siteMetadata.siteUrl
  const shouldIndex = pageConfig.noIndex !== true
  const shouldFollow = pageConfig.noFollow !== true

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteMetadata.founder, url: siteMetadata.siteUrl }],
    creator: siteMetadata.founder,
    publisher: siteMetadata.siteName,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteMetadata.siteName,
      images: ogImage ? [{ url: ogImage, alt: siteMetadata.siteName }] : [],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    robots: {
      index: shouldIndex,
      follow: shouldFollow,
      googleBot: {
        index: shouldIndex,
        follow: shouldFollow,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code-here',
    },
  }
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteMetadata.siteName,
  url: siteMetadata.siteUrl,
  logo: `${siteMetadata.siteUrl}/logo.jpg`,
  description: defaultMetadata.description,
  founder: {
    '@type': 'Person',
    name: siteMetadata.founder,
    jobTitle: 'Founder & Principal Attorney',
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'New York',
    },
    {
      '@type': 'State',
      name: 'New Jersey',
    },
  ],
  availableLanguage: siteMetadata.languages,
  telephone: siteMetadata.tollfree,
  email: siteMetadata.email,
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.offices.main.street,
      addressLocality: siteMetadata.offices.main.city,
      addressRegion: siteMetadata.offices.main.state,
      postalCode: siteMetadata.offices.main.zip,
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.offices.branch.street,
      addressLocality: siteMetadata.offices.branch.city,
      addressRegion: siteMetadata.offices.branch.state,
      postalCode: siteMetadata.offices.branch.zip,
      addressCountry: 'US',
    },
  ],
  serviceArea: siteMetadata.practiceAreas,
  knowsAbout: siteMetadata.practiceAreas,
}

export const attorneyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: siteMetadata.founder,
  url: siteMetadata.siteUrl,
  worksFor: {
    '@type': 'Organization',
    name: siteMetadata.siteName,
  },
  areaOfLaw: siteMetadata.practiceAreas,
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.offices.main.street,
      addressLocality: siteMetadata.offices.main.city,
      addressRegion: siteMetadata.offices.main.state,
      postalCode: siteMetadata.offices.main.zip,
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.offices.branch.street,
      addressLocality: siteMetadata.offices.branch.city,
      addressRegion: siteMetadata.offices.branch.state,
      postalCode: siteMetadata.offices.branch.zip,
      addressCountry: 'US',
    },
  ],
  telephone: siteMetadata.tollfree,
  email: siteMetadata.email,
}
