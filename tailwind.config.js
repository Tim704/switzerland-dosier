/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Hero / display serif — high contrast, "five-star software".
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        // Editorial serif for section titles and refined copy.
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Hyper-clean geometric sans for UI chrome, labels and data tables.
        sans: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Technical monospace — the "instrument readout / field manual" layer.
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ivory: '#F4F1EA', // page background — warm parchment
        cream: '#FCFAF5', // card surface — warm near-white
        champagne: {
          50: '#FBF7EC',
          100: '#F6EED6',
          200: '#EFE0B8',
          300: '#E4D2A6',
          400: '#D8BF85',
          500: '#C9A968',
          600: '#B08F4E',
          700: '#8C7039',
          800: '#6E5829',
          900: '#52421E',
        },
        platinum: {
          100: '#EDEFF2',
          200: '#D6DBE0',
          300: '#B9C0C7',
          400: '#9AA2AB',
        },
      },
      letterSpacing: {
        luxe: '0.35em',
        ultra: '0.5em',
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        // Warm, layered paper elevation for the light theme.
        card:
          '0 1px 1px rgba(60,50,28,0.04), 0 2px 4px rgba(60,50,28,0.03), 0 10px 20px -10px rgba(80,65,33,0.12), 0 26px 50px -26px rgba(80,65,33,0.22)',
        'card-hover':
          '0 2px 4px rgba(60,50,28,0.05), 0 14px 26px -8px rgba(80,65,33,0.15), 0 44px 76px -32px rgba(80,65,33,0.34)',
        glow: '0 0 32px -10px rgba(176,143,78,0.40)',
        'glow-sm': '0 0 18px -7px rgba(176,143,78,0.50)',
        'inset-hi': 'inset 0 1px 0 0 rgba(255,255,255,0.75)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(18px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        digitRoll: {
          '0%': { opacity: '0', transform: 'translateY(-0.42em)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ringPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(176,143,78,0.30)' },
          '70%': { boxShadow: '0 0 0 9px rgba(176,143,78,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(176,143,78,0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 7s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in': 'slideIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        digit: 'digitRoll 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'ring-pulse': 'ringPulse 2.6s ease-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
