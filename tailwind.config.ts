import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 🔥 REQUIRED for next-themes
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
      },

      backgroundImage: {
        // 🔥 cyber grid
        'cyber-grid':
          'linear-gradient(to right, rgba(0,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.12) 1px, transparent 1px)',
        'cyber-radial':
          'radial-gradient(circle at top, rgba(0,255,255,0.25), transparent 60%)',
      },

      boxShadow: {
        neon: '0 0 30px rgba(0,255,255,0.35)',
        'neon-soft': '0 0 20px rgba(0,255,255,0.25)',
      },

      animation: {
        scan: 'scan 6s linear infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
      },

      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
