import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { LOCALES, DEFAULT_LOCALE } from './src/data/locales.mjs';

// https://astro.build
export default defineConfig({
  site: 'https://egrowth.ma',

  // One canonical shape for every URL: no trailing slash, real .html on disk.
  // Cloudflare Pages and GitHub Pages both serve /comptes-publicitaires from
  // comptes-publicitaires.html, so the canonical in <head> always matches.
  trailingSlash: 'never',
  build: { format: 'file' },

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: { prefixDefaultLocale: false },
  },

  // Fonts are committed woff2 subsets in public/fonts, declared by hand in
  // src/styles/fonts.css. Deliberately NOT Astro's font provider: that fetches
  // from Google at build time, which makes every CI run depend on a third-party
  // host being reachable. See README, "Fonts".

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: { fr: 'fr-MA', en: 'en', ar: 'ar-MA' },
      },
    }),
  ],

  // No client-side router: every page is a real document a crawler can fetch
  // cold, which the AI crawlers in particular depend on.
  prefetch: false,
});
