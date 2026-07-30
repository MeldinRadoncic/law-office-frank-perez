/**
 * RecognitionsSection Component Types
 */

export interface Recognition {
  id: string
  title: string
  year: string
  icon?: string
}

export interface RecognitionsSectionProps {
  title: string
  subtitle: string
  recognitions: Recognition[]
  backgroundColor?: 'light' | 'white'
}
