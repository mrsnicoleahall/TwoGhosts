import type { APIRoute } from 'astro';
import { siteDefaults } from '../config/seo';

export const GET: APIRoute = async () => {
  const body = [
    '# List of key machine-readable entry points for LLMs',
    'site: ' + siteDefaults.siteUrl,
    'sitemap: ' + new URL('/sitemap.xml', siteDefaults.siteUrl).toString(),
    'rss: ' + new URL('/rss.xml', siteDefaults.siteUrl).toString(),
    '',
    '# Primary content collections:',
    '/blog/',
    '/services/',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
