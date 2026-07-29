/**
 * StrategicApproachSection Component Types
 */

export interface ValuePoint {
  title: string
  description: string
  icon?: string
}

export interface StrategicApproachSectionProps {
  title: string
  subtitle: string
  mainDescription: string
  values: ValuePoint[]
  backgroundColor?: 'light' | 'white'
}
