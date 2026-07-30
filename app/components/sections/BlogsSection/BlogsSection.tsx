'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { responsive } from '@/lib/design-tokens'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Blog {
  title: string
  description: string
  image: string
  date: string
  category: string
}

interface BlogsSectionProps {
  blogs?: Blog[]
  title?: string
  description?: string
}

export function BlogsSection({
  blogs,
  title = 'Legal Insights & Resources',
  description = 'Expert articles on criminal defense, your rights, and legal strategies',
}: BlogsSectionProps) {
  const defaultBlogs: Blog[] = [
    {
      title: 'Understanding Your Rights in Federal Criminal Cases',
      description: 'Learn what to expect when facing federal charges. This comprehensive guide covers your constitutional rights, the federal prosecution process, and strategies for mounting an effective defense in complex federal cases.',
      image: 'https://images.unsplash.com/photo-1554224311-beab60cf0ee1?w=800&h=500&fit=crop&q=80',
      date: 'March 15, 2026',
      category: 'Criminal Defense',
    },
    {
      title: 'International Extradition: What You Need to Know',
      description: 'Facing extradition charges? Understand the legal process, your rights, and how experienced counsel can help protect you. Frank Perez has successfully defended dozens of international extradition cases.',
      image: 'https://images.unsplash.com/photo-1516534775068-bb57a52f4b40?w=800&h=500&fit=crop&q=80',
      date: 'March 8, 2026',
      category: 'International Law',
    },
    {
      title: 'OFAC Sanctions and Your Rights: Expert Defense Strategies',
      description: 'OFAC violations carry serious penalties. Discover how to navigate sanctions issues, defend against allegations, and protect your interests in complex international trade matters.',
      image: 'https://images.unsplash.com/photo-1611692037874-931531673b8b?w=800&h=500&fit=crop&q=80',
      date: 'March 1, 2026',
      category: 'Sanctions Defense',
    },
    {
      title: 'Drug Trafficking Charges: Building a Winning Defense',
      description: 'Drug trafficking allegations demand aggressive legal representation. Learn about defense strategies, evidence challenges, and how to protect your future with experienced counsel.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80',
      date: 'February 22, 2026',
      category: 'Drug Defense',
    },
    {
      title: 'White Collar Crime Defense: Protecting Your Reputation and Future',
      description: 'Facing white collar charges? Understand the complexities of federal prosecution, discovery procedures, and how to mount an effective defense while protecting your professional reputation.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80',
      date: 'February 15, 2026',
      category: 'White Collar',
    },
  ]

  const blogContent = blogs && blogs.length > 0 ? blogs : defaultBlogs
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [emblaRef, emblaApi] = EmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'start',
      breakpoints: {
        '(max-width: 640px)': { slides: { perView: 1 } },
        '(min-width: 641px) and (max-width: 1023px)': { slides: { perView: 1 } },
        '(min-width: 1024px)': { slides: { perView: 1 } },
      },
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section ref={ref} className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className={`relative z-10 ${responsive.containerMaxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* Header - Centered */}
        <motion.div
          className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            {description}
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {blogContent.map((blog, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  {/* Blog Image */}
                  <motion.div
                    className="flex justify-center lg:justify-start order-2 lg:order-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-2xl shadow-2xl object-cover w-full h-96 max-w-md"
                    />
                  </motion.div>

                  {/* Blog Content */}
                  <div className="flex flex-col justify-center order-1 lg:order-2">
                    <div className="mb-4 inline-block">
                      <span className="text-sm md:text-base font-bold text-amber-600 uppercase tracking-widest">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {blog.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base text-gray-600 font-medium">
                        {blog.date}
                      </span>
                      <a
                        href="#"
                        className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center gap-2"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <motion.button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous article"
          >
            ←
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next article"
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
