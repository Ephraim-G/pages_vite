import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: process.env.BASEURL,
  build: {
    outDir: '_site'
  }
})
