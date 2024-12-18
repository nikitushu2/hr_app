import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Use Railway's PORT or default to 5173
    host: true, // Allow access via the assigned Railway domain
  },
})
