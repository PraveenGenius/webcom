import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx(), image(), partytown()],
  output: "server",
  adapter: netlify()
});