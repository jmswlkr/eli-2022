/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui-components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        xxxl: '1700px', // navbar collapses on this breakpoint
        '2k': '2200px'
      },
      fontFamily: {
        display: ['var(--font-title)'],
        subdisplay: ['var(--font-subtitle)'],
        body: ['var(--font-med)'],
        light: ['var(--font-reg)'],
        italic: ['var(--font-italic)'],
      },
      colors: {
        primary: {
          300: 'rgba(var(--color-primary-300) / <alpha-value>)',
          500: 'rgba(var(--color-primary-500) / <alpha-value>)',
          600: 'rgba(var(--color-primary-600) / <alpha-value>)',
          900: 'rgba(var(--color-primary-900) / <alpha-value>)'
        }
      },
      gap: {
        sm: '10px',
        ms: '15px',
        md: '25px',
        ml: '40px',
        lg: '50px',
        xl: '75px',
        xxl: '100px'
      },
      spacing: {
        xs: '5px',
        sm: '10px',
        ms: '15px',
        md: '25px',
        ml: '40px',
        lg: '50px',
        xl: '75px',
        xxl: '100px'
      }
    }
  },
  plugins: []
}

