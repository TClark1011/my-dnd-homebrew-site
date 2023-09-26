import { z, defineCollection } from "astro:content";

const homebrewCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(32),
      description: z.string().max(96),
      hidden: z.boolean().default(false),
      banner: image().optional(),
      bannerYPosition: z.string().optional(),
    }),
});

export const collections = {
  homebrew: homebrewCollection,
};
