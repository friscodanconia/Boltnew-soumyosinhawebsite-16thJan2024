/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            p: {
              color: '#374151',
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            'h1, h2, h3': {
              color: '#111827',
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
              color: '#111827',
              fontWeight: '700',
            },
            blockquote: {
              borderLeftColor: '#F59E0B',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#374151',
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
            },
          },
        },
        dark: {
          css: {
            color: '#D1D5DB',
            p: {
              color: '#D1D5DB',
            },
            'h1, h2, h3': {
              color: '#F3F4F6',
            },
            strong: {
              color: '#F3F4F6',
            },
            blockquote: {
              color: '#D1D5DB',
            },
            li: {
              color: '#D1D5DB',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}