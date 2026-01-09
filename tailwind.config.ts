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
        // Brand Colors
        honey: {
          gold: '#F5A623',
          'deep-honey': '#D4920E',
          'soft-honey': '#FFF3E0',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          trust: '#1E3A5F',
        },
        slate: {
          DEFAULT: '#64748B',
          soft: '#64748B',
          300: '#CBD5E1',
          400: '#94A3B8',
        },
        cloud: {
          white: '#FAFBFC',
        },
        success: {
          DEFAULT: '#10B981',
          green: '#10B981',
        },
        alert: {
          DEFAULT: '#F87171',
          coral: '#F87171',
        },
        info: {
          DEFAULT: '#38BDF8',
          sky: '#38BDF8',
        },
        progress: {
          DEFAULT: '#A78BFA',
          purple: '#A78BFA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'Inter', 'sans-serif'],
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '32px',
        '8': '40px',
        '9': '48px',
        '10': '64px',
        '11': '80px',
        '12': '96px',
        '13': '128px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'level-1': '0 1px 2px 0 rgba(30, 58, 95, 0.05)',
        'level-2': '0 1px 3px 0 rgba(30, 58, 95, 0.1), 0 1px 2px -1px rgba(30, 58, 95, 0.1)',
        'level-3': '0 4px 6px -1px rgba(30, 58, 95, 0.1), 0 2px 4px -2px rgba(30, 58, 95, 0.1)',
        'level-4': '0 10px 15px -3px rgba(30, 58, 95, 0.1), 0 4px 6px -4px rgba(30, 58, 95, 0.1)',
        'level-5': '0 20px 25px -5px rgba(30, 58, 95, 0.1), 0 8px 10px -6px rgba(30, 58, 95, 0.1)',
        'honey-glow': '0 0 0 3px rgba(245, 166, 35, 0.3)',
        'inset': 'inset 0 2px 4px 0 rgba(30, 58, 95, 0.1)',
      },
      screens: {
        'sm': '640px',   // Tablet
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large Desktop
        '2xl': '1440px', // Large Desktop
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'ease-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'ease-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'instant': '100ms',
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '400ms',
      },
    },
  },
  plugins: [],
}
export default config
