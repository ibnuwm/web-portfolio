/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Indonesian Market Color Palette - Bright & Bold
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',  // Violet/Purple - Main brand
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        secondary: {
          50: '#fff1f3',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda2a8',
          400: '#fb7185',
          500: '#f43f5e',  // Pink/Red - Accent
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefc8',
          200: '#ffdf96',
          300: '#ffcc5c',
          400: '#ffb820',
          500: '#ffa500',  // Orange - CTA/Highlight
          600: '#e88d00',
          700: '#c27000',
          800: '#9d570c',
          900: '#7f4410',
          950: '#441d03',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Green - Success/WhatsApp
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        dark: {
          50: '#1e1e2e',
          100: '#1a1a2e',
          200: '#161624',
          300: '#12121f',
          400: '#0d0d17',
          500: '#0a0a12',
          600: '#080810',
          700: '#06060c',
          800: '#040408',
          900: '#020204',
          950: '#010102',
        },
        surface: {
          100: '#1a1443',
          200: '#1f223c',
          300: '#25213b',
          400: '#2d2a4a',
          500: '#353a52',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #d946ef 0%, #f43f5e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f43f5e 0%, #ffa500 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0d1224 0%, #1a1443 50%, #0a0d37 100%)',
        'gradient-card': 'linear-gradient(135deg, #0d1224 0%, #0a0d37 100%)',
        'gradient-promo': 'linear-gradient(135deg, #f43f5e 0%, #ffa500 50%, #ef4444 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(217, 70, 239, 0.3)',
        'glow-secondary': '0 0 30px rgba(244, 63, 94, 0.3)',
        'glow-accent': '0 0 30px rgba(255, 165, 0, 0.3)',
        'glow-success': '0 0 30px rgba(34, 197, 94, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(217, 70, 239, 0.1)',
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      screens: {
        "4k": "1980px",
        "xs": "480px",
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
}