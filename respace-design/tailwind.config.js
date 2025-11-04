/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ReSpace Design System Colors
        background: {
          primary: '#F8F6F3',
          surface: '#F5F3F0',
          pure: '#FFFFFF',
        },
        accent: {
          terracotta: '#C1694F',
          sage: '#8B9D83',
          amber: '#D4A574',
          dustyBlue: '#9DAAB6',
          warmGray: '#A79E94',
        },
        text: {
          primary: '#2C2520',
          secondary: '#6B6157',
          tertiary: '#A39990',
          onTerracotta: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neumorphic-sm': '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)',
        'neumorphic-md': '-3px -3px 8px rgba(255,252,247,0.8), 3px 3px 8px rgba(167,158,148,0.25)',
        'neumorphic-lg': '-4px -4px 12px rgba(255,252,247,0.85), 4px 4px 12px rgba(167,158,148,0.3)',
      },
    },
  },
  plugins: [],
}
