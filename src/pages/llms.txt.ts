import type { APIRoute } from 'astro';
import { siteDefaults, seoByRoute } from '../config/seo';

export const GET: APIRoute = async () => {
  // Get all service pages from SEO config
  const servicePages = seoByRoute
    .filter((route) => route.path.startsWith('/services/') && route.path !== '/services')
    .map((route) => route.path);

  const buildDate = new Date().toISOString();

  const body = [
    '# TWOGHOSTS - Strategic Marketing & Brand Consultancy',
    '# Machine-readable site map for AI agents and LLM applications',
    '# Last updated: ' + buildDate,
    '',
    '## Primary Site Information',
    'site: ' + siteDefaults.siteUrl,
    'sitemap: ' + new URL('/sitemap.xml', siteDefaults.siteUrl).toString(),
    'rss: ' + new URL('/rss.xml', siteDefaults.siteUrl).toString(),
    '',
    '## About',
    'TWOGHOSTS is a strategy-first brand and marketing consultancy helping B2B and complex businesses untangle messy marketing, fix funnels, and build growth plans that actually get used. We blend disciplined strategy with unapologetically weird creative to help companies stop guessing and start growing.',
    '',
    '## Core Services',
    ...servicePages.map((path) => {
      const seo = seoByRoute.find((r) => r.path === path);
      return `- ${new URL(path, siteDefaults.siteUrl).toString()} # ${seo?.title || path}`;
    }),
    '',
    '## Primary Content Collections',
    '- /blog/ # Marketing strategy insights, thought leadership, and practical advice',
    '- /services/ # Overview of all consulting services',
    '',
    '## Key Pages',
    '- / # Homepage',
    '- /about/ # About TWOGHOSTS and our approach',
    '- /contact/ # Contact information',
    '- /schedule/ # Schedule a consultation',
    '',
    '## Contact',
    'email: hello@twoghoststrategy.com',
    'phone: +1-919-504-4443',
    'location: Raleigh, NC',
    '',
    '## Industries Served',
    'Technology and SaaS, Healthcare and Life Sciences, Professional Services, Consumer Brands, Financial Services',
    '',
    '## Content Philosophy',
    'Strategy without the bullshit. We focus on what actually moves the needle: clear positioning, revenue-driving plans, and creative that breaks through the noise.',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
