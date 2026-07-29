# Google SEO Best Practices & Rules
**Law Office Frank Perez, PLLC — SEO Guidelines (2024-2025)**

Latest Google Search Central guidelines. All pages must follow these rules.

---

## 1. METADATA TITLE RULES

**Required Length:** 50-60 characters (optimal)
- Google truncates titles longer than 60 characters on most devices
- Maximum technical limit: 600 pixels
- If longer: title will be cut off in search results

**Format Requirements:**
- Unique title for EVERY page (never repeat titles)
- Place most important keywords first
- Include brand name (can be at end to save space)
- Use pipe (|) to separate elements: `Primary Keyword | Modifier | Brand`
- Avoid keyword stuffing and vague descriptors

**Example:**
```
✓ Immigration Attorney | Green Cards | Law Office Frank Perez  (58 chars)
✗ Best immigration attorney immigration law green card visa attorney services  (too long, keyword stuffed)
```

**Implementation:**
- Set in `export const metadata = createMetadata({ title: '...' })`
- Must match page H1 heading exactly

---

## 2. METADATA DESCRIPTION RULES

**Required Length:** 155-160 characters (optimal)
- Mobile displays: 120-130 characters
- Auto-truncates to fit device width
- No hard character limit from Google

**Content Requirements:**
- Unique description for EVERY page
- 1-2 sentences maximum
- Include practical information (hours, location, pricing when relevant)
- Act as a "pitch" to convince users to click
- Avoid keyword stuffing and long keyword strings

**Example:**
```
✓ Expert immigration and business law services in NY & NJ. 20+ years of experience. Green cards, visas, business transactions. Free consultation available.  (156 chars)
✗ immigration lawyer immigration attorney business law real estate law family law green card visa... (keyword stuffed)
```

**Implementation:**
- Set in `export const metadata = createMetadata({ description: '...' })`

---

## 3. H1 TAG RULES (CRITICAL)

**Required Count:** ONE H1 per page ONLY
- Never more than one H1
- Never zero H1 (every page needs one)

**H1 Content Requirements:**
- Unique H1 for each page
- Describe page's main topic
- Include primary keyword naturally (no stuffing)
- Keep concise: 40-60 characters optimal
- Use sentence case (capitalize first word and proper nouns only)
- Avoid "-ing" verbs, excessive numbers, punctuation

**MUST MATCH METADATA TITLE EXACTLY**
- Page H1 should be identical to metadata title
- Both must match the focus topic of the page
- This consistency signals to Google what the page is about

**Examples:**
```
Page: Immigration Law Services
Metadata Title: Immigration Attorney | Green Cards | Law Office Frank Perez
H1 Tag: <h1>Immigration Attorney | Green Cards | Law Office Frank Perez</h1>

✓ Consistent across all three
✗ If H1 says "Best Immigration Services" but title says "Immigration Attorney" = confusing signal

Page: Business Law Services
Metadata Title: Business Law Attorney | Contracts | Law Office Frank Perez
H1 Tag: <h1>Business Law Attorney | Contracts | Law Office Frank Perez</h1>
```

**Implementation in code:**
```tsx
// In page.tsx
export const metadata = createMetadata({
  title: 'Immigration Attorney | Green Cards | Law Office Frank Perez'
})

// In JSX render:
<h1>Immigration Attorney | Green Cards | Law Office Frank Perez</h1>
```

---

## 4. H2, H3+ HIERARCHY RULES

**Never Skip Heading Levels**
- Structure must be logical: H1 → H2 → H3
- Don't jump from H1 directly to H3
- No H4 or H5 needed for most law firm pages

**Valid Structure:**
```
H1: Page Main Topic
  H2: Section Heading 1
    H3: Subsection (if needed)
  H2: Section Heading 2
    H3: Subsection (if needed)
```

**Invalid Structure (DON'T DO):**
```
H1: Main Topic
  H3: Bad! Skipped H2  ← WRONG
```

**Law Firm Page Example:**
```
H1: Divorce Attorney in New York
  H2: Why Choose Our Firm
  H2: Divorce Services We Offer
    H3: Contested Divorce
    H3: Uncontested Divorce
    H3: Mediation Services
  H2: Client Testimonials
  H2: Frequently Asked Questions
```

**Rules:**
- Multiple H2s on one page = OK
- Each H2 can have multiple H3s = OK
- Rarely go beyond H3 on legal pages
- Each heading should be descriptive and unique

---

## 5. IMAGE ALT TEXT RULES

**Required for Every Image**

**Format:**
- Brief, accurate description (8-15 words typical)
- Describe image purpose in page context
- Include keywords naturally (not keyword stuffing)

**What NOT to do:**
- Don't say "image of" or "picture of"
- Don't repeat text already visible on page
- Don't keyword stuff: `"divorce attorney family law custody mediation Philadelphia attorney"`
- Don't create long verbose descriptions

**Examples:**
```
✓ "Sarah Chen, family law attorney at Law Office Frank Perez"
✓ "Conference room where client consultations occur"
✓ "Award for Best Immigration Attorney 2024"
✗ "family law attorney divorce attorney Philadelphia"
✗ "Picture of our office"
✗ "image of lawyers"
```

**Decorative Images:**
- Use empty alt text: `alt=""`
- Tells screen readers image is decorative, not important

**Implementation:**
```tsx
<Image
  src="/logo.jpg"
  alt="Law Office Frank Perez logo with founding year"
  width={200}
  height={100}
/>
```

---

## 6. OPEN GRAPH (SOCIAL MEDIA) TAGS

**Minimum Required 5 Tags:**
1. `og:title` - Page title (use metadata title)
2. `og:description` - Page description (use metadata description)
3. `og:image` - Social preview image
4. `og:url` - Canonical page URL
5. `og:type` - Content type ("website" for most pages)

**Image Requirements:**
- Size: 1200px × 675px minimum (16:9 aspect ratio)
- Format: JPG or PNG
- Under 5MB file size
- Must be HTTPS
- Must be publicly crawlable

**Current Implementation:**
- Handled by `createMetadata()` in `/lib/seo.ts`
- Default image: `/logo.jpg`
- Can override per page: `createMetadata({ ogImage: '/custom-image.jpg' })`

**Testing:**
- Facebook: facebook.com/sharer/debugger
- LinkedIn: linkedin.com (paste URL in share box)
- Twitter/X: Use native tweet composer

---

## 7. TWITTER CARD TAGS

**Minimum Required:** 1 tag
- `twitter:card` with value: `summary_large_image`

**Optional but Recommended:**
- `twitter:title` - Tweet title
- `twitter:description` - Tweet description
- `twitter:image` - Tweet image (same as OG image)
- `twitter:site` - Your Twitter handle (@asharmalaw)

**Current Implementation:**
- Handled by `createMetadata()` in `/lib/seo.ts`
- Uses large image format for better engagement
- Falls back to Open Graph tags if not specified

---

## 8. CANONICAL URL RULES

**Purpose:** Tell Google which version of a page to index

**Implementation Rules:**
- Use ONE method only (don't mix):
  1. **301 redirects** (strongest - use when possible)
  2. **rel="canonical" link tag** (most common, recommended)
  3. Sitemap inclusion (weakest signal)

**Current Implementation:**
- Set via `createMetadata({ canonical: 'https://lawofficefrankperez.com/about' })`
- Defaults to homepage if not specified
- Never point to 404 pages
- Avoid canonical chains (A→B→C)

**HTTPS Preference:**
- Always prefer HTTPS canonical URL
- Implement 301 redirect from HTTP → HTTPS

**Use Cases:**
- Multiple URLs with same content
- Session IDs in URLs
- Print-friendly versions
- Different mobile/desktop URLs

---

## 9. STRUCTURED DATA (JSON-LD) RULES

**Format:** JSON-LD (required)

**Critical Rules:**
- Must be valid JSON syntax
- Server-side rendered (NOT JavaScript-generated)
- Content must be visible on actual page
- Don't create blank pages to hold structured data
- Must accurately represent page content

**Current Implementation:**
- Organization schema in `layout.tsx`
- Attorney schema in `/lib/seo.ts`
- Includes all firm information:
  - Name, URL, logo
  - Address(es), phone, email
  - Practice areas, languages
  - Social media links

**Validation:**
- Google Rich Results Test: developers.google.com/search/docs/debug/rich-results/test
- Check Search Console for errors

---

## 10. INTERNAL LINKING RULES

**Core Principle:**
- Every important page should have ≥1 link from another page
- Helps users navigate AND helps Google crawl

**Anchor Text Requirements:**
- Descriptive and relevant (not "click here" or "read more")
- Include keywords naturally (no penalty for internal links)
- Help users understand linked content before clicking

**Site Architecture:**
- Logical hierarchy: Homepage → Categories → Specific Pages
- No more than 3-4 clicks to reach any important page
- Link to pages that help understand current page

**Example Structure:**
```
Homepage
├── Immigration Law (category)
│   ├── Employment Visas
│   ├── Family Immigration
│   └── Green Cards
├── Business Law (category)
│   ├── Business Planning
│   └── Contracts
└── Resources
    └── Blog
```

---

## 11. CORE WEB VITALS TARGETS

**Three Critical Metrics:**

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| **LCP** (Largest Contentful Paint) | < 2.5 seconds | How fast main content appears |
| **INP** (Interaction to Next Paint) | < 200ms | How responsive page is to clicks |
| **CLS** (Cumulative Layout Shift) | < 0.1 | How stable layout is (no jumping) |

**Monitoring:**
- Google Search Console → Core Web Vitals report
- PageSpeed Insights: pagespeed.web.dev
- Chrome DevTools

**Impact:** Affects search ranking. "Good" on all three is ideal.

---

## 12. MOBILE-FIRST REQUIREMENTS

**Critical Rule:**
- All pages must work perfectly on mobile
- Mobile version is crawled and indexed (NOT desktop)
- Content must be identical on mobile and desktop

**Requirements:**
- Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Responsive design (all elements scale properly)
- Identical content both versions
- Identical metadata both versions
- Identical structured data both versions
- Same robots directives (no `noindex` differences)

**Current Implementation:**
- Next.js handles responsive design via Tailwind
- Metadata is identical across all devices
- All components are mobile-responsive

---

## 13. ROBOTS META TAGS

**Current Settings (Recommended for Law Firms):**
```
index: true      ← Google can index pages
follow: true     ← Google can follow links
```

**Google-Specific Directives (Current):**
```
max-snippet: -1           ← Show full snippet (no limit)
max-image-preview: large  ← Show large preview images
max-video-preview: -1     ← Show full video previews
```

**Implementation:**
- Set in `createMetadata()` in `/lib/seo.ts`
- Applied to all pages by default
- Can be overridden per page if needed

---

## 14. E-E-A-T REQUIREMENTS (For Legal Services)

**E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness**

**Implementation for Law Firm:**
- ✓ Attorney bio pages (credentials, experience)
- ✓ Case results and testimonials
- ✓ Publishing date on blog posts
- ✓ Author attribution on articles
- ✓ Clear contact information
- ✓ Professional design and branding
- ✓ Accurate business information
- ✓ Secure website (HTTPS)

**Content Requirements:**
- Demonstrate attorney credentials
- Show years of experience
- Include specific case results (when possible)
- Provide detailed service descriptions
- Answer common legal questions

---

## IMPLEMENTATION CHECKLIST FOR NEW PAGES

When creating a new page, follow this checklist:

### Metadata & Titles
- [ ] Metadata title: 50-60 characters, unique, keyword-focused
- [ ] Metadata description: 155-160 characters, unique, compelling
- [ ] H1 tag: MUST match metadata title exactly
- [ ] H1 is only heading level 1 on page

### Structure
- [ ] H2 tags for main sections
- [ ] H3 tags for subsections (under H2 only)
- [ ] No skipped heading levels (no H1 → H3)
- [ ] All headings are descriptive and unique

### Images & Media
- [ ] All images have concise, descriptive alt text
- [ ] Alt text describes image purpose (not decorative)
- [ ] Decorative images use empty alt=""
- [ ] Images are optimized (Next.js Image component)
- [ ] Logo and favicon properly referenced

### Links
- [ ] Internal links use descriptive anchor text
- [ ] Links to related pages included
- [ ] No broken links
- [ ] Canonical URL set correctly (or defaults to homepage)

### Structured Data
- [ ] Page-specific schema markup (if applicable)
- [ ] Organization schema in layout
- [ ] Valid JSON-LD format
- [ ] Content matches visible page content

### Social Media
- [ ] OG image specified (or uses default logo)
- [ ] OG title and description match metadata
- [ ] Twitter card set to summary_large_image
- [ ] Test sharing on Facebook, Twitter, LinkedIn

### Performance
- [ ] Core Web Vitals targets met (check PageSpeed Insights)
- [ ] Mobile responsive and tested
- [ ] Images optimized (no oversized files)
- [ ] No render-blocking resources

### Content Quality
- [ ] E-E-A-T demonstrated (expertise, authority, trustworthiness)
- [ ] Content is unique and original
- [ ] No keyword stuffing
- [ ] Content is helpful to users (people-first approach)
- [ ] Grammar and spelling correct

---

## TESTING TOOLS & VALIDATION

**Google Official Tools:**
1. **Rich Results Test** - Validate structured data
   - https://developers.google.com/search/docs/debug/rich-results/test

2. **PageSpeed Insights** - Check Core Web Vitals
   - https://pagespeed.web.dev

3. **Google Search Console** - Monitor index status, Core Web Vitals, errors
   - https://search.google.com/search-console

4. **URL Inspection Tool** - Check if page is crawlable and indexed
   - In Search Console, select site, paste URL

**Social Media Testing:**
- **Facebook**: facebook.com/sharer/debugger (paste URL)
- **LinkedIn**: linkedin.com (use share feature)
- **Twitter/X**: Native tweet composer

**Browser Tools:**
- Chrome DevTools (Lighthouse tab)
- Google Chrome Extension: "Lighthouse"

---

## AUDIT SCHEDULE

**Before Launch:**
- [ ] All pages pass Rich Results Test
- [ ] Core Web Vitals all "Good" status
- [ ] All metadata titles 50-60 chars
- [ ] All H1 tags match metadata titles
- [ ] No broken internal links
- [ ] Mobile responsive verified

**Monthly:**
- [ ] Check Google Search Console for errors
- [ ] Monitor Core Web Vitals trends
- [ ] Review new pages meet all rules
- [ ] Check mobile-first indexing status

**Quarterly:**
- [ ] Audit titles and descriptions (update if needed)
- [ ] Review site structure and internal links
- [ ] Check competitors' title/description lengths
- [ ] Verify all images have proper alt text

---

## QUICK REFERENCE

| Element | Min | Optimal | Max | Notes |
|---------|-----|---------|-----|-------|
| Meta Title | - | 50-60 chars | 600px | Unique per page |
| Meta Description | - | 155-160 chars | No limit | 120-130 on mobile |
| H1 per Page | 1 | 1 | 1 | MUST match title |
| H2 per Page | 0 | Multiple | Many | Section headings |
| Image Alt Text | - | 8-15 words | - | Descriptive, natural |
| OG Image | - | 1200×675px | 5MB | 16:9 aspect ratio |
| LCP (Core Web Vitals) | - | < 2.5s | - | Load performance |
| INP (Core Web Vitals) | - | < 200ms | - | Responsiveness |
| CLS (Core Web Vitals) | - | < 0.1 | - | Visual stability |

---

**Document Last Updated:** July 7, 2026
**Version:** 1.0
**Status:** Active
**All pages must follow these rules before deployment.**
