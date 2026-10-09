/* ---------------------------------------------------------------------------
   i18n — all copy, one file per locale, keyed identically.

   French is the default locale: it is the language Moroccan business buyers
   search in. English carries the "agency ad account" industry vocabulary.
   Arabic uses Modern Standard Arabic, which is what people type even when they
   speak Darija. Darija belongs in the ad creative and the WhatsApp reply, not
   in the interface — see the note at the top of src/data/routes.ts.
   --------------------------------------------------------------------------- */

import type { Locale } from '../data/routes';
import { fr } from './fr';
import { en } from './en';
import { ar } from './ar';

/** The French dictionary defines the shape every other locale must satisfy. */
export type Copy = typeof fr;

const dictionaries: Record<Locale, Copy> = { fr, en, ar };

export function t(lang: Locale): Copy {
  return dictionaries[lang];
}
