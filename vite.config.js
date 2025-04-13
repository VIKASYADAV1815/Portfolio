import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify ke liye
  // base: '/Portfolio/', // GitHub Pages ke liye (agar try karega toh isko use kar)
})