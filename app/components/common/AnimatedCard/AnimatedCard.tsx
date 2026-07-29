'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  index?: number
  delay?: number
}

export function AnimatedCard({ children, className = '', index = 0, delay = 0.1 }: AnimatedCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: index * delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
