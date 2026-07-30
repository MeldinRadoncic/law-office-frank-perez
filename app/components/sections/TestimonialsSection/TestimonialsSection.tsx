'use client'

import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Frank Perez helped me navigate a complex federal case with expertise I couldn't find anywhere else. His experience as both a prosecutor and defense attorney gave him unique insights.",
      author: "Client Case Study",
      role: "Federal Defense",
    },
    {
      quote:
        "The level of professional service and aggressive representation was exactly what I needed. Frank Perez truly fights for his clients.",
      author: "Satisfied Client",
      role: "International Case",
    },
    {
      quote:
        "When facing serious charges, you need someone who understands both sides of the legal system. Frank Perez has that rare combination of experience.",
      author: "Case Resolution",
      role: "Criminal Defense",
    },
    {
      quote:
        "Frank's deep understanding of international criminal law and his aggressive defense strategy helped me win my case. Highly recommended.",
      author: "International Client",
      role: "Extradition Defense",
    },
    {
      quote:
        "With 40+ years of experience, Frank knows exactly how to handle complex federal cases. His representation was outstanding.",
      author: "Grateful Client",
      role: "Federal Charges",
    },
    {
      quote:
        "Frank Perez is the attorney you need when facing serious criminal charges. His expertise and dedication are unmatched.",
      author: "Satisfied Defendant",
      role: "Criminal Defense",
    },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.slidesInView()[0] ?? 0)
    }

    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, testimonials.length])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <section ref={ref} className="w-full py-20 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300">
            See what our clients say about their experience
          </p>
        </motion.div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <motion.div
                  className="group h-full p-8 md:p-10 rounded-2xl bg-gray-900/50 border-2 border-gray-700 hover:border-blue-500/50 shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm text-center sm:text-center md:text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ translateY: -8 }}
                >
                  {/* Stars */}
                  <div className="mb-6 text-3xl flex justify-center lg:justify-start">★★★★★</div>

                  {/* Quote */}
                  <blockquote className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-auto">
                    <p className="font-bold text-white mb-1">{testimonial.author}</p>
                    <p className="text-sm text-blue-400 font-semibold">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - Arrow Buttons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <motion.button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            ←
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            →
          </motion.button>
        </div>

        {/* Dots Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
