import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// Relative base so the built site works from any sub-path (e.g. GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react(), cloudflare()],
})