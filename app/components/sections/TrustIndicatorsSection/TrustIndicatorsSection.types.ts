/**
 * TrustIndicatorsSection Component Types
 */

export interface StatCard {
  number: string
  label: string
  description?: string
}

export interface TrustIndicatorsSectionProps {
  stats?: StatCard[]
  backgroundColor?: 'light' | 'white'
}
