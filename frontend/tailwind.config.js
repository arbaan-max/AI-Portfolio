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
        band: token('--c-band'),
        ink: token('--c-fg'),
        body: token('--c-body'),
        muted: token('--c-muted'),
        accent: token('--c-accent'),
        gold: token('--c-accent-soft'),
        night: token('--c-dark'),
        'wash-a': token('--c-wash-a'),
        'wash-b': token('--c-wash-b'),
        'wash-c': token('--c-wash-c'),
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
      },
      fontSize: {
        'display-xl': ['var(--text-display-xl)', { lineHeight: '1.02' }],
        'display-lg': ['var(--text-display-lg)', { lineHeight: '1.05' }],
        'display-md': ['var(--text-display-md)', { lineHeight: '1.08' }],
        lead: ['var(--text-lead)', { lineHeight: '1.24' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: '1.65' }],
      },
      spacing: {
        gutter: 'var(--space-gutter)',
        section: 'var(--space-section)',
      },
      maxWidth: {
        page: 'var(--width-page)',
      },
      borderRadius: {
        plate: 'var(--radius-plate)',
      },
      boxShadow: {
        plate: 'var(--shadow-plate)',
      },
      transitionTimingFunction: {
        soft: 'var(--ease-soft)',
      },
    },
  },
  plugins: [],
};
