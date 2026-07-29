# Contributing Guide

## Code Standards

### 1. **Design Tokens FIRST**

Every styling decision must start with design tokens. If you need a value, check `lib/design-tokens.ts` first.

#### ✅ Correct Pattern
```tsx
import { colors, spacing, paragraph, radius, shadows } from '@/lib/design-tokens'

export default function MyComponent() {
  return (
    <div className={`${colors.background.white} ${spacing.padding.md} ${radius.lg}`}>
      <h2 className={`${colors.primary[900]} ${paragraph.light.base}`}>
        Title
      </h2>
    </div>
  )
}
```

#### ❌ Wrong - Hardcoded Tailwind
```tsx
export default function MyComponent() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-gray-900 text-base">
        Title
      </h2>
    </div>
  )
}
```

### 2. **Component File Structure**

Every reusable component must follow this structure:

```
ComponentName/
├── ComponentName.tsx        # Main component (export default)
├── ComponentName.types.ts   # TypeScript interfaces
└── index.ts                 # Re-export for clean imports
```

#### Example: Button Component
```tsx
// Button/Button.tsx
'use client'
import { Button } from './Button'
export default Button

// Button/Button.types.ts
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

// Button/index.ts
export { default } from './Button'
export type { ButtonProps } from './Button.types'
```

### 3. **Type Safety**

Always use `type` keyword for TypeScript-only imports:

```tsx
// ✅ Correct
import { Button } from '@/app/components/common'
import type { ButtonProps } from '@/app/components/common'

// ❌ Wrong
import { Button, ButtonProps } from '@/app/components/common'
```

### 4. **Responsive Design**

All components must be responsive. Use mobile-first approach:

```tsx
// ✅ Correct - Mobile first
<div className="text-sm md:text-base lg:text-lg">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
</div>

// ❌ Wrong - Desktop first
<div className="lg:text-lg md:text-base">
```

### 5. **No Prop Drilling**

Avoid passing props through multiple levels. Use composition or centralized data:

```tsx
// ✅ Correct - Self-contained
<TestimonialsSection/>

// ❌ Wrong - Props passed everywhere
<Page testimonials={data} title={title} subtitle={subtitle}>
  <TestimonialsSection testimonials={testimonials} title={title} subtitle={subtitle}/>
</Page>
```

## Adding New Pages

### Quick Checklist

- [ ] Create folder in `app/[category]/[page]/`
- [ ] Create `page.tsx` with proper metadata
- [ ] Use only existing reusable components
- [ ] Apply design tokens (no hardcoded classes)
- [ ] Add SEO meta tags (50-60 char title, 155-160 char description)
- [ ] Include H1 that matches meta title
- [ ] Ensure proper heading hierarchy (H1 → H2 → H3)
- [ ] Test on mobile/tablet/desktop
- [ ] Run TypeScript check: `npm run type-check`

### Template

```tsx
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import {
  NavigationHeader,
  ServiceHero,
  CTASection,
  FAQSection,
  FooterSection,
  type FAQ,
} from '@/app/components/sections'
import { Container, Heading, Text } from '@/app/components/common'
import { colors, spacing, paragraph } from '@/lib/design-tokens'

export const metadata: Metadata = createMetadata({
  title: 'Page Title (50-60 chars)',
  description: 'Meta description (155-160 chars)',
  keywords: ['keyword1', 'keyword2'],
  canonical: 'https://lawofficefrankperez.com/page-path',
})

const navLinks = [
  { label: 'Home', href: '/' },
  // ... navigation
]

const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Question?',
    answer: 'Answer.',
  },
]

export default function PageName() {
  return (
    <>
      <NavigationHeader navLinks={navLinks} logoUrl="/logo.jpg" companyName="Law Office Frank Perez" phone="(646) 492-9700" />
      <ServiceHero headline="Page Title" description="Page description" />
      
      {/* Your custom sections */}
      <section className={`${colors.background.white} py-16 md:py-24 lg:py-32`}>
        <Container>
          <Heading level="h2" size="2xl" color="primary">
            Section Title
          </Heading>
          <Text className={paragraph.light.base}>
            Section content
          </Text>
        </Container>
      </section>

      {/* Reusable sections */}
      <FAQSection faqs={faqs}/>
      <CTASection/>
      <FooterSection/>
    </>
  )
}
```

## SEO Checklist

For every new page:

- [ ] **Meta Title**: 50-60 characters, unique, keyword-focused
  - Example: "H-1B Visa Attorney | Specialty Worker Sponsorship" (54 chars)

- [ ] **Meta Description**: 155-160 characters, unique, compelling
  - Example: "Expert H-1B visa sponsorship for IT, engineering, healthcare professionals. Filing, cap lottery, extensions, green cards. Free consultation available."

- [ ] **H1 Tag**: Matches meta title exactly (appears once on page)
  - `<Heading level="h1">H-1B Visa Attorney | Specialty Worker Sponsorship</Heading>`

- [ ] **Heading Hierarchy**: H1 → H2 → H3 (no skipped levels)
  - H1 (page title)
  - H2 (major sections)
  - H3 (subsections)

- [ ] **Image Alt Text**: Descriptive, 8-15 words
  - Example: "H-1B specialty occupation work visa for skilled professionals"

- [ ] **Internal Links**: Link to relevant pages
  - Example: Link from visa pages to green card page

- [ ] **Canonical URL**: Set for every page
  - `canonical: 'https://lawofficefrankperez.com/immigration/h1b'`

## Component Reusability

### When to Make a Component Reusable

- Used in 2+ places → Make it reusable
- Shared styling logic → Extract to component
- Repeated patterns → Centralize

### Truly Reusable = Self-Contained

```tsx
// ✅ Example: TestimonialsSection
<TestimonialsSection/>

// Uses internally:
// - Hardcoded testimonials data from lib/testimonials-data.ts
// - Hardcoded DEFAULT_TITLE and DEFAULT_SUBTITLE
// - Hardcoded 10 review limit
// No customization needed
```

```tsx
// ❌ Not Reusable - Requires Props
<TestimonialsSection 
  testimonials={data}
  title="..."
  subtitle="..."
/>

// Forces every page to pass same data
// Not truly reusable
```

## Testing Responsive Design

### Desktop (1440px)
- [ ] All 3 columns showing in grids
- [ ] Desktop navigation visible
- [ ] Large heading sizes

### Tablet (768px)
- [ ] 2 columns in grids
- [ ] Touch-friendly buttons
- [ ] Tablet navigation

### Mobile (375px)
- [ ] 1 column layouts
- [ ] Readable text (16px minimum)
- [ ] Hamburger menu
- [ ] Touch-friendly spacing (44px+ tap targets)

## Code Review Checklist

Before committing:

- [ ] Design tokens used (no hardcoded Tailwind)
- [ ] TypeScript strict mode passes
- [ ] No unused imports
- [ ] Proper prop types defined
- [ ] Component follows file structure
- [ ] Responsive design tested
- [ ] Semantic HTML used
- [ ] Accessibility (alt text, aria labels)
- [ ] SEO metadata correct
- [ ] No console errors
- [ ] Git commit message is clear

## Git Commit Message Format

```
Type: Brief description (50 chars max)

Optional detailed explanation of what changed and why.

- Bullet point 1
- Bullet point 2
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring
- `docs`: Documentation
- `style`: Code style (formatting)
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Maintenance

### Example
```
feat: Add H-1B visa page with SEO optimization

Created dedicated H-1B visa page with:
- 50-60 character SEO title
- 155-160 character meta description
- 6 comprehensive FAQs using centralized FAQSection
- 5-step process timeline
- Client testimonials using TestimonialsSection
- E-E-A-T signals and legal expertise highlights

Follows all Google SEO rules and uses design tokens throughout.
```

## Performance Guidelines

- Use `next/image` for all images (automatic optimization)
- Lazy load components with `next/dynamic` if needed
- Server components by default
- Client components only for interactivity (`'use client'`)
- Avoid CSS-in-JS when possible (use Tailwind + design tokens)
- Minimize bundle size (tree-shake unused code)

## Questions?

Refer to:
- `README.md` - Project overview
- `lib/design-tokens.ts` - Available tokens
- `docs/GOOGLE_SEO_RULES.md` - Detailed SEO rules
- Existing pages - Copy working patterns

Happy coding! 🚀
