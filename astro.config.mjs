import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.konoba-jadra.com/',
	// Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	sitemap: true,
	// Generate sitemap (set to "false" to disable)
	integrations: [
		lit(),
		sitemap(),
		tailwind(),
		partytown({
			// Adds dataLayer.push as a forwarding-event.
			config: {
				forward: ['dataLayer.push']
			}
		})
	],
	// Add renderers to the config
	vite: {
		ssr: {
			external: ['svgo']
		}
	}
});
