import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || "http://localhost:4321",

  // Only use base path for production builds, not for development
  base: process.env.BASE_PATH || "",

  outDir: "./dist",
  publicDir: "./public",
});
