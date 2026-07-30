'use client'

import { useState } from 'react'
import type { NavigationHeaderProps } from './NavigationHeader.types'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function NavigationHeader({
  logoUrl,
  companyName,
  phone,
  navLinks = [],
}: NavigationHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-28">
            {/* Logo */}
            <button className="hover:opacity-80 transition-opacity flex-shrink-0">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt={companyName || 'Logo'}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              )}
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Phone CTA */}
            <button
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg font-semibold"
            >
              <span>{phone}</span>
            </button>

            {/* Mobile: Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-900 block"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-900 block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-900 block"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring' as const, damping: 25, stiffness: 120 }}
              className="fixed top-0 right-0 w-[60%] max-w-xs h-screen z-40 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Close Button */}
              <div className="p-6 border-b border-gray-200">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-2xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 font-semibold text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Phone CTA */}
              <div className="p-6 border-t border-gray-200">
                <button
                  className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-center font-semibold"
                >
                  {phone}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavigationHeader
