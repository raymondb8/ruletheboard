import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // dist/.vite/manifest.json maps each source module to its built chunk;
  // scripts/prerender.mjs uses it to add a modulepreload for the page's own
  // lazy chunk to that page's HTML.
  build: { manifest: true },
})
