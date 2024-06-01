import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    port: 80,
    strictPort: true,
    host: true,


  }
});
