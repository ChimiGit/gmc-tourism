import { defineCollection, z } from 'astro:content';

const eventCategory = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    color: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(), // References category ID
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    price: z.string(), // e.g., "Free Entry", "¥ 1,500", "$50"
    featured: z.boolean().default(false),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.string(), // References category ID
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    price: z.string(), // e.g., "Free Entry", "¥ 1,500", "$50"
    featured: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    date: z.date().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        location: z.string().optional(),
        source: z.string().optional(),
        rights: z.string().optional(),
      })
    ),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    cards: z.array(
      z.object({
        title: z.string().optional(),
        content: z.string(),
      })
    ),
  }),
});

export const collections = {
  'event-category': eventCategory,
  events,
  experiences,
  gallery,
  about,
};
