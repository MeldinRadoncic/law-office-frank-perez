import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        // Fade animations
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',

        // Slide animations
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'slide-in-down': 'slideInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',

        // Scale animations
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'scale-in-small': 'scaleInSmall 0.5s ease-out forwards',

        // Bounce animations
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'bounce-in-up': 'bounceInUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
      },
      keyframes: {
        // Fade keyframes
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 40px, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        fadeInDown: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, -40px, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        fadeInLeft: {
          'from': {
            opacity: '0',
            transform: 'translate3d(-40px, 0, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        fadeInRight: {
          'from': {
            opacity: '0',
            transform: 'translate3d(40px, 0, 0)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },

        // Slide keyframes
        slideInUp: {
          'from': {
            transform: 'translate3d(0, 60px, 0)',
          },
          'to': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInDown: {
          'from': {
            transform: 'translate3d(0, -60px, 0)',
          },
          'to': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInLeft: {
          'from': {
            transform: 'translate3d(-60px, 0, 0)',
          },
          'to': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        slideInRight: {
          'from': {
            transform: 'translate3d(60px, 0, 0)',
          },
          'to': {
            transform: 'translate3d(0, 0, 0)',
          },
        },

        // Scale keyframes
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        scaleInSmall: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },

        // Bounce keyframes
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        bounceInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 40px, 0)',
          },
          '60%': {
            opacity: '1',
            transform: 'translate3d(0, -10px, 0)',
          },
          '80%': {
            transform: 'translate3d(0, 2px, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
