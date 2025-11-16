import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { siteDefaults } from '../config/seo';

export async function GET() {
  try {
    const posts = await getCollection('blog');

    const items = posts
      .filter((post) => post.data.title && post.data.date)
      .sort(
        (a, b) =>
          new Date(b.data.date).getTime() -
          new Date(a.data.date).getTime()
      )
      .map((post) => {
        const date = new Date(post.data.date);
        // Only include if date is valid
        if (isNaN(date.getTime())) {
          return null;
        }

        return {
          title: String(post.data.title),
          description: String(
            post.data.excerpt ||
              post.data.meta_description ||
              'Read the full article on TWOGHOSTS blog.'
          ),
          link: `/blog/${post.slug}/`,
          pubDate: date,
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
      }>,
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
