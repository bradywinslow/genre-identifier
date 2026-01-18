import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  test: {
    coverage: {
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  },
})
