/**
 * PracticeAreasSection Component Types
 */

export interface PracticeArea {
  id: string
  icon: string
  title: string
  description: string
  href: string
}

export interface PracticeAreasSectionProps {
  title: string
  description: string
  practiceAreas: PracticeArea[]
  backgroundColor?: 'light' | 'white'
}
