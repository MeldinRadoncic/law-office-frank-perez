/**
 * NavigationHeader Component Types
 */

export interface SubMenuItem {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  submenu?: SubMenuItem[]
}

export interface NavigationHeaderProps {
  logo?: string
  logoUrl?: string
  navLinks: NavLink[]
  phone: string
  ctaText?: string
  ctaHref?: string
  companyName?: string
}
