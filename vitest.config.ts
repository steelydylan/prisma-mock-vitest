import { defineConfig } from 'vitest/config'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})