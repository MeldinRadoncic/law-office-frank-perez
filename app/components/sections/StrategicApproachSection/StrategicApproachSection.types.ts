/**
 * StrategicApproachSection Component Types
 */

export interface ValuePoint {
  icon: string
  title: string
  description: string
}

export interface StrategicApproachSectionProps {
  title: string
  subtitle: string
  mainDescription: string
  values: ValuePoint[]
  backgroundColor?: 'light' | 'white'
}
