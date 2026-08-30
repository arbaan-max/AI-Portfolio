/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        industrial: ['Quantico', 'Arial Narrow', 'sans-serif'],
        mono: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-base': '#EDEEF5',
        'targo-base': '#F2F1F0',
        'brand-green': '#9fff00',
        cyan: '#15BCDF',
        'cyan-hover': '#3fd0ef',
        'cyan-border': '#0fa3c2',
        ink: '#1a1a1a',
        smoke: '#8e8e8e',
        moss: '#1C2E1E',
        'soft-line': 'rgba(26, 26, 26, 0.10)',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(20, 23, 31, 0.12)',
        'soft-ring': 'inset 0 1px 0 rgba(255,255,255,0.85), 0 18px 70px rgba(17, 24, 39, 0.12)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(12px, -14px, 0) rotate(2deg)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(126px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(126px) rotate(-360deg)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        drift: 'drift 9s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
      },
    },
  },
  plugins: [],
};
