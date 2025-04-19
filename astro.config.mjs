import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind(),
		sitemap({
			// You can customize the sitemap options here
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
	site: 'https://portfolio.cichowlasp.org',
	base: '/',
});
