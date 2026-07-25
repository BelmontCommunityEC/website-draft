// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change this to your purchased domain before deploying.
  // Used for SEO canonical URLs, sitemap.xml and social share tags.
  site: 'https://www.example.org',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
