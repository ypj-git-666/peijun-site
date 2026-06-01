import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const observations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/observations' }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/notes' }),
});

const guest = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/guest' }),
});

const media = defineCollection({
  loader: glob({ pattern: '**/[!_]*.json', base: 'src/content/media' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['podcast', 'video']),
    platform: z.enum(['youtube', 'bilibili', 'xiaohongshu', 'other']),
    url: z.string().url(),
    cover: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

const bookshelf = defineCollection({
  loader: glob({ pattern: '**/[!_]*.json', base: 'src/content/bookshelf' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    oneLiner: z.string(),
    review: z.string(),
    category: z.enum(['book', 'bookstore']),
    date: z.string().optional(),
    cover: z.string().optional(),
    location: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { observations, notes, guest, media, bookshelf };
