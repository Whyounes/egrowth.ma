// Shared by astro.config.mjs (plain ESM, no TS) and by src/i18n.
export const LOCALES = ['fr', 'en', 'ar'];
export const DEFAULT_LOCALE = 'fr';

/** BCP-47 tags used in <html lang>, hreflang and Schema.org. */
export const LOCALE_TAGS = {
  fr: 'fr-MA',
  en: 'en',
  ar: 'ar-MA',
};

export const LOCALE_DIR = {
  fr: 'ltr',
  en: 'ltr',
  ar: 'rtl',
};
