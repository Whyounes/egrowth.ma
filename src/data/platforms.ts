/* ---------------------------------------------------------------------------
   platforms.ts — structure only. Prices live in site.ts, copy lives in i18n.
   The five per-platform ad-account pages are generated from this list, so
   adding a sixth platform is one entry here plus one i18n block per locale.
   --------------------------------------------------------------------------- */

import type { RouteKey } from './routes';
import type { PlatformName } from '../components/PlatformIcon.astro';

export type PlatformKey = 'meta' | 'tiktok' | 'snapchat' | 'google' | 'linkedin';

export type PlatformDef = {
  key: PlatformKey;
  routeKey: RouteKey;
  /** Brand name — identical in every locale, never translated. */
  label: string;
  /** Meta shows both marks, because the account covers Facebook and Instagram. */
  icons: PlatformName[];
  accentKey: 'green' | 'blue' | 'clay' | 'ochre';
  /** Flagged on the hub as the one most advertisers ask for first. */
  mostRequested?: boolean;
};

export const platforms: PlatformDef[] = [
  {
    key: 'meta',
    routeKey: 'adAccountsMeta',
    label: 'Meta',
    icons: ['facebook', 'instagram'],
    accentKey: 'blue',
    mostRequested: true,
  },
  {
    key: 'tiktok',
    routeKey: 'adAccountsTiktok',
    label: 'TikTok',
    icons: ['tiktok'],
    accentKey: 'clay',
  },
  {
    key: 'snapchat',
    routeKey: 'adAccountsSnapchat',
    label: 'Snapchat',
    icons: ['snapchat'],
    accentKey: 'ochre',
  },
  {
    key: 'google',
    routeKey: 'adAccountsGoogle',
    label: 'Google Ads',
    icons: ['google'],
    accentKey: 'green',
  },
  {
    key: 'linkedin',
    routeKey: 'adAccountsLinkedin',
    label: 'LinkedIn',
    icons: ['linkedin'],
    accentKey: 'blue',
  },
];

export const platformByKey = Object.fromEntries(platforms.map((p) => [p.key, p])) as Record<
  PlatformKey,
  PlatformDef
>;

/** routeKey -> platform, so the catch-all can resolve a platform page. */
export const platformByRoute = Object.fromEntries(
  platforms.map((p) => [p.routeKey, p]),
) as Partial<Record<RouteKey, PlatformDef>>;
