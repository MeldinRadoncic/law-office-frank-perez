import type { ReactNode } from 'react'

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  href?: string
  isPublished?: boolean
}

export interface BlogPostLayoutProps {
  content: ReactNode
  recentBlogs: BlogPost[]
}
