/**
 * Design Tokens - Single Source of Truth
 * Change values here to update the entire website
 */

// ============================================
// COLORS - Professional Legal Firm Palette
// ============================================

export const colors = {
  // Primary Colors (Black - Clean & Professional)
  primary: {
    900: 'text-gray-900',        // Darkest - Main headings (BLACK)
    800: 'text-gray-800',        // Dark - Secondary headings
    700: 'text-gray-700',        // Medium - Body text
    600: 'text-gray-600',        // Light - Secondary text
    50: 'bg-gray-50',            // Lightest - Backgrounds
  },

  // Accent Colors (Navy Blue - Professional & Strong)
  accent: {
    700: 'text-blue-950',        // Darkest accent
    600: 'text-blue-900',        // Strong accents, CTAs, hover
    500: 'text-blue-800',        // Medium accents
    400: 'text-blue-700',        // Light accent text
    300: 'text-blue-600',        // Very light accent
    50: 'bg-blue-50',            // Light backgrounds
    100: 'bg-blue-100',          // Lighter backgrounds
  },

  // Accent Border Colors (for hover & active states)
  accentBorderColor: {
    600: 'border-blue-900',      // Strong border
    500: 'border-blue-800',      // Medium border
    300: 'border-blue-600',      // Light border
  },

  // Neutral Colors (Gray - Professional)
  neutral: {
    900: 'text-gray-900',        // Black text (fallback)
    700: 'text-gray-700',        // Secondary text, descriptions
    600: 'text-gray-600',        // Muted text, captions
    500: 'text-gray-500',        // Disabled text
    50: 'bg-gray-50',            // Light section backgrounds
    25: 'bg-gray-25',            // Very light backgrounds
  },

  // Background Colors
  background: {
    white: 'bg-white',           // Main background
    light: 'bg-gray-50',         // Section alternating
    lighter: 'bg-blue-50',       // Subtle blue tint
    dark: 'bg-slate-950',        // Dark sections (navbar, footer, CTAs) - CENTRALIZED
  },

  // Text on Dark Backgrounds
  onDark: {
    primary: 'text-white',       // Main text on dark
    secondary: 'text-gray-100',  // Secondary text on dark
    accent: 'text-blue-400',     // Accent on dark
  },

  // Status Colors (Semantic)
  success: 'text-green-600',
  warning: 'text-amber-600',
  error: 'text-red-600',
  info: 'text-blue-600',

  // Borders & Dividers
  border: {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    dark: 'border-blue-200',
  },
}

// ============================================
// BACKGROUND COLORS (for bg- utilities)
// ============================================

export const bgColors = {
  primary: 'bg-slate-950',        // Replaced old navy-blue with slate-950
  primaryLight: 'bg-blue-50',
  accent: 'bg-blue-900',
  accentLight: 'bg-blue-50',
  white: 'bg-white',
  lightGray: 'bg-gray-50',
  darkGray: 'bg-slate-950',       // Matches navbar dark color
}

// ============================================
// TEXT COLORS (for text- utilities)
// ============================================

export const textColors = {
  primary: 'text-blue-900',
  secondary: 'text-gray-700',
  tertiary: 'text-gray-600',
  accent: 'text-blue-900',
  white: 'text-white',
  muted: 'text-gray-500',
}

// ============================================
// TYPOGRAPHY - Font Sizes (Responsive)
// ============================================

export const fontSize = {
  // Extra small
  xs: 'text-xs md:text-xs',           // 12px on all screens

  // Small
  sm: 'text-sm md:text-sm',           // 14px on all screens

  // Base/Normal
  base: 'text-base md:text-base',     // 16px on all screens

  // Large
  lg: 'text-lg md:text-lg',           // 18px on all screens

  // Extra Large
  xl: 'text-xl md:text-2xl',          // 20px → 24px

  // 2XL
  '2xl': 'text-2xl md:text-3xl',      // 24px → 30px

  // 3XL
  '3xl': 'text-3xl md:text-4xl',      // 30px → 36px

  // 4XL (Hero headings)
  '4xl': 'text-4xl md:text-5xl',      // 36px → 48px

  // 5XL (Main hero)
  '5xl': 'text-5xl md:text-6xl',      // 48px → 60px
}

// ============================================
// LINK FONT SIZES - Professional Agencies Standard
// ============================================
// Standard responsive link sizes used across footers, navigation, and content
// Based on industry best practices for professional firms

export const linkSizes = {
  // Extra small links (Footers, secondary navigation, captions)
  xs: 'text-xs sm:text-xs md:text-sm',        // 12px → 14px

  // Small links (Footers, breadcrumbs, metadata)
  sm: 'text-xs sm:text-sm md:text-sm',        // 12px → 14px

  // Normal links (Primary footer links, body text links)
  base: 'text-sm sm:text-sm md:text-base',    // 14px → 16px

  // Large links (Section links, highlights)
  lg: 'text-sm sm:text-base md:text-lg',      // 14px → 18px
}

// ============================================
// SPACING - Responsive Gaps & Padding
// ============================================

export const spacing = {
  // Vertical gaps between sections (Responsive)
  sectionGap: {
    sm: 'space-y-8 md:space-y-12 lg:space-y-16',
    md: 'space-y-12 md:space-y-16 lg:space-y-20',
    lg: 'space-y-16 md:space-y-20 lg:space-y-24',
  },

  // Padding for containers (Responsive)
  containerPadding: {
    sm: 'px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16',
    md: 'px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20',
    lg: 'px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24',
  },

  // Internal padding for elements
  padding: {
    xs: 'p-2 md:p-3',
    sm: 'p-3 md:p-4',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
    xl: 'p-8 md:p-12',
  },

  // Gaps between items
  gap: {
    xs: 'gap-2 md:gap-3',
    sm: 'gap-3 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-12',
  },

  // Margins
  margin: {
    xs: 'm-2 md:m-3',
    sm: 'm-3 md:m-4',
    md: 'm-4 md:m-6',
    lg: 'm-6 md:m-8',
  },
}

// ============================================
// BREAKPOINTS & RESPONSIVE UTILITIES
// ============================================

export const responsive = {
  // Container max-width
  containerMaxWidth: 'max-w-7xl mx-auto',

  // Text alignment responsive
  textCenter: 'text-center md:text-left',
  textCenterAll: 'text-center',

  // Grid columns responsive
  gridCols: {
    single: 'grid-cols-1',
    double: 'grid-cols-1 md:grid-cols-2',
    triple: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  },

  // Flex direction responsive
  flexColumn: 'flex-col md:flex-row',

  // ============================================
  // RESPONSIVE CENTERING (Mobile/Tablet centered, Desktop left-aligned)
  // ============================================
  // Text alignment: Center on mobile/tablet, left on desktop
  centerOnMobile: 'text-center lg:text-left',

  // Container centering: Center max-width on mobile/tablet, reset on desktop
  centerContainer: 'mx-auto lg:mx-0',

  // Combined: Text centered AND container centered on mobile/tablet
  centerContent: 'text-center mx-auto lg:text-left lg:mx-0',

  // Flexbox centering: Center items on mobile/tablet, justify-start on desktop
  centerFlex: 'justify-center lg:justify-start',
}

// ============================================
// ROUNDED CORNERS
// ============================================

export const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
}

// ============================================
// SHADOWS (Elevation System)
// ============================================

export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
}

// ============================================
// TRANSITIONS & ANIMATIONS
// ============================================

export const transitions = {
  fast: 'transition-all duration-200',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
}

// ============================================
// PARAGRAPH STYLES - Centralized Text Styling
// ============================================

export const paragraph = {
  // Light background paragraphs (dark text - FULLY BLACK)
  light: {
    base: 'text-gray-900 text-base md:text-base leading-relaxed font-normal',
    sm: 'text-gray-900 text-sm md:text-sm leading-relaxed font-normal',
    lg: 'text-gray-900 text-lg md:text-lg leading-relaxed font-normal',
    centered: 'text-gray-900 text-base md:text-base leading-relaxed text-center font-normal',
  },

  // Dark background paragraphs (light text)
  dark: {
    base: 'text-gray-300 text-base md:text-base leading-relaxed font-normal',
    sm: 'text-gray-400 text-sm md:text-sm leading-relaxed font-normal',
    lg: 'text-gray-200 text-lg md:text-lg leading-relaxed font-normal',
    centered: 'text-gray-300 text-base md:text-base leading-relaxed text-center font-normal',
  },

  // Muted paragraphs (secondary text on light backgrounds)
  muted: 'text-gray-700 text-base md:text-base leading-relaxed font-normal',

  // Accent colored paragraphs
  accent: 'text-blue-600 text-base md:text-base leading-relaxed font-medium',
}

// ============================================
// COMBINATIONS (Common patterns)
// ============================================

export const patterns = {
  // Hero section background
  heroBg: `${bgColors.white}`,

  // Section background alternating
  sectionBgPrimary: `${bgColors.white}`,
  sectionBgSecondary: `${bgColors.lightGray}`,

  // Card styling
  cardStyle: `${bgColors.white} ${radius.lg} ${shadows.md}`,

  // CTA Button
  ctaButton: `${bgColors.accent} ${textColors.white} ${radius.md} ${transitions.normal} hover:opacity-90`,

  // Primary Button
  primaryButton: `${bgColors.primary} ${textColors.white} ${radius.md} ${transitions.normal} hover:opacity-90`,

  // Heading with accent
  headingAccent: `${textColors.accent}`,

  // Text link
  textLink: `${textColors.accent} ${transitions.normal} hover:underline`,
}

// ============================================
// EXPORT HELPER FUNCTIONS
// ============================================

/**
 * Get responsive font size class
 */
export function getResponsiveFontSize(size: keyof typeof fontSize): string {
  return fontSize[size]
}

/**
 * Get responsive spacing class
 */
export function getResponsiveSpacing(
  type: 'gap' | 'padding' | 'margin',
  size: keyof (typeof spacing)[typeof type]
): string {
  return spacing[type][size] || ''
}
