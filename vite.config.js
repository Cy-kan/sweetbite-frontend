import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- This line is important!

export default defineConfig({
  plugins: [react()], // <--- And this line is important!
  server: {
    port: 201
  }
})