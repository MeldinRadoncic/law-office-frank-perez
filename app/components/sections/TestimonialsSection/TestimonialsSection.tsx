'use client'

import { useEffect } from 'react'
import EmblaCarousel from 'embla-carousel-react'
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

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [emblaRef, emblaApi] = EmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      breakpoints: {
        '(max-width: 640px)': { slides: { perView: 1 } },
        '(min-width: 641px) and (max-width: 1023px)': { slides: { perView: 2 } },
        '(min-width: 1024px)': { slides: { perView: 3 } },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  return (
    <section ref={ref} className="w-full py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
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
                  className="group h-full p-8 md:p-10 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-400/50 shadow-md hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ translateY: -8 }}
                >
                  {/* Stars */}
                  <div className="mb-6 text-3xl">★★★★★</div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900 mb-1">{testimonial.author}</p>
                    <p className="text-sm text-blue-600 font-semibold">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
