export const getNavLinks = () => [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Immigration Law',
    href: '/',
    submenu: [
      { label: 'Employment Visas', href: '/immigration/employment-visas' },
      { label: 'Family Immigration', href: '/immigration/family-immigration' },
      { label: 'Green Cards', href: '/immigration/green-cards' },
      { label: 'Asylum Law', href: '/immigration/asylum' },
    ]
  },
  {
    label: 'Business Law',
    href: '/',
    submenu: [
      { label: 'Business Planning', href: '/business/planning' },
      { label: 'Commercial Transactions', href: '/business/transactions' },
      { label: 'Corporate Immigration', href: '/business/corporate' },
    ]
  },
  {
    label: 'Family Law',
    href: '/family-law',
    submenu: [
      { label: 'Divorce', href: '/family-law/divorce' },
      { label: 'Custody', href: '/family-law/custody' },
      { label: 'Child Support', href: '/family-law/child-support' },
    ]
  },
  { label: 'Real Estate Law', href: '/real-estate' },
  { label: 'About', href: '/about' },
]
