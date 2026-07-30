/**
 * Centralized Animation System
 * Provides consistent, professional animations for all sections
 * Used across the entire website for animations and transitions
 */

// ============================================
// FRAMER MOTION ANIMATION VARIANTS
// ============================================

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const slideInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const slideInDownVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      duration: 0.8,
    },
  },
}

// ============================================
// STAGGER CONTAINER VARIANTS
// ============================================

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

// ============================================
// HOVER/TAP ANIMATIONS
// ============================================

export const hoverTapVariants = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
}

export const cardHoverVariants = {
  whileHover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.3 },
  },
}

// ============================================
// SCROLL ANIMATION CLASSES (Tailwind)
// ============================================

export const scrollAnimations = {
  // Fade in animations
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',

  // Slide animations
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',

  // Scale animations
  scaleIn: 'animate-scale-in',
  scaleInSmall: 'animate-scale-in-small',

  // Bounce animations
  bounceIn: 'animate-bounce-in',
  bounceInUp: 'animate-bounce-in-up',
}

// ============================================
// STAGGER DELAYS FOR LISTS/GRIDS
// ============================================

export const staggerDelays = {
  // Stagger delays for list items
  item1: 'animation-delay-100',
  item2: 'animation-delay-200',
  item3: 'animation-delay-300',
  item4: 'animation-delay-400',
  item5: 'animation-delay-500',
  item6: 'animation-delay-600',
}

// ============================================
// SECTION ANIMATION PRESETS
// ============================================

export const sectionAnimations = {
  // Standard section heading
  sectionHeading: 'animate-fade-in-up',

  // Section content cards
  card: 'animate-fade-in-up',
  cardStaggered: (index: number) => {
    const delays = [100, 200, 300, 400, 500, 600]
    return `animate-fade-in-up animation-delay-${delays[index] || 100}`
  },

  // Text content
  textBlock: 'animate-fade-in-up',

  // Images
  image: 'animate-fade-in-up',
  imageSide: 'animate-fade-in-left',

  // Buttons
  button: 'animate-fade-in-up hover:scale-105 transition-transform duration-300',
}

// ============================================
// HOVER/INTERACTION ANIMATIONS
// ============================================

export const hoverAnimations = {
  // Card hover effects
  cardHover: 'hover:shadow-lg hover:-translate-y-2 transition-all duration-300',
  cardHoverSmall: 'hover:shadow-md hover:-translate-y-1 transition-all duration-300',

  // Button hover
  buttonHover: 'hover:scale-105 active:scale-95 transition-transform duration-200',
  buttonHoverSmall: 'hover:scale-102 active:scale-98 transition-transform duration-150',

  // Link hover
  linkHover: 'hover:text-amber-600 transition-colors duration-300',

  // Icon hover
  iconHover: 'hover:scale-110 transition-transform duration-300',
}

// ============================================
// ANIMATION CONFIGURATIONS (Tailwind custom)
// ============================================

export const animationConfig = {
  // Duration settings
  duration: {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
    slower: 'duration-700',
  },

  // Easing functions
  easing: {
    linear: 'ease-linear',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  },

  // Timing for staggered animations
  stagger: {
    small: 100,    // 100ms between items
    medium: 150,   // 150ms between items
    large: 200,    // 200ms between items
  },
}

// ============================================
// SECTION-SPECIFIC ANIMATION HELPERS
// ============================================

/**
 * Get animation class for section heading
 * All section headings use consistent fade-in-up animation
 */
export function getSectionHeadingAnimation(): string {
  return `${scrollAnimations.fadeInUp} [animation-duration:0.6s]`
}

/**
 * Get animation class for section content
 * Adds a slight delay to content animations for visual hierarchy
 */
export function getSectionContentAnimation(delayMs: number = 200): string {
  return `${scrollAnimations.fadeInUp} [animation-duration:0.6s] [animation-delay:${delayMs}ms]`
}

/**
 * Get staggered animation for card grids
 * Each card animates in sequence with a consistent delay
 */
export function getCardStaggerAnimation(index: number, baseDelay: number = 100): string {
  const totalDelay = baseDelay + index * 150
  return `${scrollAnimations.fadeInUp} [animation-duration:0.6s] [animation-delay:${totalDelay}ms]`
}

/**
 * Get image animation class
 * Images slide in from the side for visual interest
 */
export function getImageAnimation(fromLeft: boolean = true): string {
  const animation = fromLeft ? scrollAnimations.fadeInLeft : scrollAnimations.fadeInRight
  return `${animation} [animation-duration:0.7s]`
}

// ============================================
// TRANSITIONS (Tailwind utilities)
// ============================================

export const transitions = {
  smooth: 'transition-all duration-300 ease-out',
  fast: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-500 ease-out',
  smoothColors: 'transition-colors duration-300 ease-out',
  smoothTransform: 'transition-transform duration-300 ease-out',
}
