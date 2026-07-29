/**
 * FooterSection Component Types
 */

export interface FooterLink {
  text: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterSectionProps {
  logo?: string
  companyName: string
  phone: string
  email: string
  address: string
  columns?: FooterColumn[]
  socialLinks?: {
    facebook?: string
    linkedin?: string
    twitter?: string
    instagram?: string
    tiktok?: string
    yelp?: string
  }
  copyright?: string
}
