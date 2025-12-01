import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Copy sitemap-0.xml to sitemap.xml for easier access
const distPath = 'dist';
const sitemapSource = join(distPath, 'sitemap-0.xml');
const sitemapDest = join(distPath, 'sitemap.xml');

try {
  // Copy the main sitemap content to sitemap.xml
  copyFileSync(sitemapSource, sitemapDest);
  console.log('✓ sitemap.xml created successfully');
} catch (error) {
  console.error('Error creating sitemap.xml:', error.message);
  process.exit(1);
}
