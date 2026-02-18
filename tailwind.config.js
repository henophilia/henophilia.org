/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'Cambria', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#1f2937',
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': { color: '#1d4ed8' },
            },
            'h1, h2, h3, h4': { fontWeight: '600' },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#d1d5db',
            },
            hr: { borderColor: '#e5e7eb' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
