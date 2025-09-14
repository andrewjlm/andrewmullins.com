import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, '../www-sacred/components'),
      '@common': resolve(__dirname, '../www-sacred/common'),
      '@root': resolve(__dirname, '../www-sacred')
    }
  },
  build: {
    outDir: 'dist'
  },
  ssgOptions: {
    script: 'async'
  }
})