import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 'media' if you prefer system-based
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
    }
  },
  plugins: []
}

export default config

