import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASENAME || '/', // Use the environment variable for the base pathReactApp/.env.production
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: '/src/index.jsx',
    },
  },
})
