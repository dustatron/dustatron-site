import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.SITE || "http://localhost:4321",

  // Only use base path for production builds, not for development
  base: process.env.BASE_PATH || "",

  outDir: "./dist",
  publicDir: "./public",
});
