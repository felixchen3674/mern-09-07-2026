import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // curriculum/ uses 47821; keep the two apps side by side without a clash.
    port: 47822,
  },
})
