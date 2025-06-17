// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',      // Indigo-600
        secondary: '#6366F1',    // Indigo-500
        accent: '#0EA5E9',       // Sky-500
        muted: '#6B7280',        // Gray-500
        text: '#111827',         // Gray-900
        background: '#F9FAFB',   // Light gray
      },
    },
  },
  plugins: [],
}
export default config

