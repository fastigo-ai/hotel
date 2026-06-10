import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: false, 
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('@stripe') || id.includes('stripe')) return 'vendor-stripe';
            if (id.includes('@react-google-maps') || id.includes('maps')) return 'vendor-maps';
            return 'vendor-core';
          }
        }
      }
    }
  }
})
