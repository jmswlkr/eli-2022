export const theme = {
  theme: {
    extend: {
      screens: {
        xs: '475px',
        lg: '1025px',
        xxxl: '1700px', // navbar collapses on this breakpoint
        '2k': '2200px'
      },
      colors: {
        primary: {
          100: '#CDDCE7',
          250: '#7DA8C7',
          500: '#2b5879',
          800: '#173245'
        },
        accent: {
          300: 'rgba(var(--color-accent-300) / <alpha-value>)'
        },
        neutral: {
          200: 'rgba(var(--color-neutral-300) / <alpha-value)'
        },

        primary_text: 'var(--text-color)',
        meta_text:
          'rgba(var(--color-neutral-300) / <alpha-value)'
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
  }
}