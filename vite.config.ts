import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './srcl-components'),
      '@common': resolve(__dirname, './srcl-common'),
      '@root': resolve(__dirname, './')
    }
  },
  build: {
    outDir: 'dist'
  },
  ssgOptions: {
    script: 'async'
  }
})