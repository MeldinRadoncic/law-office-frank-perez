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
      title: 'Getting Started with Machine Learning in 2026',
      description: 'Explore the fundamentals of machine learning and how it\'s transforming industries. This guide covers supervised learning, neural networks, and practical applications using modern frameworks and tools.',
      image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=800&h=500&fit=crop&q=80',
      date: 'March 15, 2026',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Web Development Best Practices: React vs Vue vs Angular',
      description: 'Compare the top JavaScript frameworks and discover which is best for your project. Learn about component architecture, state management, performance optimization, and real-world use cases.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&q=80',
      date: 'March 8, 2026',
      category: 'Web Development',
    },
    {
      title: 'Cloud Infrastructure Guide: AWS vs Google Cloud vs Azure',
      description: 'Navigate the cloud computing landscape with our comprehensive comparison. Understand pricing models, scalability options, security features, and which platform fits your infrastructure needs.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80',
      date: 'March 1, 2026',
      category: 'Cloud Computing',
    },
    {
      title: 'Cybersecurity Essentials: Protecting Your Applications',
      description: 'Learn critical security practices for modern applications. Covers authentication, encryption, SQL injection prevention, CSRF protection, and security testing methodologies to keep your systems safe.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&q=80',
      date: 'February 22, 2026',
      category: 'Cybersecurity',
    },
    {
      title: 'DevOps and CI/CD Pipelines: Automating Your Deployment',
      description: 'Master continuous integration and deployment practices. Discover Docker containerization, Kubernetes orchestration, automated testing, and how to streamline your development workflow.',
      image: 'https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?w=800&h=500&fit=crop&q=80',
      date: 'February 15, 2026',
      category: 'DevOps',
    },
  ]

  const blogContent = blogs && blogs.length > 0 ? blogs : defaultBlogs
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
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
                    className="flex justify-center lg:justify-start lg:justify-start order-2 lg:order-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring' as const, stiffness: 200 }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-2xl shadow-2xl object-cover w-full h-96 max-w-md"
                    />
                  </motion.div>

                  {/* Blog Content */}
                  <div className="flex flex-col justify-center order-1 lg:order-2 text-center sm:text-center md:text-center lg:text-left">
                    <div className="mb-4 flex justify-center lg:justify-start">
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

                    <div className="flex flex-col items-center justify-center gap-4">
                      <span className="text-sm md:text-base text-gray-600 font-medium">
                        {blog.date}
                      </span>
                      <a
                        href="#"
                        className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center lg:items-start gap-2"
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
        <div className="mt-12 flex items-center lg:items-start justify-center gap-6">
          <motion.button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center lg:items-start justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous article"
          >
            ←
          </motion.button>

          <motion.button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center lg:items-start justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg"
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
