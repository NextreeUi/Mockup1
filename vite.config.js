import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
  base: "/Mockup1/",
})
