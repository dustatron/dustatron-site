// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  site: process.env.SITE || "http://localhost:4321",
  base: process.env.BASE_PATH || "",
  outDir: "./dist",
  publicDir: "./public",
});
