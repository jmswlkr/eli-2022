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
        lg: '1025px',
        xl: '1200px', // navbar collapses on this breakpoint
        xxxl: '1700px', // navbar collapses on this breakpoint
        '2k': '2200px'
      },
      fontFamily: {
        // TOKEN
        display: ['var(--font-title)'],
        subdisplay: ['var(--font-subtitle)'],
        body: ['var(--font-med)'],

        // EXPLICIT
        bold: ['var(--font-bold)'],
        semibold: ['var(--font-med)'],
        light: ['var(--font-reg)'],
        italic: ['var(--font-italic)']
      },
      colors: {
        primary: {
          100: 'rgba(var(--color-primary-100) / <alpha-value>)',
          150: 'rgba(var(--color-primary-150) / <alpha-value>)',
          300: 'rgba(var(--color-primary-300) / <alpha-value>)',
          500: 'rgba(var(--color-primary-500) / <alpha-value>)',
          600: 'rgba(var(--color-primary-600) / <alpha-value>)',
          900: 'rgba(var(--color-primary-900) / <alpha-value>)'
        },
        accent: {
          300: 'rgba(var(--color-accent-300) / <alpha-value>)'
        },
        neutral: {
          200: 'rgba(var(--color-neutral-300) / <alpha-value)'
        },

        primary_text: 'var(--text-color)',
        meta_text: 'rgba(var(--color-neutral-300) / <alpha-value)'
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

