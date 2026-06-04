import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base ('./') so the built bundle deploys without modification to
// both Vercel (served from root) and GitHub Pages (served from a subpath).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Recharts (+ its d3 dependencies) is an inherently large charting library;
    // it lives in its own long-cacheable chunk, so this limit is intentional.
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('/d3-') || id.includes('victory')) {
              return 'recharts'
            }
            return 'vendor'
          }
        },
      },
    },
  },
})
