'use client'

import { Heading } from '@/app/components/common/Heading'
import { spacing, responsive } from '@/lib/design-tokens'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ValuePoint {
  icon: string
  title: string
  description: string
}

interface StrategicApproachSectionProps {
  title: string
  subtitle: string
  mainDescription: string
  values: ValuePoint[]
}

export function StrategicApproachSection({
  title,
  subtitle,
  mainDescription,
  values,
}: StrategicApproachSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
        duration: 0.6,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-slate-500/5 rounded-full blur-3xl" />

      <div className={`relative z-10 ${responsive.containerMaxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* Header Section */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Subtitle Badge */}
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-semibold text-amber-600 uppercase tracking-wider">
              {subtitle}
            </span>
            <motion.div
              className="mt-2 h-1 w-16 bg-gradient-to-r from-amber-600 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 64 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>

          {/* Main Title */}
          <Heading
            level="h2"
            size="4xl"
            color="primary"
            className="mb-6 text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </Heading>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {mainDescription}
          </p>
        </motion.div>

        {/* Values Grid - Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`group relative ${index % 2 === 1 ? 'md:mt-12 lg:mt-0' : ''}`}
              variants={cardVariants}
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-amber-200/50 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-blue-50/0 group-hover:from-amber-50/50 group-hover:to-blue-50/30 transition-all duration-500 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl md:text-6xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base">
                    {value.description}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StrategicApproachSection
