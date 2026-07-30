export interface NavLink {
  label: string
  href: string
}

export const getNavLinks = (): NavLink[] => [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Practice Areas',
    href: '#practice-areas',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]
