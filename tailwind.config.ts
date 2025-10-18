import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#C81E1E',
            50: '#FEF2F2',
            100: '#FEE2E2',
            600: '#DC2626',
            700: '#C81E1E',
            800: '#991B1B',
          },
          secondary: {
            DEFAULT: '#16A34A',
            50: '#F0FDF4',
            100: '#DCFCE7',
            600: '#16A34A',
            700: '#15803D',
            800: '#166534',
          },
          accent: {
            DEFAULT: '#111827',
            light: '#374151',
            dark: '#030712',
          },
        },
        surface: {
          DEFAULT: '#F8FAFC',
          dark: '#F1F5F9',
        },
        text: {
          DEFAULT: '#0F172A',
          light: '#475569',
          lighter: '#64748B',
        },
        success: '#16A34A',
        info: '#3B82F6',
        warning: '#F59E0B',
      },
      fontFamily: {
        serif: ['Cambria', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['Cambria', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

