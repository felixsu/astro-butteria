// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  outDir: './dist',
  base: '/',

  server: {
    port: 4321,
    host: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});