/* ---------------------------------------------------------------------------
   services.ts — structure only; copy lives in i18n under `servicePages`.
   The nine service pages are generated from one view plus this list.
   --------------------------------------------------------------------------- */

import type { RouteKey } from './routes';
import type { PlatformName } from '../components/PlatformIcon.astro';

export type ServiceKey =
  | 'metaAds'
  | 'googleAds'
  | 'tiktokAds'
  | 'ugc'
  | 'cro'
  | 'tracking'
  | 'ecommerce'
  | 'apps'
  | 'websites';

/** Mirrors the three columns of the Services panel in the design. */
export type ServiceGroup = 'media' | 'build' | 'creative';

export type ServiceDef = {
  key: ServiceKey;
  routeKey: RouteKey;
  group: ServiceGroup;
  accentKey: 'green' | 'blue' | 'clay' | 'ochre';
  /** Brand marks shown on the card, where the service is platform-specific. */
  icons?: PlatformName[];
};

export const services: ServiceDef[] = [
  { key: 'metaAds', routeKey: 'servicesMetaAds', group: 'media', accentKey: 'blue', icons: ['facebook', 'instagram'] },
  { key: 'googleAds', routeKey: 'servicesGoogleAds', group: 'media', accentKey: 'blue', icons: ['google'] },
  { key: 'tiktokAds', routeKey: 'servicesTiktokAds', group: 'media', accentKey: 'blue', icons: ['tiktok'] },
  { key: 'cro', routeKey: 'servicesCro', group: 'media', accentKey: 'blue' },
  { key: 'tracking', routeKey: 'servicesTracking', group: 'media', accentKey: 'blue' },
  { key: 'ecommerce', routeKey: 'servicesEcommerce', group: 'build', accentKey: 'clay' },
  { key: 'apps', routeKey: 'servicesApps', group: 'build', accentKey: 'clay' },
  { key: 'websites', routeKey: 'servicesWebsites', group: 'build', accentKey: 'clay' },
  { key: 'ugc', routeKey: 'servicesUgc', group: 'creative', accentKey: 'ochre' },
];

export const serviceByRoute = Object.fromEntries(
  services.map((s) => [s.routeKey, s]),
) as Partial<Record<RouteKey, ServiceDef>>;

export const serviceGroups: ServiceGroup[] = ['media', 'build', 'creative'];
