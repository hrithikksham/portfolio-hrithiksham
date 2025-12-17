/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#000000',
        'cinema-white': '#FFFFFF',
        'neon-blue': '#00B3FF',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(circle at center, rgba(0, 179, 255, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}