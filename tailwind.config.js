/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.900'),
            p: {
              color: theme('colors.gray.900'),
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            'h1, h2, h3': {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            h1: {
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            blockquote: {
              borderLeftColor: theme('colors.amber.500'),
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: theme('colors.gray.900'),
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              color: theme('colors.gray.900'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            p: {
              color: theme('colors.gray.100'),
            },
            'h1, h2, h3': {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            li: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}