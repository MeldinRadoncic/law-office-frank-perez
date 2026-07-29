export interface Blog {
  id: string
  title: string
  description: string
  category: string
  date: string
  author: string
  href: string
  image?: string
}

export interface BlogsSectionProps {
  title: string
  description: string
  blogs: Blog[]
  backgroundColor?: 'light' | 'white'
}
