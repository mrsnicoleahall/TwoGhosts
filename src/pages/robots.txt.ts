import type { APIRoute } from 'astro';
import { siteDefaults } from '../config/seo';

export const GET: APIRoute = async () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: ' + new URL('/sitemap.xml', siteDefaults.siteUrl).toString(),
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
