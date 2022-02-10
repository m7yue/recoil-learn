import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, 'src/models')
    }
  },
  plugins: [
    react(),
    vanillaExtractPlugin()
  ]
})
