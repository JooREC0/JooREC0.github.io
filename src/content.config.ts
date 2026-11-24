import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.preprocess(value => value === '' || value === null ? undefined : value, z.coerce.date().optional()),
    category: z.string().default('Learning Notes'),
    tags: z.preprocess(value => value ?? [], z.array(z.string()).default([])),
    relatedRepo: z.preprocess(value => value === null ? undefined : value, z.union([z.url(), z.literal('')]).optional()),
    draft: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '*.md' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { blog, pages };
