import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().default(''),
    date: z.string().or(z.date()),
    updated: z.string().or(z.date()).optional().nullable(),
    excerpt: z.string().optional().nullable(),
    featured: z.boolean().optional().nullable(),
    feature_image: z.string().optional().nullable(),
    author: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable().default([]),
    meta_title: z.string().optional().nullable(),
    meta_description: z.string().optional().nullable(),
  }),
});

export const collections = {
  blog,
};
