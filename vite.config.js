import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Prefixo das URLs que serão redirecionadas
        target: 'http://localhost:5106', // URL do seu backend
        changeOrigin: true, // Necessário para mudar a origem da requisição
        secure: false, // Se o seu backend não usar HTTPS
      },
    },
  },
});