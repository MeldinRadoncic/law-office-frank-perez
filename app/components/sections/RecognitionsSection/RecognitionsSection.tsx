'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { responsive } from '@/lib/design-tokens'

interface Recognition {
  title: string
  year: string
}

interface RecognitionsSectionProps {
  recognitions: Recognition[]
  title: string
  subtitle: string
}

export function RecognitionsSection({
  recognitions,
  title,
  subtitle,
}: RecognitionsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        </motion.div>

        {/* Two Column Layout: Timeline + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Recognition Timeline */}
          <motion.div
            className="space-y-6 sm:text-center md:text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                className="group relative flex gap-6 items-start p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-500"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    {recognition.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative group">
              {/* Image background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop&q=80"
                  alt="Professional success - proven track record"
                  className="w-full h-auto object-cover aspect-square max-w-md"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement Box */}
        <motion.div
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-950 to-blue-950 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed text-center">
            "With over 40 years of experience, Frank Perez has the expertise and knowledge to win your case and prevail in circumstances where less accomplished attorneys will fail."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RecognitionsSection
