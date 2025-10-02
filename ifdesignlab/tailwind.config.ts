import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        ink: '#111111',
        muted: '#5A6A7A',
        brand: {
          50: '#F3F8FF',
          100: '#E6F0FD',
          200: '#CFE2FB',
          400: '#6FA9F2',
          500: '#3D7FE6',
          600: '#2E66C0',
          700: '#214D98',
          900: '#0E2A53',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 29, 68, .08)',
      },
    },
  },
  plugins: [],
}
export default config