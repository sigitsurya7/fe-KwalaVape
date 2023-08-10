import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rajaongkir': {
        target: 'https://api.rajaongkir.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rajaongkir/, ''),
      },
    },
  },
})
