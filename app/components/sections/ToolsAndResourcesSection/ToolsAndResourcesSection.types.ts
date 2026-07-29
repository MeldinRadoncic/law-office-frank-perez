/**
 * ToolsAndResourcesSection Component Types
 */

export interface Tool {
  id: string
  title: string
  description: string
  icon: string
  ctaText: string
  ctaHref: string
}

export interface ToolsAndResourcesSectionProps {
  title: string
  subtitle: string
  tools: Tool[]
  backgroundColor?: 'light' | 'white'
}
