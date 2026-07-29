export interface Testimonial {
  id: string
  name: string
  rating: number
  review: string
  date: string
}

export interface TestimonialsSectionProps {
  backgroundColor?: 'white' | 'light'
}
