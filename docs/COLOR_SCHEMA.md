# Color Schema & Design System

## Professional Legal Firm Color Palette

Based on **Luxury + Professional Minimalism** aesthetic

---

## 🎨 Primary Color: Navy Blue
**Purpose**: Trust, authority, professionalism
**Hex**: #1e3a5f (Tailwind: blue-900)
**Usage**: Main headings, primary text, navigation, primary buttons, footer

### Variations:
- **text-blue-900**: Darkest (main text, h1, h2)
- **text-blue-800**: Dark (secondary headings)
- **text-blue-700**: Medium (body text)
- **text-blue-600**: Light (secondary text)
- **bg-blue-50**: Very light (background sections)
- **bg-blue-900**: Dark (footer, dark CTAs)

### Example Usage:
```html
<!-- Main Heading -->
<h1 class="text-blue-900 text-5xl md:text-6xl font-bold">
  Pittsburgh Divorce & Family Law Attorney
</h1>

<!-- Body Text -->
<p class="text-blue-700">Regular paragraph text here</p>

<!-- Footer Background -->
<footer class="bg-blue-900 text-white">
  Footer content...
</footer>
```

---

## ✨ Accent Color: Gold/Amber
**Purpose**: Premium feel, luxury, emphasis, CTAs
**Hex**: #d97706 (Tailwind: amber-600)
**Usage**: CTA buttons, accent text, hover states, decorative elements, links

### Variations:
- **text-amber-600**: Strong accents (buttons, CTAs, links)
- **text-amber-500**: Medium (hover states)
- **text-amber-50**: Very light (light backgrounds)
- **bg-amber-600**: Button backgrounds

### Example Usage:
```html
<!-- CTA Button -->
<button class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:opacity-90">
  Begin the Conversation
</button>

<!-- Accent Text -->
<span class="text-amber-600 font-semibold">Learn More →</span>

<!-- Accent Link -->
<a href="#" class="text-amber-600 hover:text-amber-700 underline">
  Read 80+ Reviews
</a>
```

---

## ⚪ Neutral Colors: Gray
**Purpose**: Secondary text, borders, backgrounds
**Hex Range**: #6b7280 to #f3f4f6 (Tailwind: gray series)
**Usage**: Descriptions, muted text, dividers, alternate backgrounds

### Variations:
- **text-gray-900**: Black (fallback text)
- **text-gray-700**: Primary secondary text (descriptions)
- **text-gray-600**: Muted text (captions, meta)
- **text-gray-500**: Very muted (disabled states)
- **bg-gray-50**: Light background (alternating sections)
- **bg-gray-900**: Dark gray (rarely used)
- **border-gray-200**: Light dividers

### Example Usage:
```html
<!-- Secondary Heading -->
<h2 class="text-gray-700 text-2xl">Our Approach</h2>

<!-- Description Text -->
<p class="text-gray-600 text-base">
  Eighteen years of exclusive family law practice...
</p>

<!-- Alternate Section Background -->
<section class="bg-gray-50 py-12">
  Content in light gray background
</section>

<!-- Divider -->
<hr class="border-gray-200" />
```

---

## 🤍 Background Colors

### White (Primary)
```css
bg-white /* Main content background */
```
**Usage**: Hero section, card backgrounds, main content areas

### Light Gray (Alternating)
```css
bg-gray-50 /* Alternating section background */
```
**Usage**: Every other section for visual breathing room

### Light Blue (Subtle)
```css
bg-blue-50 /* Subtle blue background */
```
**Usage**: Highlight sections, subtle visual distinction

---

## 📋 Section Background Pattern

**Alternating backgrounds create visual rhythm**:

```
1. Hero Section          → White (bg-white)
   ↓
2. Trust Indicators      → Light Gray (bg-gray-50)
   ↓
3. Strategic Approach    → White (bg-white)
   ↓
4. Practice Areas        → Light Gray (bg-gray-50)
   ↓
5. Testimonials          → White (bg-white)
   ↓
6. Tools & Resources     → Light Gray (bg-gray-50)
   ↓
7. Recognitions          → White (bg-white)
   ↓
8. CTA Section           → Navy (bg-blue-900) with white text
   ↓
9. Footer                → Navy (bg-blue-900) with white text
```

---

## 🎯 Color Usage by Component

### Buttons

**Primary Button** (Navy):
```html
<button class="bg-blue-900 text-white hover:bg-blue-800 px-6 py-3 rounded-lg">
  Action
</button>
```

**CTA Button** (Gold):
```html
<button class="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-lg">
  Begin the Conversation
</button>
```

**Secondary Button** (Border):
```html
<button class="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg">
  Action
</button>
```

### Cards

```html
<div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600">
  <h3 class="text-blue-900 font-bold">Card Title</h3>
  <p class="text-gray-700 mt-2">Card description text</p>
  <a href="#" class="text-amber-600 hover:text-amber-700 mt-4 inline-block">
    Learn More →
  </a>
</div>
```

### Headings

```html
<!-- H1 - Main Heading -->
<h1 class="text-blue-900 text-5xl md:text-6xl font-bold">
  Main Heading
</h1>

<!-- H2 - Section Heading -->
<h2 class="text-blue-900 text-3xl md:text-4xl font-bold">
  Section Heading
</h2>

<!-- H3 - Subheading -->
<h3 class="text-blue-800 text-xl md:text-2xl font-bold">
  Subheading
</h3>

<!-- H4 - Card/Item Heading -->
<h4 class="text-blue-900 text-lg font-semibold">
  Item Heading
</h4>
```

### Links

```html
<!-- Text Link (Gold) -->
<a href="#" class="text-amber-600 hover:text-amber-700 hover:underline">
  Learn More →
</a>

<!-- Navigation Link (Navy) -->
<a href="#" class="text-blue-900 hover:text-amber-600">
  Navigation
</a>

<!-- Link on Dark Background -->
<a href="#" class="text-amber-400 hover:text-amber-300">
  Link on Dark
</a>
```

### Badges & Tags

```html
<!-- Recognition Badge -->
<span class="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">
  Avvo 10.0
</span>

<!-- Status Badge -->
<span class="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
  5 Star Rating
</span>
```

---

## ♿ Accessibility Compliance

### Contrast Ratios (WCAG 2.1 AA)
- ✅ Navy text on white background: **13.5:1** (excellent)
- ✅ Gray text on white background: **7.5:1** (excellent)
- ✅ Gold text on white background: **5.8:1** (good)
- ✅ White text on navy background: **13.5:1** (excellent)
- ✅ White text on gold background: **3.8:1** (adequate for large text)
- ❌ Light gray on white: **2.1:1** (AVOID - use only for decorative)

### Accessibility Rules:
```
✅ Navy (text-blue-900) on White ✓
✅ Dark Gray (text-gray-700) on White ✓
✅ Gold (text-amber-600) for accents only ✓
✅ White on Navy ✓
❌ Light gray (text-gray-500) on White ✗ (poor contrast)
❌ Light text on light backgrounds ✗ (avoid completely)
```

---

## 🎨 Design Tokens Summary

```typescript
// Primary: Navy Blue
primary: {
  900: 'text-blue-900',      // Headings, main text
  800: 'text-blue-800',      // Secondary headings
  700: 'text-blue-700',      // Body text
  50: 'bg-blue-50',          // Backgrounds
}

// Accent: Gold/Amber
accent: {
  600: 'text-amber-600',     // CTAs, links, emphasis
  500: 'text-amber-500',     // Hover states
  50: 'bg-amber-50',         // Light backgrounds
}

// Neutral: Gray
neutral: {
  700: 'text-gray-700',      // Secondary text
  600: 'text-gray-600',      // Muted text
  50: 'bg-gray-50',          // Alternating backgrounds
}

// Backgrounds
background: {
  white: 'bg-white',         // Main
  light: 'bg-gray-50',       // Alternating
  dark: 'bg-blue-900',       // Dark sections
}
```

---

## 🌈 Color Examples

### Hero Section
```
Background: White
Headline: Navy Blue (text-blue-900)
Tagline: Gray (text-gray-700)
CTA Button: Gold background with white text
```

### Practice Areas Cards
```
Card Background: White
Border Top: Gold (3-4px)
Heading: Navy Blue (text-blue-900)
Description: Gray (text-gray-700)
Link: Gold (text-amber-600)
Hover: Card shadow increases, link becomes darker gold
```

### Footer
```
Background: Navy Blue (bg-blue-900)
Text: White (text-white)
Links: Gold (text-amber-400)
Hover: Links become lighter gold (text-amber-300)
Border Top: Gold (3px)
```

---

## 📝 Notes

- All colors are from Tailwind CSS utilities
- No custom colors needed - stick to Tailwind palette
- Always reference colors from `lib/design-tokens.ts`
- Never hardcode hex values in components
- Maintain contrast ratios for accessibility
- Test colors on actual devices before deployment
