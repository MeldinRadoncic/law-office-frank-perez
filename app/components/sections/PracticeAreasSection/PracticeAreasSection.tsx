'use client'

import { Heading } from '@/app/components/common/Heading'
import { responsive } from '@/lib/design-tokens'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface PracticeArea {
  icon: string
  title: string
  description: string
  link: string
}

interface PracticeAreasSectionProps {
  practiceAreas: PracticeArea[]
  title: string
  description: string
  backgroundColor?: 'light' | 'dark' | 'white'
}

const cardColors = [
  'from-blue-600/10 to-blue-600/5 hover:from-blue-600/15 hover:to-blue-600/10 border-blue-200/50 hover:border-blue-400/50 hover:shadow-blue-600/15',
  'from-amber-600/10 to-amber-600/5 hover:from-amber-600/15 hover:to-amber-600/10 border-amber-200/50 hover:border-amber-400/50 hover:shadow-amber-600/15',
  'from-slate-600/10 to-slate-600/5 hover:from-slate-600/15 hover:to-slate-600/10 border-slate-300/50 hover:border-slate-400/50 hover:shadow-slate-600/15',
  'from-blue-500/10 to-blue-500/5 hover:from-blue-500/15 hover:to-blue-500/10 border-blue-200/50 hover:border-blue-400/50 hover:shadow-blue-500/15',
  'from-amber-500/10 to-amber-500/5 hover:from-amber-500/15 hover:to-amber-500/10 border-amber-200/50 hover:border-amber-400/50 hover:shadow-amber-500/15',
  'from-slate-500/10 to-slate-500/5 hover:from-slate-500/15 hover:to-slate-500/10 border-slate-300/50 hover:border-slate-400/50 hover:shadow-slate-500/15',
]

export function PracticeAreasSection({
  practiceAreas,
  title,
  description,
  backgroundColor = 'light',
}: PracticeAreasSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const bgClass = {
    light: 'bg-gradient-to-b from-gray-50 to-white',
    dark: 'bg-slate-900',
    white: 'bg-white',
  }[backgroundColor]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section ref={ref} id="practice-areas" className={`w-full py-20 md:py-24 lg:py-32 ${bgClass} relative overflow-hidden`}>
      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-amber-400/5 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className={`relative z-10 ${responsive.containerMaxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="text-sm md:text-base font-bold text-amber-600 uppercase tracking-widest">
                Our Services
              </span>
              <motion.div
                className="mt-3 h-1.5 w-20 bg-gradient-to-r from-amber-600 via-blue-600 to-amber-600 rounded-full mx-auto"
                initial={{ width: 0, opacity: 0 }}
                animate={inView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              />
            </div>

            <Heading level="h2" size="4xl" color="primary" className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              {title}
            </Heading>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        {/* Practice Areas Grid - Modern Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {practiceAreas.map((area, index) => (
            <motion.a
              key={index}
              href={area.link}
              className={`group relative p-8 md:p-10 rounded-2xl bg-gradient-to-br border-2 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                cardColors[index % cardColors.length]
              }`}
              variants={cardVariants}
              whileHover={{ translateY: -8 }}
            >
              {/* Card background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
              />

              <div className="relative z-10">
                {/* Icon Badge */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/80 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <span className="text-4xl">{area.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {area.description}
                </p>

                {/* CTA Link */}
                <motion.div
                  className="flex items-center gap-2 text-blue-600 font-semibold"
                  whileHover={{ gap: 12 }}
                >
                  <span>Learn More</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
