'use client'

import { Container, Heading, Text } from '@/app/components/common'
import { colors, paragraph } from '@/lib/design-tokens'
import type { BlogPostLayoutProps, BlogPost } from './BlogPostLayout.types'

export function BlogPostLayout({
  content,
  recentBlogs,
}: BlogPostLayoutProps) {
  return (
    <article className={`${colors.background.white} py-16 md:py-24 lg:py-32`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg">
            {content}
          </div>

          {/* Sidebar - Recent Blogs */}
          <aside className="lg:col-span-1">
            <div className={`${colors.background.light} p-6 rounded-lg sticky top-20`}>
              <Heading level="h3" size="lg" color="primary" className="mb-6">
                Recent Blog Posts
              </Heading>

              <div className="space-y-6">
                {recentBlogs.map((blog, index) => (
                  <div key={blog.id}>
                    <div className={index === 0 ? 'pb-6 border-b-4 border-amber-600' : 'pb-6 border-b border-gray-300'}>
                      {blog.href && blog.href !== '#' ? (
                        <a href={blog.href} className="hover:text-amber-600 transition-colors">
                          <Heading level="h4" size="sm" color="primary" className="mb-2">
                            {blog.title}
                          </Heading>
                        </a>
                      ) : (
                        <Heading level="h4" size="sm" color="primary" className="mb-2">
                          {blog.title}
                        </Heading>
                      )}
                      <Text className={`${paragraph.light.base} text-sm text-gray-600 mb-3`}>
                        {blog.description}
                      </Text>
                      <span className={`text-xs ${blog.isPublished ? 'text-amber-600 font-semibold' : 'text-gray-500'}`}>
                        {blog.date}
                      </span>
                    </div>
                    {index === 0 && <div className="my-6"></div>}
                  </div>
                ))}
              </div>

              {/* CTA Box */}
              <div className={`mt-8 p-4 ${colors.accent[600]} rounded-lg text-white`}>
                <Heading level="h4" size="sm" className="mb-2 text-white">
                  Need Legal Guidance?
                </Heading>
                <Text className="text-sm mb-4 text-white">
                  Our immigration attorneys are ready to help with your questions.
                </Text>
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 bg-white text-amber-600 font-semibold rounded hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPostLayout
