import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server:{
    port: 3000,
    strictPort: true,
    host: true
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: ["guess-the-song-frontend-811320721068.europe-west1.run.app"]
  }
})
