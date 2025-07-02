import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    coverage: {
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  },
})
