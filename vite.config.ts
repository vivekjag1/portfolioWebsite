import path from "path"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: {
    hmr: {
      overlay: false,
    },
    port: 80,
    strictPort: true,
    host: true,


  }
});
