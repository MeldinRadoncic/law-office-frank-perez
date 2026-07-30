'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export function FAQSection({ faqs = [] }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about criminal defense
          </p>
        </div>

        {/* FAQ Grid - 2 columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 hover:border-blue-400/50 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:no-underline"
              >
                {/* Question */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                  {faq.question}
                </h3>

                {/* Toggle Icon */}
                <div className="ml-4 flex-shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <span className="text-sm font-bold">+</span>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Have more questions?
          </p>
          <button
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105"
          >
            Call for Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
