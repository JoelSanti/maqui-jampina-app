import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    watch: {
      usePolling: true,
      interval: 100,
    }
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
  },
})
