import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  plugins: [react(),tailwindcss()],
   optimizeDeps: {
    exclude: ['react-router-dom']
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      sections: path.resolve(__dirname, 'src/sections'),
    },
  },
});