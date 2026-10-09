/* ---------------------------------------------------------------------------
   guides.ts — the resource guides. Structure and sources here, prose in i18n.

   These pages exist to be quoted, not just ranked: each one answers its
   question in the first forty words under a heading phrased the way people
   actually ask it, every number carries a date, and every claim cites a
   primary source. That is what an assistant lifts, and it happens to be what
   a buyer wants too.
   --------------------------------------------------------------------------- */

import type { RouteKey } from './routes';

export type GuideKey = 'vat' | 'costs' | 'restricted';

export type GuideDef = {
  key: GuideKey;
  routeKey: RouteKey;
  accentKey: 'green' | 'blue' | 'clay' | 'ochre';
  /** Drives `dateModified` in the Article schema and the visible "updated" line. */
  updated: string;
  /** Primary sources, same list in every locale. */
  sources: { label: string; url: string }[];
};

export const guides: GuideDef[] = [
  {
    key: 'vat',
    routeKey: 'resourcesVat',
    accentKey: 'ochre',
    updated: '2026-10-08',
    sources: [
      {
        label: 'Hespress — Meta applique la TVA au Maroc dès octobre',
        url: 'https://fr.hespress.com/489385-publicite-meta-applique-la-tva-au-maroc-des-octobre.html',
      },
      {
        label: 'Hespress — TikTok Ads : une TVA de 20 % appliquée aux annonceurs marocains',
        url: 'https://fr.hespress.com/485171-tiktok-ads-une-tva-de-20-appliquee-aux-annonceurs-marocains.html',
      },
      {
        label: 'Le360 — le nouveau dispositif de TVA sur les services numériques',
        url: 'https://fr.le360.ma/economie/netflix-google-meta-airbnb-le-nouveau-dispositif-de-tva-face-au-defi-de-son-application_F6Q6MRBR7BGLBB6UTNKSIYHFWQ/',
      },
    ],
  },
  {
    key: 'costs',
    routeKey: 'resourcesCosts',
    accentKey: 'blue',
    updated: '2026-10-08',
    sources: [
      {
        label: 'Anima — Prix publicité Facebook & Instagram au Maroc',
        url: 'https://anima.ma/blog/prix-publicite-facebook-instagram-maroc',
      },
      {
        label: 'Webexag — Prix agence marketing digital Maroc',
        url: 'https://www.webexag.com/prix-agence-marketing-digital-maroc/',
      },
      {
        label: 'Deadline.ma — Meta Ads au Maroc : benchmarks',
        url: 'https://deadline.ma/conseils/marketing-digital/meta-ads-facebook-instagram-maroc',
      },
    ],
  },
  {
    key: 'restricted',
    routeKey: 'resourcesRestricted',
    accentKey: 'clay',
    updated: '2026-10-08',
    sources: [
      {
        label: 'Meta — Advertising Standards',
        url: 'https://transparency.meta.com/policies/ad-standards/',
      },
      {
        label: 'Meta — À propos du compte publicitaire',
        url: 'https://ar-ar.facebook.com/business/help/513423505374095',
      },
    ],
  },
];

export const guideByRoute = Object.fromEntries(
  guides.map((g) => [g.routeKey, g]),
) as Partial<Record<RouteKey, GuideDef>>;
