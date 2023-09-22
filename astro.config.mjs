import { defineConfig } from "astro/config";
import vanillaExtract from "astro-vanilla-extract";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "class",
  integrations: [vanillaExtract(), svelte()],
});
