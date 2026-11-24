import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joorec0.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ filter: (url) => !url.includes('/admin/') && !url.endsWith('/404/') })],
});
