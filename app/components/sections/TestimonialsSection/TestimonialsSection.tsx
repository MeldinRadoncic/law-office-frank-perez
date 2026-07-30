export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Frank Perez helped me navigate a complex federal case with expertise I couldn\'t find anywhere else. His experience as both a prosecutor and defense attorney gave him unique insights.",
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
  ]

  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            See what our clients say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-white border border-gray-200 hover:border-blue-400/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="mb-6 text-3xl">★★★★★</div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Ready to work with a proven criminal defense attorney?
          </p>
          <a
            href="tel:+12148289911"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
