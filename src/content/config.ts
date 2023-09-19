import { z, defineCollection } from "astro:content";

const homebrewCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hidden: z.boolean().default(false),
    banner: z.string().optional(),
    bannerYPosition: z.string().optional(),
  }),
});

export const collections = {
  homebrew: homebrewCollection,
};
