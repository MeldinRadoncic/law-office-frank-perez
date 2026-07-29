# Law Office Frank Perez - Project Guidelines

## Project Overview

This is a modern, professional website for **Law Office Frank Perez** - a specialized law firm website built with Next.js, TypeScript, and Tailwind CSS.

### Tech Stack
- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Status**: Under Development (Section placeholders showing "IN PROGRESS")

---

## Reference Model: Law Office of Frank Perez P.C.

This project is modeled after professional law firm websites like:
- **Law Office of Frank Perez P.C.** (https://frankperezlaw.com/)

### Frank Perez Law Firm Structure (Reference):
- **Specialization**: International criminal defense
- **Experience**: 40+ years
- **Founder**: Frank Perez (Former Dallas Police Officer 1982, Former Assistant District Attorney)
- **Practice Areas**: 
  - Federal crimes (conspiracy, drug trafficking, sanctions, extradition)
  - International criminal defense
  - OFAC/sanctions issues
  - State criminal defense
  - Personal injury claims
  - Contract disputes
  - Civil litigation

- **Key Messaging**:
  - "Your Trusted Advocate"
  - "40+ Years of Experience"
  - "I'm On Your Side!"
  - Emphasis on experience handling complex cases
  - Proven track record of successful defenses

- **Office Details**:
  - Hours: MON - FRI: 8:30 AM - 5:30 PM
  - Phone: (214) 828-9911
  - Location: Texas (Dallas)

- **Website Features**:
  - Attorney bio/background (25% of page)
  - Clear practice areas
  - Client testimonials
  - FAQ section addressing common legal questions
  - Strong CTA ("Call Today" buttons)
  - Emphasis on criminal defense expertise
  - Trust indicators (years of experience, track record)

---

## Project Structure

```
/app
  /components
    /sections          # All homepage sections
  /layout.tsx         # Root layout
  /page.tsx           # Homepage
  /not-found.tsx      # 404 page

/lib
  /design-tokens.ts   # Color, typography, spacing system
  /seo.ts            # SEO utilities and metadata helpers
  /validation.ts     # Form validation utilities
  /animations.ts     # Animation configurations
  /testimonials-data.ts  # Client testimonials (currently empty)

/docs
  /GOOGLE_SEO_RULES.md      # SEO guidelines and best practices
  /COLOR_SCHEMA.md          # Design system documentation
  /HOMEPAGE_STRUCTURE.md    # Homepage section structure

/public               # Images and assets
```

---

## Homepage Sections (IN PROGRESS)

1. **Navigation Header** - Logo, menu, contact CTA
2. **Hero Section** - Main headline, tagline, CTA button
3. **Trust Indicators** - Years of experience, cases handled, success rate
4. **Strategic Approach** - How the firm works (analysis, guidance, planning, support)
5. **Practice Areas** - Main legal services (cards with descriptions)
6. **About Section** - Attorney bio, background, experience
7. **Recognitions** - Bar associations, certifications, awards
8. **Tools & Resources** - Service categories for exploration
9. **Testimonials** - Client reviews and success stories
10. **Blog Section** - Latest articles and legal insights
11. **FAQ Section** - Common questions answered
12. **CTA Section** - Final call-to-action
13. **Footer Section** - Contact info, links, social media

---

## Development Guidelines

### When Adding New Content:

1. **Follow SEO Rules** - See `docs/GOOGLE_SEO_RULES.md`
   - Title: 50-60 characters, unique per page
   - Description: 155-160 characters
   - H1 must match metadata title
   - Alt text for all images
   - Focus on expertise/trust signals

2. **Use Design System** - See `docs/COLOR_SCHEMA.md`
   - Navy Blue (text-blue-900) for primary text and headings
   - Amber Gold (text-amber-600) for CTAs and emphasis
   - Gray for secondary content and muted text
   - Alternating white/gray backgrounds for visual rhythm
   - Professional, minimalist aesthetic

3. **Component Guidelines**
   - Keep components focused and single-responsibility
   - Use Tailwind CSS utilities (no custom CSS)
   - Implement responsive design (mobile-first)
   - No unused props or features
   - Reuse common components (Button, Card, Text, etc.)

4. **Content Best Practices**
   - Emphasize attorney expertise and experience
   - Include specific case results/outcomes when possible
   - Use trust-building language ("proven track record", "years of experience")
   - Include clear CTAs (phone numbers, "Schedule Consultation", "Call Now")
   - Add attorney bio with background/credentials

5. **DO NOT**
   - Commit unnecessary files to git
   - Add multiple commits for single features
   - Modify the project name
   - Break existing component structure
   - Use hardcoded contact information (use centralized config)

---

## Current Status

**All homepage sections are currently showing "IN PROGRESS" placeholders**

Ready for customization and content population with:
- Real company information
- Attorney bios and credentials
- Practice area details
- Client testimonials
- Contact information
- Office hours and locations

---

## To Be Completed

### Company Information:
- [ ] Law firm name and location
- [ ] Attorney name(s) and credentials
- [ ] Years of experience
- [ ] Phone number(s)
- [ ] Email address
- [ ] Office hours
- [ ] Address(es)

### Content:
- [ ] Attorney bio/background
- [ ] Practice areas and descriptions
- [ ] Client testimonials
- [ ] Blog posts/articles
- [ ] FAQ content
- [ ] Service descriptions

### Visual Assets:
- [ ] Attorney photos
- [ ] Office photos
- [ ] Award/certification images
- [ ] Logo and branding

---

**Last Updated**: July 29, 2026
**Status**: Template Setup Complete - Ready for Content Development
**Reference Model**: Law Office of Frank Perez P.C. (frankperezlaw.com)
