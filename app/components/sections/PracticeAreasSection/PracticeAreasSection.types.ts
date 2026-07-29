/**
 * PracticeAreasSection Component Types
 */

export interface PracticeArea {
  id: string
  title: string
  description: string
  icon?: string
  href?: string
}

export interface PracticeAreasSectionProps {
  title: string
  description: string
  practiceAreas: PracticeArea[]
  backgroundColor?: 'light' | 'white'
}
