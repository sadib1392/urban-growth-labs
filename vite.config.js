import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // DEPLOY_BASE is set in CI for GitHub Pages project hosting (e.g.
  // "/urban-growth-labs/"); defaults to "/" for local dev and root hosting.
  base: process.env.DEPLOY_BASE || '/',
  plugins: [react()],
  server: { port: Number(process.env.PORT) || 5173 },
});
