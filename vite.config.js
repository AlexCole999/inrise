import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: true, // Ensure HMR is enabled
  },
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['.ngrok-free.app'], // Разрешаем все поддомены ngrok
  },
})
