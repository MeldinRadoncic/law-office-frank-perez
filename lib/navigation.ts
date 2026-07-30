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
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'FAQ',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
]
