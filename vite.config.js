import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sweetbite-frontend/', // <-- ADD THIS LINE!
  server: {
    port: 201 // Your custom port
  },
  optimizeDeps: {
    include: ['fabric'],
  },
});