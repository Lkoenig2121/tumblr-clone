import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1068px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        'tumblr-dark': '#001935',
        'tumblr-darker': '#00172d',
        'tumblr-blue': '#00b8ff',
        'tumblr-purple': '#a18dce',
      },
    },
  },
  plugins: [],
}
export default config
