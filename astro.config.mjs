import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { LOCALES, DEFAULT_LOCALE } from './src/data/locales.mjs';

// https://astro.build
export default defineConfig({
  site: 'https://egrowth.ma',

  // One canonical shape for every URL: no trailing slash, real .html on disk.
  // The nginx and Apache snippets in the README serve /comptes-publicitaires
  // from comptes-publicitaires.html, so the canonical in <head> always matches
  // the URL the visitor asked for.
  trailingSlash: 'never',
  build: {
    format: 'file',

    // All CSS goes inline in <style>, never a <link>. The whole stylesheet is
    // ~11 KB raw / 9 KB gzipped, so a linked file costs two render-blocking
    // round trips to save bytes that are cheaper than the round trips —
    // Lighthouse measured FCP at 1.36 s linked and the budget is 1.3 s.
    // The trade is that CSS is no longer cached across pages; for a site whose
    // visitors arrive cold from search or an ad, the first paint wins.
    inlineStylesheets: 'always',
  },

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
      // /404 is a real file (the host points error_page at it) but it is not a
      // page anyone should be sent to, so it stays out of the sitemap. It also
      // carries noindex; the two are separate signals and both are wanted.
      filter: (page) => !/\/404(\.html)?$/.test(page),
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
