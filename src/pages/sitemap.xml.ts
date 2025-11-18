import type { APIRoute } from 'astro';
import { siteDefaults } from '../config/seo';

// Simple sitemap.xml that points to sitemap-index.xml (produced by @astrojs/sitemap)
export const GET: APIRoute = async () => {
  const sitemapIndexUrl = new URL('/sitemap-index.xml', siteDefaults.siteUrl).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${sitemapIndexUrl}</loc>\n  </sitemap>\n</sitemapindex>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
