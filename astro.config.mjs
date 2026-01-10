// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx()],
  site: process.env.SITE || "http://localhost:4321",
  base: process.env.BASE_PATH || "",
  outDir: "./dist",
  publicDir: "./public",
});
