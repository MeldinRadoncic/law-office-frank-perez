export interface CardData {
  title: string
  subtitle: string
  description: string
  href: string
  details: string[]
  icon?: string
}

export interface CardSectionProps {
  title: string
  titleLine2?: string
  subtitle?: string
  cards: CardData[]
  badgeLabel?: string
  badgeIcon?: string
}
