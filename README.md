# egrowth.ma

The eGrowth website: a static, trilingual (French / English / Arabic) marketing
site for a Moroccan tech-and-marketing agency.

Design source: the **eGrowth — Site Redesign Proposal** canvas (artboards for
the home page, the ad-account page, the Arabic/RTL layout, the site map and
conversion paths, the navigation system, the design system and the hero image
directions).

## Stack

- **Astro 7**, static output, zero client-side JavaScript by default.
- **Plain CSS** with custom properties. No utility framework — the design
  system is small and fixed, and a token file is lighter than a build step.
- **Self-hosted woff2 subsets.** No third-party font request at runtime, and no
  third-party host in the build either.
- Deploys as plain files to any static host.

## Commands

```sh
npm install
npm run dev            # local dev server
npm run build          # static build into dist/
npm run check          # Astro + TypeScript diagnostics
npm run check:content  # fails if an unfilled placeholder reached the HTML
npm run verify         # check + build + check:content — run this before deploy
```

## How the site is put together

### One page file, all routes in data

`src/pages/[...slug].astro` is the only page file. Every URL in every locale is
generated from `src/data/routes.ts` via `getStaticPaths`, and each route maps to
a view in `src/views/`.

This matters for one specific reason: Arabic slugs are Arabic script
(`/ar/حساب-إعلاني-وكالة`). Keeping slugs in data means they never have to
become Arabic filenames on disk, and changing a slug or adding a locale is a
one-file edit.

A route carries `built: false` until its view exists. The header, footer and
sitemap skip unbuilt routes, so the site never ships a link to a 404. Flip the
flag when the page lands.

### Locales

French is the default and lives at the root. English is under `/en/`, Arabic
under `/ar/`. Every page has reciprocal `hreflang` on all three plus
`x-default` on the French URL, and a self-referencing canonical.

Each locale owns a **different keyword vocabulary** — see the long comment at
the top of `src/data/routes.ts`. Short version:

| Locale | Vocabulary | Example |
| --- | --- | --- |
| FR | Largest real Moroccan volume | `compte publicitaire agence maroc` |
| EN | The ad-account industry term | `agency ad account meta` |
| AR | Modern Standard Arabic | `حساب إعلاني للوكالة` |

**Darija is not a URL language.** It has no settled written vocabulary for this
(the dictionary word for advertising is إشهار / *ich'haar*, but nobody types it
to find an ad account) and Moroccans use French or MSA for technical searches.
Darija belongs in the ad creative, the UGC scripts and the WhatsApp reply.

Copy lives in `src/i18n/{fr,en,ar}.ts`. The French dictionary defines the type
that the other two must satisfy, so a missing translation is a type error rather
than a blank on the page.

### Facts and placeholders

**Every fact about the business lives in `src/data/site.ts` and nowhere else.**
Anything not yet known is wrapped in `TODO('hint')`, which renders as
`[[TODO: hint]]`.

`npm run check:content` walks the built HTML and fails while any marker
remains, listing each one with the pages it landed on. An unfilled placeholder
cannot reach production. Run `npm run verify` before every deploy.

### Fonts

Committed subsets in `public/fonts`, declared by hand in
`src/styles/fonts.css`:

| File | Covers | Size |
| --- | --- | --- |
| `manrope-latin-400-800.woff2` | Latin, variable 400–800 | 24.8 KB |
| `manrope-latin-ext-400-800.woff2` | Latin Extended (on demand) | 15.1 KB |
| `plexar-arabic-400.woff2` | Arabic block, 400 | 42.8 KB |
| `plexar-arabic-700.woff2` | Arabic block, 700 | 44.3 KB |

The two families are split by `unicode-range`, so one font stack serves every
locale and the browser downloads only what the page renders. Plex declares no
Latin coverage, so Latin runs inside an Arabic page (the brand name, `MAD`, any
figure) fall through to Manrope — deliberate, and it saves 39 KB per Arabic
page. Weight 600 on an Arabic page resolves to 700.

To regenerate (e.g. to add a weight): fetch the Google Fonts `css2` URL with a
modern browser User-Agent so it returns woff2, take the `src` URLs for the
subsets you want, drop the files in `public/fonts`, and update the
`@font-face` blocks. Astro's own font provider is deliberately **not** used: it
fetches from Google at build time, which would make every CI run depend on a
third-party host.

## Performance budget

Enforce these; they are the reason the design refuses carousels, chat widgets
and tag managers.

| Metric | Budget | Notes |
| --- | --- | --- |
| TTFB (Morocco) | ≤ 200 ms | Static HTML from an edge with a Casablanca PoP |
| LCP on 4G | ≤ 1.2 s | Half of Google's "good" threshold |
| CLS | ≤ 0.02 | Explicit `width`/`height` on every image |
| INP | ≤ 100 ms | Almost nothing is interactive |
| Total page weight (FR/EN) | ≤ 120 KB | Including fonts |
| Total page weight (AR) | ≤ 200 KB | Arabic webfonts cost ~87 KB on their own |
| JS on first paint | 0 KB | |

The hero slider, when it lands, is a `scroll-snap` rail with **no JavaScript
and no autoplay**: only the first image is in the critical path
(`fetchpriority="high"`, preloaded, ≤ 60 KB in AVIF); images 2–4 are
`loading="lazy"` and never download unless the visitor clicks.

## Deploying

Build output is plain static files in `dist/`. `trailingSlash: 'never'` with
`build.format: 'file'`, so `/comptes-publicitaires` is served from
`comptes-publicitaires.html` and the canonical in `<head>` always matches the
request.

`public/CNAME` carries the custom domain for GitHub Pages and is harmless
elsewhere.

**Recommended: Cloudflare Pages** — build command `npm run build`, output
directory `dist`. Cloudflare serves a Casablanca point of presence, which is
what the ≤ 200 ms TTFB target rests on.

Whichever host: run `npm run verify` first. It will refuse to pass while a
placeholder is unfilled.

## Status

Built: the home page and the ad-account hub, in all three locales, with the
layout, tokens, routing, i18n, hreflang, Schema.org `Organization` + `WebSite`,
`robots.txt`, `llms.txt` and the sitemap.

Not yet built (routes defined, `built: false`): the five per-platform
ad-account pages, the services pages, work and industries, pricing, the free
audit, contact, the resource guides, and the company and legal pages.
