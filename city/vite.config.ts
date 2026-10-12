import { defineConfig } from 'vite';

// Keep the standalone game portable, including GitHub Pages project subpaths.
export default defineConfig({ base: './' });
