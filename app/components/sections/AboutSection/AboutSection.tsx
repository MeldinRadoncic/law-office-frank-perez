'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideInLeftVariants, slideInRightVariants, itemVariants } from '@/lib/animations'

interface AboutSectionProps {
  title: string
  foundersName: string
  foundersTitle: string
  description: string
  image: string
  ctaText: string
  ctaHref: string
  backgroundColor?: 'white' | 'light'
}

export function AboutSection({
  title,
  foundersName,
  foundersTitle,
  description,
  image,
  ctaText,
  ctaHref,
  backgroundColor = 'white',
}: AboutSectionProps) {
  const bgClass = backgroundColor === 'light' ? 'bg-gray-50' : 'bg-white'
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} id="about" className={`w-full py-20 md:py-24 lg:py-32 ${bgClass} relative overflow-hidden`}>
      {/* Decorative background */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeftVariants}
          >
            <div className="relative group">
              {/* Decorative background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500 to-slate-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
                whileHover={{ rotate: 0 }}
              />

              {/* Image Container */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src={image}
                  alt={foundersName}
                  className="w-full h-auto object-cover aspect-square md:aspect-auto max-w-md"
                />

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInRightVariants}
          >
            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {title}
            </motion.h2>

            {/* Attorney Name & Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {foundersName}
              </p>
              <p className="text-lg text-gray-600 font-medium">
                {foundersTitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>

            {/* Credentials */}
            <motion.div
              className="mb-8 space-y-3"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {[
                {
                  icon: '🛡️',
                  title: 'Former Dallas Police Officer',
                  subtitle: 'Established 1982',
                },
                {
                  icon: '⚖️',
                  title: 'Former Assistant District Attorney',
                  subtitle: 'Dallas County',
                },
                {
                  icon: '📚',
                  title: '40+ Years of Experience',
                  subtitle: 'Proven track record of successful cases',
                },
              ].map((credential, index) => (
                <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
                  <span className="text-2xl">{credential.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{credential.title}</p>
                    <p className="text-gray-600 text-sm">{credential.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
                >
                  {ctaText}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
