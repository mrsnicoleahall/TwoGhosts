#!/usr/bin/env node

/**
 * SEO routes checker - validates that all routes have SEO metadata
 * Warns about missing metadata but doesn't fail the build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import SEO config
const seoConfigPath = path.join(__dirname, '../src/config/seo.ts');
const seoConfigContent = fs.readFileSync(seoConfigPath, 'utf-8');

// Parse the seoByRoute array paths (simple regex-based extraction)
const pathMatches = seoConfigContent.match(/path:\s*['"`]([^'"`]+)['"`]/g) || [];
const seoPaths = pathMatches.map((match) => match.replace(/path:\s*['"`]|['"`]/g, ''));

console.log('\n📋 SEO Route Validation Report');
console.log('================================\n');

// Define known routes (update this as you add new pages)
const knownRoutes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/schedule',
  '/services',
  '/services/marketing-strategy',
  '/services/brand-strategy',
  '/services/brand-identity-design',
  '/services/creative-content',
  '/services/growth-campaigns',
  '/services/cmo-on-demand',
  '/terms',
];

// Find missing SEO entries
const missing = knownRoutes.filter((route) => !seoPaths.includes(route));
const documented = knownRoutes.filter((route) => seoPaths.includes(route));

console.log(`✅ Documented routes: ${documented.length}/${knownRoutes.length}`);
documented.forEach((route) => console.log(`   • ${route}`));

if (missing.length > 0) {
  console.log(`\n⚠️  Missing SEO metadata for ${missing.length} route(s):`);
  missing.forEach((route) => console.log(`   • ${route}`));
  console.log(
    '\n💡 Add these routes to seoByRoute in src/config/seo.ts\n'
  );
} else {
  console.log(`\n✅ All known routes have SEO metadata!\n`);
}

console.log('Additional routes in SEO config but not in knownRoutes:');
const extra = seoPaths.filter((path) => !knownRoutes.includes(path));
if (extra.length > 0) {
  extra.forEach((route) => console.log(`   • ${route}`));
} else {
  console.log('   (none)');
}

console.log('\n================================\n');

// Exit with code 0 (warn but don't fail build)
process.exitCode = 0;
