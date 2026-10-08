/* ---------------------------------------------------------------------------
   routes.ts — the URL map. Slugs live here and nowhere else, so a page's
   filename never constrains its URL and adding a locale is a data edit.

   KEYWORD STRATEGY (researched October 2026)
   -----------------------------------------
   Each locale owns a different vocabulary, because Moroccan advertisers search
   in different languages depending on what they are looking for:

   · EN — the ad-account industry vocabulary: "agency ad account meta",
     "...tiktok", "...snapchat", "...google", "...linkedin", plus
     "agency ad account morocco" and "verified agency ad account" on the hub.
     This is the English term the niche actually uses, and it is what our
     direct competitors (adz.ma, evido.me/ma-en) rank on.

   · FR — the largest real Moroccan volume: "compte publicitaire agence",
     "agence meta ads maroc", "prix publicité facebook maroc".

   · AR — Modern Standard Arabic, using Meta's and Snapchat's own Arabic
     wording: "حساب إعلاني", "حساب إعلاني للوكالة", "حساب إعلاني موثق".
     This also picks up Gulf spillover, where agency Snapchat accounts are a
     much bigger market than in Morocco.

   · DARIJA — deliberately NOT a URL language. Darija has no settled written
     vocabulary for this (the dictionary word for advertising is إشهار /
     "ich'haar", but nobody types it to find an ad account) and Moroccans use
     MSA or French for technical searches. Darija's place on this business is
     the ad creative, the UGC scripts and the WhatsApp conversation — not the
     slugs. Keep it there.
   --------------------------------------------------------------------------- */

import { LOCALES, DEFAULT_LOCALE, LOCALE_TAGS } from './locales.mjs';

export type Locale = 'fr' | 'en' | 'ar';

export const locales = LOCALES as readonly Locale[];
export const defaultLocale = DEFAULT_LOCALE as Locale;
export const localeTags = LOCALE_TAGS as Record<Locale, string>;

export type RouteKey =
  | 'home'
  | 'adAccounts'
  | 'adAccountsMeta'
  | 'adAccountsTiktok'
  | 'adAccountsSnapchat'
  | 'adAccountsGoogle'
  | 'adAccountsLinkedin'
  | 'services'
  | 'servicesMetaAds'
  | 'servicesGoogleAds'
  | 'servicesTiktokAds'
  | 'servicesUgc'
  | 'servicesCro'
  | 'servicesTracking'
  | 'servicesEcommerce'
  | 'servicesApps'
  | 'servicesWebsites'
  | 'work'
  | 'industriesCod'
  | 'industriesB2b'
  | 'pricing'
  | 'audit'
  | 'contact'
  | 'resources'
  | 'resourcesVat'
  | 'resourcesCosts'
  | 'resourcesRestricted'
  | 'glossary'
  | 'about'
  | 'terms'
  | 'privacy';

type RouteDef = {
  /** Path WITHOUT the locale prefix. '' is the locale's root. */
  path: Record<Locale, string>;
  /**
   * Pages not built yet are skipped by the header, footer and sitemap, so the
   * site never ships a link to a 404. Flip to true as each page lands.
   */
  built: boolean;
  /** The cluster this page owns. Documentation, not used at runtime. */
  targets?: Partial<Record<Locale, string>>;
};

export const routes: Record<RouteKey, RouteDef> = {
  home: {
    path: { fr: '', en: '', ar: '' },
    built: true,
    targets: {
      fr: 'agence marketing digital maroc',
      en: 'agency ad account morocco',
      ar: 'وكالة تسويق رقمي المغرب',
    },
  },

  /* --- The money cluster ------------------------------------------------- */
  adAccounts: {
    path: {
      fr: 'comptes-publicitaires',
      en: 'agency-ad-account',
      ar: 'حساب-إعلاني-وكالة',
    },
    built: true,
    targets: {
      fr: 'compte publicitaire agence maroc',
      en: 'agency ad account morocco + verified agency ad account',
      ar: 'حساب إعلاني للوكالة + حساب إعلاني موثق',
    },
  },
  adAccountsMeta: {
    path: {
      fr: 'comptes-publicitaires/meta',
      en: 'agency-ad-account/meta',
      ar: 'حساب-إعلاني-وكالة/ميتا',
    },
    built: true,
    targets: {
      fr: 'compte publicitaire meta maroc',
      en: 'agency ad account meta',
      ar: 'حساب إعلاني ميتا للوكالة',
    },
  },
  adAccountsTiktok: {
    path: {
      fr: 'comptes-publicitaires/tiktok',
      en: 'agency-ad-account/tiktok',
      ar: 'حساب-إعلاني-وكالة/تيك-توك',
    },
    built: true,
    targets: {
      fr: 'compte publicitaire tiktok maroc',
      en: 'agency ad account tiktok',
      ar: 'حساب إعلاني تيك توك للوكالة',
    },
  },
  adAccountsSnapchat: {
    path: {
      fr: 'comptes-publicitaires/snapchat',
      en: 'agency-ad-account/snapchat',
      ar: 'حساب-إعلاني-وكالة/سناب-شات',
    },
    built: true,
    targets: {
      fr: 'compte publicitaire snapchat maroc',
      en: 'agency ad account snapchat',
      ar: 'حساب إعلاني سناب شات للوكالة',
    },
  },
  adAccountsGoogle: {
    path: {
      fr: 'comptes-publicitaires/google-ads',
      en: 'agency-ad-account/google',
      ar: 'حساب-إعلاني-وكالة/جوجل',
    },
    built: true,
    targets: {
      fr: 'compte google ads agency maroc',
      en: 'agency ad account google',
      ar: 'حساب إعلاني جوجل للوكالة',
    },
  },
  adAccountsLinkedin: {
    path: {
      fr: 'comptes-publicitaires/linkedin',
      en: 'agency-ad-account/linkedin',
      ar: 'حساب-إعلاني-وكالة/لينكد-إن',
    },
    built: true,
    targets: {
      fr: 'compte publicitaire linkedin maroc',
      en: 'agency ad account linkedin',
      ar: 'حساب إعلاني لينكد إن للوكالة',
    },
  },

  /* --- Services ---------------------------------------------------------- */
  services: {
    path: { fr: 'services', en: 'services', ar: 'الخدمات' },
    built: true,
  },
  servicesMetaAds: {
    path: { fr: 'services/meta-ads', en: 'services/meta-ads', ar: 'الخدمات/إعلانات-ميتا' },
    built: true,
    targets: { fr: 'agence meta ads maroc', en: 'meta ads agency morocco' },
  },
  servicesGoogleAds: {
    path: { fr: 'services/google-ads', en: 'services/google-ads', ar: 'الخدمات/إعلانات-جوجل' },
    built: true,
    targets: { fr: 'agence google ads maroc' },
  },
  servicesTiktokAds: {
    path: { fr: 'services/tiktok-ads', en: 'services/tiktok-ads', ar: 'الخدمات/إعلانات-تيك-توك' },
    built: true,
    targets: { fr: 'agence tiktok ads maroc' },
  },
  servicesUgc: {
    path: { fr: 'services/ugc', en: 'services/ugc', ar: 'الخدمات/فيديوهات-ugc' },
    built: true,
    targets: { fr: 'ugc maroc, créateur ugc maroc' },
  },
  servicesCro: {
    path: { fr: 'services/cro', en: 'services/cro', ar: 'الخدمات/تحسين-التحويل' },
    built: true,
  },
  servicesTracking: {
    path: { fr: 'services/tracking', en: 'services/tracking', ar: 'الخدمات/التتبع' },
    built: true,
  },
  servicesEcommerce: {
    path: { fr: 'services/e-commerce', en: 'services/e-commerce', ar: 'الخدمات/التجارة-الإلكترونية' },
    built: true,
    targets: { fr: 'agence shopify maroc' },
  },
  servicesApps: {
    path: { fr: 'services/applications', en: 'services/mobile-apps', ar: 'الخدمات/تطبيقات-الجوال' },
    built: true,
    targets: { fr: 'développement application mobile maroc' },
  },
  servicesWebsites: {
    path: { fr: 'services/sites-web', en: 'services/websites', ar: 'الخدمات/المواقع' },
    built: true,
  },

  /* --- Proof ------------------------------------------------------------- */
  work: {
    path: { fr: 'realisations', en: 'work', ar: 'أعمالنا' },
    built: true,
  },
  industriesCod: {
    path: { fr: 'secteurs/e-commerce-cod', en: 'industries/ecommerce-cod', ar: 'القطاعات/الدفع-عند-الاستلام' },
    built: true,
  },
  industriesB2b: {
    path: { fr: 'secteurs/b2b', en: 'industries/b2b', ar: 'القطاعات/b2b' },
    built: true,
  },

  /* --- Conversion -------------------------------------------------------- */
  pricing: {
    path: { fr: 'tarifs', en: 'pricing', ar: 'الأسعار' },
    built: true,
    targets: { fr: 'tarif agence marketing digital maroc, prix publicité facebook maroc' },
  },
  audit: {
    path: { fr: 'audit-gratuit', en: 'free-audit', ar: 'تحليل-مجاني' },
    built: true,
  },
  contact: {
    path: { fr: 'contact', en: 'contact', ar: 'اتصل-بنا' },
    built: true,
  },

  /* --- Resources: the agentic-search engine ------------------------------ */
  resources: {
    path: { fr: 'ressources', en: 'resources', ar: 'الموارد' },
    built: true,
  },
  resourcesVat: {
    path: {
      fr: 'ressources/tva-publicite-meta-tiktok-maroc',
      en: 'resources/vat-on-meta-tiktok-ads-morocco',
      ar: 'الموارد/الضريبة-على-إعلانات-ميتا-وتيك-توك',
    },
    built: true,
    targets: {
      fr: 'tva meta ads maroc, tva tiktok ads maroc',
      en: 'vat on meta ads morocco',
      ar: 'ضريبة القيمة المضافة إعلانات ميتا المغرب',
    },
  },
  resourcesCosts: {
    path: {
      fr: 'ressources/couts-publicite-maroc',
      en: 'resources/morocco-ad-cost-benchmarks',
      ar: 'الموارد/تكاليف-الإعلان-في-المغرب',
    },
    built: true,
    targets: { fr: 'prix publicité facebook instagram maroc, cpm cpc maroc' },
  },
  resourcesRestricted: {
    path: {
      fr: 'ressources/compte-publicitaire-restreint',
      en: 'resources/restricted-ad-account',
      ar: 'الموارد/حساب-إعلاني-مقيد',
    },
    built: true,
    targets: { fr: 'compte publicitaire restreint, compte facebook ads bloqué' },
  },
  glossary: {
    path: { fr: 'ressources/glossaire', en: 'resources/glossary', ar: 'الموارد/قاموس-المصطلحات' },
    built: true,
  },

  /* --- Company ----------------------------------------------------------- */
  about: {
    path: { fr: 'a-propos', en: 'about', ar: 'من-نحن' },
    built: true,
  },
  terms: {
    path: { fr: 'conditions-generales', en: 'terms', ar: 'الشروط-والأحكام' },
    built: true,
  },
  privacy: {
    path: { fr: 'confidentialite', en: 'privacy', ar: 'الخصوصية' },
    built: true,
  },
};

export const routeKeys = Object.keys(routes) as RouteKey[];

/** Locale prefix: the default locale lives at the root, the others under /xx. */
export function localePrefix(lang: Locale): string {
  return lang === defaultLocale ? '' : `/${lang}`;
}

/**
 * Root-relative path for a route in a locale, with no trailing slash.
 *
 * Percent-encoded, so the Arabic slugs in canonical, hreflang and sitemap are
 * byte-identical to what a browser actually requests. Raw UTF-8 in an href
 * works, but then the canonical no longer matches the request and that is a
 * needless thing to make a crawler guess at.
 */
export function pathFor(key: RouteKey, lang: Locale): string {
  const slug = routes[key].path[lang];
  const prefix = localePrefix(lang);
  if (!slug) return prefix || '/';
  return encodeURI(`${prefix}/${slug}`);
}

/** Absolute URL, for canonicals, hreflang and Schema.org. */
export function urlFor(key: RouteKey, lang: Locale, siteUrl: string): string {
  const path = pathFor(key, lang);
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
}

/** Every locale of a route, for the reciprocal hreflang set. */
export function alternatesFor(key: RouteKey, siteUrl: string) {
  return locales.map((lang) => ({
    lang,
    hreflang: localeTags[lang],
    href: urlFor(key, lang, siteUrl),
  }));
}

export function isBuilt(key: RouteKey): boolean {
  return routes[key].built;
}
