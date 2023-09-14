import { z, defineCollection } from "astro:content";

const homebrewCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  homebrew: homebrewCollection,
};
