/**
 * Service Configuration
 * Single source of truth for service icons, names, and metadata
 * Used by Services.astro grid and all service detail pages
 */

export const serviceMeta = {
  'marketing-strategy': {
    icon: '/images/icons/compass.svg',
    name: 'Marketing Strategy',
    description:
      'Do you know how parents always say, "I wish there was a manual on parenting?" That\'s kind of what our strategies are, except for business growth.',
  },
  'brand-strategy': {
    icon: '/images/icons/brand.svg',
    name: 'Branding',
    description:
      'Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.',
  },
  'creative-content': {
    icon: '/images/icons/bulb.svg',
    name: 'Creative',
    description:
      'Whether your creative needs a complete overhaul or just a bit of an infusion, we have you covered without upsetting your current relationships. We are on a mission to change the world, one idea at a time.',
  },
  'content': {
    icon: '/images/icons/pencil.svg',
    name: 'Content',
    description:
      "This is not your intern's SEO-packed, boring Wikipedia entry. Your content needs to grab the attention of your target market and hold it. We believe a hundred amazing words will change the world for your business, not a hundred mediocre articles.",
  },
  'cmo-on-demand': {
    icon: '/images/icons/dial.svg',
    name: 'Website & Martech',
    description:
      'The base of your marketing efforts and the epicenter of your marketing effectiveness gauge. We assess, rethink, and offer tactical steps to lift the impact of the home base of your efforts.',
  },
  'growth-campaigns': {
    icon: '/images/icons/dart.svg',
    name: 'Branding, Strategy, Creative+',
    description:
      'We also offer CMO-on-demand / marketing decision services, design, campaign execution, sales strategy, sales enablement via asset production, pitch development, martech stack design, salestech stack design, and website strategy.',
  },
} as const;

export type ServiceKey = keyof typeof serviceMeta;

/**
 * Get service metadata by slug
 * @param slug - The service slug (e.g., 'marketing-strategy')
 * @returns Service metadata object or undefined
 */
export function getServiceBySlug(slug: string) {
  return serviceMeta[slug as ServiceKey];
}

/**
 * Get all services as an array with links for grid display
 * @returns Array of services with link information
 */
export function getAllServices() {
  return [
    {
      ...serviceMeta['marketing-strategy'],
      link: '/services/marketing-strategy',
    },
    {
      ...serviceMeta['brand-strategy'],
      link: '/services/brand-strategy',
    },
    {
      ...serviceMeta['creative-content'],
      link: '/services/creative-content',
    },
    {
      ...serviceMeta['content'],
      link: '/services/creative-content',
    },
    {
      ...serviceMeta['cmo-on-demand'],
      link: '/services/cmo-on-demand',
    },
    {
      ...serviceMeta['growth-campaigns'],
      link: '/services/growth-campaigns',
    },
  ];
}
