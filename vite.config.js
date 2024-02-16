import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile(), visualizer()],
  base: "/prueba-tecnica-demostreaming/",
  test: {
    // Configuración de pruebas
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Opcional, si tienes configuraciones globales o extensiones para jest-dom
  },
})
