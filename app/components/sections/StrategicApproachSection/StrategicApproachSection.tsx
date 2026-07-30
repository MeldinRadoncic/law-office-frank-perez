'use client'

import { Heading } from '@/app/components/common/Heading'
import { responsive } from '@/lib/design-tokens'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

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
    threshold: 0.2,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section ref={ref} className="w-full py-20 md:py-32 bg-white relative overflow-hidden">

      <div className={`relative z-10 ${responsive.containerMaxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl mx-auto text-center sm:text-center md:text-center lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <span className="text-sm md:text-base font-bold text-amber-600 uppercase tracking-widest">
              {subtitle}
            </span>
            <motion.div
              className="mt-3 h-1.5 w-20 bg-gradient-to-r from-amber-600 via-blue-600 to-amber-600 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            />
          </div>

          <Heading level="h2" size="4xl" color="primary" className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            {title}
          </Heading>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            {mainDescription}
          </p>
        </motion.div>

        {/* Animated Process Steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Timeline connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 to-blue-600"
              variants={lineVariants}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={stepVariants}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Step number circle */}
                <motion.div
                  className="absolute -top-6 left-0 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {index + 1}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`relative group rounded-2xl p-8 pt-16 border-2 transition-all duration-300 cursor-pointer overflow-hidden h-full ${
                    activeIndex === index
                      ? 'border-blue-900/40 bg-white shadow-2xl shadow-blue-900/15'
                      : 'border-gray-200 bg-white hover:border-blue-400/30 shadow-md hover:shadow-lg'
                  }`}
                >

                  {/* Content */}
                  <div className="relative z-10 text-center sm:text-center md:text-center">
                    {/* Icon */}
                    <motion.div
                      className="text-6xl mb-4 flex justify-center"
                      animate={activeIndex === index ? { scale: 1.1, rotate: 12 } : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {value.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      activeIndex === index ? 'text-amber-600' : 'text-blue-900'
                    }`}>
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Active indicator line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-blue-600"
                      animate={activeIndex === index ? { width: '100%' } : { width: '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Connecting line to next step - hidden on mobile */}
                {index < values.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-transparent opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StrategicApproachSection
