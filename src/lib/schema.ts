/* JSON-LD builders. Every one of these must match copy that is visibly on the
   page — marked-up text that a visitor cannot see is what gets a site a
   structured-data penalty, and it is also just lying. */

import type { Locale, RouteKey } from '../data/routes';
import { pathFor, localeTags } from '../data/routes';

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  trail: { label: string; key: RouteKey }[],
  lang: Locale,
  siteUrl: string,
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.label,
      item: `${siteUrl}${pathFor(step.key, lang)}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  lang: Locale;
  siteUrl: string;
  /** Monthly price in MAD. Omit while it is still a placeholder. */
  price?: string;
  areaServed?: string;
}) {
  const node: Record<string, unknown> = {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { '@id': `${opts.siteUrl}/#organization` },
    areaServed: { '@type': 'Country', name: opts.areaServed ?? 'Morocco' },
    inLanguage: localeTags[opts.lang],
  };

  if (opts.price) {
    node.offers = {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: 'MAD',
      availability: 'https://schema.org/InStock',
    };
  }

  return node;
}
