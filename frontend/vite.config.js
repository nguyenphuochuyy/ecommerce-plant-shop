import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open : true,
    port: 5173,
  },
  build:{
    outDir : "dist",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
  
    },
  },
  base : process.env.VITE_BASE_PATH || '/',
  assetsInclude: ['**/*.webp'],
  babel: {
    plugins: [
    '@babel/plugin-transform-runtime'
    ],
  }
})
