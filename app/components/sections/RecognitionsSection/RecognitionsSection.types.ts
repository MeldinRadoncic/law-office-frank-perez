/**
 * RecognitionsSection Component Types
 */

export interface Recognition {
  id: string
  title: string
  icon?: string
  year?: string
}

export interface RecognitionsSectionProps {
  title: string
  subtitle: string
  recognitions: Recognition[]
  backgroundColor?: 'light' | 'white'
}
