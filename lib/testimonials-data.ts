import type { Testimonial } from '@/app/components/sections'

export interface Review extends Testimonial {
  firmResponse?: string
}

export const bestTestimonials: Testimonial[] = []

export const allReviews: Review[] = []
