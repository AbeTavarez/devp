import type { Config } from 'tailwindcss'

const config: Config = {
  // darkMode: ['class', '[data-mode="dark"]'],
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 
      'blk-dark': '#181818' 
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      darkMode: 'class'
    },
    darkMode: 'class'
  },
  plugins: [],
}
export default config
