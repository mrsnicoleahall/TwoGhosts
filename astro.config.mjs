// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://twoghosts.net',

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-chatbotify', '@rcb-plugins/llm-connector']
    }
  },

  integrations: [
    react(),
    sitemap({
      changefreq: /** @type {import('sitemap').EnumChangefreq} */ ('weekly'),
      priority: 0.7,
      customPages: [
        'https://twoghosts.net/',
        'https://twoghosts.net/about/',
        'https://twoghosts.net/services/',
        'https://twoghosts.net/blog/',
        'https://twoghosts.net/contact/',
        'https://twoghosts.net/schedule/',
      ],
      serialize(item) {
        // Update lastmod to current build time for all pages
        item.lastmod = new Date().toISOString();

        // Set higher priority for important pages
        // Use type assertion for changefreq to satisfy TypeScript
        if (item.url === 'https://twoghosts.net/') {
          item.priority = 1.0;
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ ('daily');
        } else if (item.url.includes('/blog/') && !item.url.includes('/page/')) {
          item.priority = 0.8;
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ ('monthly');
        } else if (item.url.includes('/services/')) {
          item.priority = 0.9;
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ ('weekly');
        } else if (item.url.includes('/schedule') || item.url.includes('/contact')) {
          item.priority = 0.9;
          item.changefreq = /** @type {import('sitemap').EnumChangefreq} */ ('monthly');
        }
        return item;
      },
    })
  ]
});