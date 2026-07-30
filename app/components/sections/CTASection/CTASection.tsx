'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideInUpVariants, containerVariants, itemVariants } from '@/lib/animations'

interface CTASectionProps {
  title: string
  subtitle: string
  description: string
}

export function CTASection({ title, subtitle, description }: CTASectionProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,rgba(59,130,246,.5)_1px,transparent_1px),linear-gradient(rgba(59,130,246,.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInUpVariants}
      >
        {/* Subtitle Badge */}
        <motion.div
          className="mb-6 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
            {subtitle}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Primary CTA */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 w-full sm:w-auto text-center"
            >
              Call (214) 828-9911
            </button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
            >
              WhatsApp Message
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            ✓ Available 24/7 for Emergencies | ✓ Free Initial Consultation | ✓ Immediate Response
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CTASection
