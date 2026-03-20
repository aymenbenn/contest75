
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'hot-pink': 'var(--color-hot-pink)',
        'brand-orange': 'var(--color-orange)',
        'brand-teal': 'var(--color-teal)',
        'brand-yellow': 'var(--color-yellow)',
        'soft-pink': 'var(--color-soft-pink)',
        'brand-purple': 'var(--color-purple)',
        'brand-cream': 'var(--color-cream)',
        'brand-blush': 'var(--color-blush)',
        'brand-charcoal': 'var(--color-charcoal)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
