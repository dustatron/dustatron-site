import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dustatron.github.io/dustatron-site/",
  // Only use base path for production builds, not for development
  base: process.env.NODE_ENV === "production" ? "/dustatron-site" : "",
  outDir: "./dist",
  publicDir: "./public",
  build: {
    assets: "_assets",
  },
});
