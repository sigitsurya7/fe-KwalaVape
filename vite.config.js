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
      '/v1': {
        target: 'http://203.194.112.59:28001/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    },
  },
})
