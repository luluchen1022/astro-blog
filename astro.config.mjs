import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://luluchen1022.github.io",
  base: "/astro-blog",
  integrations: [tailwind()],
});
