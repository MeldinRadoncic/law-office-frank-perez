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
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-blue-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={companyName || 'Logo'}
                className="h-12 w-12 rounded-lg object-cover shadow-lg"
              />
            )}
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-blue-400">LAW OFFICE</span>
              <span className="text-lg font-bold text-white hidden sm:inline">{companyName}</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
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
