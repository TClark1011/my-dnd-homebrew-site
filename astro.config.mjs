import { defineConfig } from "astro/config";
import vanillaExtract from "astro-vanilla-extract";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "class",
  integrations: [vanillaExtract(), solidJs()],
  vite: { ssr: { noExternal: ["solid-use"] } },
});
