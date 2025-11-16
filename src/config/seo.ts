export type SeoMeta = {
  title: string;
  description: string;
  path: string; // route, e.g. "/services/marketing-strategy"
  ogImage?: string;
  ogType?: string; // "website" | "article"
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
  schemaJsonLd?: Record<string, any>;
};

export const siteDefaults = {
  siteName: 'TWOGHOSTS',
  siteUrl: 'https://twoghosts.com',
  defaultOgImage: '/images/og/default-og.png',
  defaultOgType: 'website',
  defaultTwitterHandle: '@twoghosts',
};

export const seoByRoute: SeoMeta[] = [
  {
    path: '/',
    title: 'TWOGHOSTS | Strategy-First Brand & Marketing Consulting',
    description:
      'TWOGHOSTS helps B2B and complex businesses untangle messy marketing, fix funnels, and build growth plans that actually get used. Strategy without the bullshit.',
    ogImage: '/images/og/home-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com',
    keywords: [
      'marketing strategy',
      'brand consulting',
      'B2B marketing',
      'growth consulting',
      'fractional CMO',
    ],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': ['WebSite', 'Organization'],
      'name': 'TWOGHOSTS',
      'url': 'https://twoghosts.com',
      'description': 'Strategy-first brand and marketing consultants helping B2B teams stop guessing and start growing.',
      'logo': 'https://twoghosts.com/logo.svg',
      'sameAs': [
        'https://twitter.com/twoghosts',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-984-344-0738',
        'contactType': 'customer service',
        'email': 'hello@twoghoststrategy.com',
        'areaServed': 'US',
      },
    },
  },
  {
    path: '/about',
    title: 'About TWOGHOSTS | Strategy, Creativity, and Less Nonsense',
    description:
      'Learn who TWOGHOSTS is, why we exist, and how we blend disciplined strategy with unapologetically weird creative to fix messy B2B marketing.',
    ogImage: '/images/og/about-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/about',
    keywords: ['about TWOGHOSTS', 'marketing consultants', 'strategy firm', 'who we are'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'url': 'https://twoghosts.com/about',
      'name': 'About TWOGHOSTS',
      'description': 'Strategy-first brand and marketing consultants helping teams stop guessing and start growing.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
        'description': 'We blend disciplined strategy with creative that breaks through the noise to help complex businesses grow.',
      },
    },
  },
  {
    path: '/services',
    title: 'Services | Brand, Strategy, Creative, and Growth Consulting',
    description:
      'Explore TWOGHOSTS services: marketing strategy, brand strategy, creative content, growth campaigns, identity design, and fractional CMO leadership.',
    ogImage: '/images/og/services-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services',
    keywords: ['marketing services', 'brand services', 'growth consulting', 'B2B marketing'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'TWOGHOSTS Services',
      'url': 'https://twoghosts.com/services',
      'description': 'Strategy-first consulting services for B2B and complex businesses.',
    },
  },
  {
    path: '/services/marketing-strategy',
    title: 'Marketing Strategy | TWOGHOSTS',
    description:
      'Deep-dive marketing strategy for teams tired of guessing. We audit, clarify, and map a three-year growth plan you can actually execute.',
    ogImage: '/images/og/marketing-strategy-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/marketing-strategy',
    keywords: ['marketing strategy', 'B2B marketing strategy', 'growth strategy', 'go-to-market'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Marketing Strategy',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/marketing-strategy',
      'description': 'Comprehensive marketing strategy and planning for B2B and complex businesses. Go-to-market strategy, funnel optimization, messaging, and measurement frameworks.',
      'serviceType': 'Marketing Strategy Consulting',
      'areaServed': 'US',
    },
  },
  {
    path: '/services/brand-strategy',
    title: 'Brand Strategy | TWOGHOSTS',
    description:
      'Build a brand that means something. Strategic positioning, messaging architecture, and differentiation that makes every marketing dollar work harder.',
    ogImage: '/images/og/brand-strategy-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/brand-strategy',
    keywords: ['brand strategy', 'brand positioning', 'B2B branding', 'messaging strategy'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Brand Strategy',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/brand-strategy',
      'description': 'Brand positioning, messaging architecture, voice development, and differentiation strategy for B2B and complex businesses.',
      'serviceType': 'Brand Strategy Consulting',
      'areaServed': 'US',
    },
  },
  {
    path: '/services/brand-identity-design',
    title: 'Brand Identity & Design | TWOGHOSTS',
    description:
      'Visual identity that reinforces strategy. Logo, design systems, and brand guidelines that look professional without being boring.',
    ogImage: '/images/og/brand-identity-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/brand-identity-design',
    keywords: ['brand identity', 'logo design', 'visual identity', 'brand design system'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Brand Identity & Design',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/brand-identity-design',
      'description': 'Comprehensive brand identity design including logo, visual systems, style guides, and design templates that bring your strategy to life.',
      'serviceType': 'Brand Identity Design',
      'areaServed': 'US',
    },
  },
  {
    path: '/services/creative-content',
    title: 'Creative & Content | TWOGHOSTS',
    description:
      'Content that cuts through the noise. Strategic creative across blogs, social, email, video, and more that sounds like you and does actual work for your business.',
    ogImage: '/images/og/creative-content-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/creative-content',
    keywords: ['content creation', 'content strategy', 'creative services', 'thought leadership'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Creative & Content',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/creative-content',
      'description': 'Strategic content development and creative services including blog articles, website copy, social media, email campaigns, video, and thought leadership.',
      'serviceType': 'Content Strategy & Creative Services',
      'areaServed': 'US',
    },
  },
  {
    path: '/services/growth-campaigns',
    title: 'Growth Campaigns | TWOGHOSTS',
    description:
      'Integrated campaigns that move the needle. Multi-channel strategy and execution built around clear goals, real audiences, and messages that resonate.',
    ogImage: '/images/og/growth-campaigns-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/growth-campaigns',
    keywords: ['growth campaigns', 'marketing campaigns', 'integrated marketing', 'campaign strategy'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Growth Campaigns',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/growth-campaigns',
      'description': 'Integrated campaign design and execution including paid media, email marketing, content development, and conversion optimization.',
      'serviceType': 'Growth Marketing & Campaign Execution',
      'areaServed': 'US',
    },
  },
  {
    path: '/services/cmo-on-demand',
    title: 'CMO-on-Demand | TWOGHOSTS',
    description:
      'Senior marketing leadership without the full-time hire. Strategic planning, team management, and accountability for companies that need CMO-level guidance.',
    ogImage: '/images/og/cmo-on-demand-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/services/cmo-on-demand',
    keywords: ['fractional CMO', 'CMO services', 'marketing leadership', 'part-time CMO'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'CMO-on-Demand',
      'provider': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
      },
      'url': 'https://twoghosts.com/services/cmo-on-demand',
      'description': 'Fractional CMO services providing strategic marketing leadership, team management, budget planning, and performance measurement without full-time overhead.',
      'serviceType': 'Fractional CMO & Marketing Leadership',
      'areaServed': 'US',
    },
  },
  {
    path: '/blog',
    title: 'Blog | TWOGHOSTS',
    description:
      'Insights on strategy, creativity, and practical marketing wisdom. Real talk about B2B growth, branding, and what actually works.',
    ogImage: '/images/og/blog-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/blog',
    keywords: ['marketing blog', 'strategy insights', 'B2B marketing', 'business growth'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'TWOGHOSTS Blog',
      'url': 'https://twoghosts.com/blog',
      'description': 'Insights on marketing strategy, branding, and business growth. Less bullshit, more results.',
      'publisher': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://twoghosts.com/logo.svg',
        },
      },
    },
  },
  {
    path: '/contact',
    title: 'Contact TWOGHOSTS | Get In Touch',
    description:
      "Ready to untangle your marketing mess and grow on purpose? Reach out and let's talk about what's broken and how to fix it.",
    ogImage: '/images/og/contact-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/contact',
    keywords: ['contact TWOGHOSTS', 'get in touch', 'marketing consultation', 'inquiry'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'url': 'https://twoghosts.com/contact',
      'name': 'Contact TWOGHOSTS',
      'description': 'Get in touch with TWOGHOSTS for marketing strategy and brand consulting.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'TWOGHOSTS',
        'telephone': '+1-984-344-0738',
        'email': 'hello@twoghoststrategy.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Raleigh',
          'addressRegion': 'NC',
          'addressCountry': 'US',
        },
      },
    },
  },
  {
    path: '/schedule',
    title: 'Schedule A Call | TWOGHOSTS',
    description:
      "Book a consultation to discuss your marketing and growth challenges. No sales pitch, just real talk about what's broken and how to fix it.",
    ogImage: '/images/og/schedule-og.png',
    ogType: 'website',
    canonical: 'https://twoghosts.com/schedule',
    keywords: ['schedule consultation', 'book a call', 'marketing consultation', 'strategy session'],
    schemaJsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'url': 'https://twoghosts.com/schedule',
      'name': 'Schedule A Consultation',
      'description': 'Book a consultation with TWOGHOSTS to discuss marketing strategy and business growth.',
    },
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | TWOGHOSTS',
    description: 'TWOGHOSTS privacy policy and data protection practices.',
    noIndex: true,
  },
  {
    path: '/terms',
    title: 'Terms of Service | TWOGHOSTS',
    description: 'TWOGHOSTS terms of service and legal information.',
    noIndex: true,
  },
];

export function getSeoForPath(path: string): SeoMeta {
  // Normalize path (remove trailing slash unless it's root)
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');

  const match = seoByRoute.find((item) => item.path === normalizedPath);
  if (!match) {
    // fallback so we never have totally missing meta
    return {
      path: normalizedPath,
      title: `TWOGHOSTS`,
      description:
        'Brand and marketing consultants helping teams untangle chaotic growth problems.',
    };
  }
  return match;
}
