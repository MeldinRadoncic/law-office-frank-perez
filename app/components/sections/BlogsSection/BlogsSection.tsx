interface Blog {
  title?: string
  description?: string
}

interface BlogsSectionProps {
  blogs: Blog[]
  title: string
  description: string
}

export function BlogsSection({
  blogs,
  title,
  description,
}: BlogsSectionProps) {
  // Hide section if no content provided
  if (!blogs || blogs.length === 0) {
    return null
  }

  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
