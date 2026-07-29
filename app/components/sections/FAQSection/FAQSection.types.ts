export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: FAQ[]
  backgroundColor?: 'light' | 'white'
}
