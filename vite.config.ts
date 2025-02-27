declare var process: NodeJS.Process;
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    ,tailwindcss()
  ],
  define: {
    'process.env': process.env, // Ensure env variables load
  },
})