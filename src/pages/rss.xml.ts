import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { siteDefaults } from '../config/seo';

// Helper to parse dates that might be multiline strings
const parseDate = (dateStr: any): Date => {
  if (dateStr instanceof Date) return dateStr;
  // Handle multiline YAML strings and trim whitespace
  const cleanDate = typeof dateStr === 'string' ? dateStr.trim().split('\n')[0].trim() : String(dateStr);
  return new Date(cleanDate);
};

export async function GET() {
  // This function runs on every build, ensuring fresh RSS content
  try {
    const posts = await getCollection('blog');

    const items = posts
      .filter((post) => post.data.title && post.data.date)
      .sort(
        (a, b) => {
          const dateA = parseDate(a.data.date);
          const dateB = parseDate(b.data.date);
          return dateB.getTime() - dateA.getTime();
        }
      )
      .map((post) => {
        const date = parseDate(post.data.date);
        // Only include if date is valid
        if (isNaN(date.getTime())) {
          console.warn(`Invalid date for post: ${post.slug}`, post.data.date);
          return null;
        }

        // Clean excerpt text if it's multiline
        const excerpt = post.data.excerpt
          ? (typeof post.data.excerpt === 'string' ? post.data.excerpt.trim().replace(/\n+/g, ' ') : String(post.data.excerpt))
          : (post.data.meta_description
              ? (typeof post.data.meta_description === 'string' ? post.data.meta_description.trim().replace(/\n+/g, ' ') : String(post.data.meta_description))
              : 'Read the full article on TWOGHOSTS blog.');

        return {
          title: String(post.data.title),
          description: excerpt,
          link: `/blog/${post.slug}/`,
          pubDate: date,
          author: post.data.author || 'TWOGHOSTS',
          categories: post.data.tags?.filter(Boolean) || [],
        };
      })
      .filter((item) => item !== null);

    return rss({
      title: 'TWOGHOSTS Blog',
      description:
        'Thoughts on strategy, creativity, and less-bullshit marketing.',
      site: siteDefaults.siteUrl,
      items: items as Array<{
        title: string;
        description: string;
        link: string;
        pubDate: Date;
        author?: string;
        categories?: string[];
      }>,
      customData: `<language>en-us</language>`,
      xmlns: {
        atom: 'http://www.w3.org/2005/Atom',
      },
    });
  } catch (error) {
    console.error('RSS Feed Error:', error);
    // Return empty feed on error
    return rss({
      title: 'TWOGHOSTS Blog',
      description:
        'Thoughts on strategy, creativity, and less-bullshit marketing.',
      site: siteDefaults.siteUrl,
      items: [],
    });
  }
}
