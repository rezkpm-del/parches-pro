import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'client', // Indica que el código fuente está en la carpeta client
  build: {
    outDir: '../dist', // Sube un nivel para dejar la carpeta dist en la raíz del proyecto
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
});
