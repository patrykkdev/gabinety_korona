import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CSS Modules are enabled by default in Vite for any *.module.css file.
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
