import { defineConfig } from "astro/config";
import vanillaExtract from "astro-vanilla-extract";
import solidJs from "@astrojs/solid-js";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "class",
  integrations: [vanillaExtract(), solidJs(), mdx()],
  vite: {
    ssr: {
      noExternal: ["solid-use"]
    }
  }
});