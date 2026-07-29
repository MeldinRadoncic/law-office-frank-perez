export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ProcessTimelineSectionProps {
  title: string
  subtitle?: string
  steps: ProcessStep[]
}
