// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://butteria.lixionary.xyz',
  integrations: [mdx(), sitemap()],
  base: '/',
  trailingSlash: "never",
  i18n: {
    locales: ["en", "id-ID"],
    defaultLocale: "id-ID",
    routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});