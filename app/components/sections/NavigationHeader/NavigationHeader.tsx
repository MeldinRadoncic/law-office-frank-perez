'use client'

import type { NavigationHeaderProps } from './NavigationHeader.types'
import Link from 'next/link'

export function NavigationHeader({
  logoUrl,
  companyName,
  phone,
  navLinks = [],
}: NavigationHeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo Only */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={companyName || 'Logo'}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            )}
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 md:gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg lg:text-xl font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <span className="hidden md:inline text-sm font-semibold">{phone}</span>
              <span className="md:hidden">📞</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationHeader
