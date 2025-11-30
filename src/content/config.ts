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

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    publisher: z.enum(['jnto', 'non-jnto']),
    category: z.string(),
    area: z.string(),
    language: z.string().default('English'),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    website: z.string().optional(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    phase: z.string().optional(),
    location: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

const murals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    pillar: z.enum(['1', '2', '3']),
    pillarName: z.string(),
    artist: z.string().optional(),
    artistInfo: z
      .object({
        name: z.string(),
        photo: z.string().optional(),
        bio: z.string().optional(),
        education: z.string().optional(),
        experience: z.string().optional(),
        inspiration: z.string().optional(),
        mediums: z.string().optional(),
        vastBhutan: z.string().optional(),
        recentProject: z.string().optional(),
        birthYear: z.number().optional(),
        birthplace: z.string().optional(),
        contact: z
          .object({
            name: z.string().optional(),
            tiktok: z.string().optional(),
            instagram: z.string().optional(),
            facebook: z.string().optional(),
            twitter: z.string().optional(),
            linkedin: z.string().optional(),
            email: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    location: z.string().optional(),
    project: z.string(), // References project slug
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'event-category': eventCategory,
  events,
  experiences,
  gallery,
  about,
  resources,
  partners,
  projects,
  murals,
};
