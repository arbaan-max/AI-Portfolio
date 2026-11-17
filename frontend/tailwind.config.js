/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Everything here maps to semantic tokens in src/styles/tokens.css.
      colors: {
        paper: token('--c-bg'),
        surface: token('--c-surface'),
        sunken: token('--c-sunken'),
        ink: token('--c-fg'),
        muted: token('--c-fg-muted'),
        graphite: token('--c-raised-dark'),
        accent: token('--c-accent'),
        'accent-deep': token('--c-accent-text'),
        signal: token('--c-signal'),
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-xl': ['var(--text-display-xl)', { lineHeight: '0.95' }],
        'display-lg': ['var(--text-display-lg)', { lineHeight: '0.98' }],
        'display-md': ['var(--text-display-md)', { lineHeight: '1.02' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: '1.6' }],
      },
      spacing: {
        gutter: 'var(--space-gutter)',
        section: 'var(--space-section)',
      },
      borderRadius: {
        frame: 'var(--radius-frame)',
      },
      boxShadow: {
        lift: 'var(--shadow-lift)',
        frame: 'var(--shadow-frame)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};
