import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(["CULTURE", "SHOPPING", "ACTIVITIES", "NATURE", "FESTIVAL"]),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    price: z.string(), // e.g., "Free Entry", "¥ 1,500", "$50"
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  events,
};
