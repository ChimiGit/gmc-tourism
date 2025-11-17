// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gmctourism.com',
	compressHTML: true,
	integrations: [
		mdx(),
		sitemap({
			customPages: ['/blog'],
		}),
	],
	markdown: {
		smartypants: true,
		shikiConfig: {
			theme: 'github-dark-default',
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});