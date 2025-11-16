import type { APIRoute } from 'astro';
import { siteDefaults } from '../config/seo';

export const GET: APIRoute = async () => {
  const body = [
    '# AI / LLM crawling policy for TWOGHOSTS',
    'site: ' + siteDefaults.siteUrl,
    'sitemap: ' + new URL('/sitemap.xml', siteDefaults.siteUrl).toString(),
    'rss: ' + new URL('/rss.xml', siteDefaults.siteUrl).toString(),
    '',
    '# Allowed use: indexing, summarization, and retrieval of public content.',
    '# Disallowed use: training systems that claim original authorship or remove attribution.',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
