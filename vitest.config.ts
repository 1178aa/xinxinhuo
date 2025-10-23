import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts']
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '@shared': resolve(process.cwd(), 'shared'),
      '@assets': resolve(process.cwd(), 'assets')
    }
  }
})
