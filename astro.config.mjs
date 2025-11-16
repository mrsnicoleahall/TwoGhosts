// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://twoghosts.com',
  
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-chatbotify', '@rcb-plugins/llm-connector']
    }
  },

  integrations: [react(), sitemap()]
});