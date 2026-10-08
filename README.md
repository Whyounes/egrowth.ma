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
npm run dev              # local dev server
npm run build            # static build into dist/
npm run check            # Astro + TypeScript diagnostics
npm run check:budget     # fails if a page is over its byte budget, or ships JS
npm run check:content    # fails if an unfilled placeholder reached the HTML
npm run check:lighthouse # Lighthouse CI over 8 representative pages
npm run verify           # check + build + check:budget + check:content
```

`npm run verify` is the one to run before a deploy. `check:lighthouse` needs a
Chrome on the machine and takes a couple of minutes, so it runs on CI rather
than in `verify`; it downloads the pinned CLI on demand and writes HTML reports
to `.lighthouseci/`. If Chrome is somewhere unusual, point `CHROME_PATH` at it.

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

One rule guards the split from the other side, in `base.css`: an element marked
`lang="ar"` on a page that is *not* in Arabic uses the reader's system Arabic
font, not Plex. Without it, the word `العربية` in the language menu pulls 44 KB
of Plex onto every French and English page — the browser is right to fetch it,
Plex is first in the stack and the glyph is in its range. See the Lighthouse
note under Performance budget.

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

### The two gates that enforce it

They measure different things, and neither one substitutes for the other.

**`npm run check:budget`** (`scripts/check-budget.mjs`) weighs the build: it
gzips every page, adds the CSS and the fonts each one preloads, and fails on a
page over budget or on a single byte of JavaScript. It takes about a second and
runs inside `verify`, because the common regression on a site like this is not
a slow script — it is somebody adding a script at all, or a 900 KB hero JPEG,
and both show up in bytes long before they show up in a lab metric.

**`npm run check:lighthouse`** (`lighthouserc.cjs`) runs a real browser over
eight representative pages — French, English, Arabic, a guide, the pricing
table, and the 404 — and asserts the scores, the paint metrics, the total
transfer, and a named list of accessibility rules. Measured on the current
build: **1.00 in all four categories on every page**, FCP 857–942 ms, LCP
~1055 ms (1663 ms on Arabic), TBT 0, CLS 0, and 45 KB of total transfer on a
French page.

The browser gate is what catches what the byte gate cannot see. It found three
real defects on its first run:

- `--c-ink-3` was `#6b7178`: 4.9:1 on white, and 4.1:1 on a tinted card, so
  every caption sitting on a tint failed WCAG AA. Every grey in `tokens.css`
  that carries text now clears 4.5:1 against the **blue tint**, the darkest
  pale ground on the site — not just against white.
- The slider dots hid their slide number with `text-indent`, leaving visible
  text that contradicted their `aria-label` (WCAG 2.5.3). Same for the
  language switcher, whose `aria-label` replaced the visible "FR".
- One Arabic word — `العربية` in the language menu — was pulling 44 KB of
  IBM Plex Sans Arabic onto **every French and English page**, because Plex is
  first in the stack and its `unicode-range` covers the glyph. A French page
  transferred 92 KB. An Arabic fragment on a non-Arabic page now renders in the
  reader's own system Arabic font, and a French page transfers 45 KB.

Note the last one: `check:budget` counts the fonts a page *preloads*, so it
read that page as 47 KB and was not wrong, just blind. That is why the
Lighthouse config asserts `total-byte-weight`.

CSS is inlined rather than linked (`build.inlineStylesheets: 'always'`). The
whole stylesheet is ~9 KB gzipped, so a linked file costs two render-blocking
round trips to save bytes that are cheaper than the round trips: FCP measured
1.36 s linked against 0.90 s inline. The trade is that CSS is no longer cached
across pages, which is the right way round for a site whose visitors arrive
cold from search or an ad.

## Deploying to your own hosting

`npm run build` produces plain static files in `dist/`. There is no server
runtime, no database and no Node process to keep alive — copy `dist/` to a
web root and you are done.

**Run `npm run verify` first.** It type-checks, builds, fails if a page is over
its byte budget or ships any JavaScript, and then fails if an unfilled
placeholder reached the HTML.

### What the server has to do

| Requirement | Why |
| --- | --- |
| Serve `/foo` from `foo.html` | `trailingSlash: 'never'` + `build.format: 'file'`, so the canonical in `<head>` always matches the request |
| `Content-Type: font/woff2` on `/fonts/*.woff2` | A wrong type makes the browser refuse the font and fall back |
| Long cache on `/_astro/*` and `/fonts/*`, short on `*.html` | Hashed asset names make them immutable; HTML must stay fresh |
| Gzip or Brotli on HTML and SVG | The page-weight figures assume it, and the CSS is inside the HTML. Do **not** re-compress woff2 |
| HTTPS, with HTTP redirected | Non-negotiable for a site collecting form data |
| Percent-encoded Arabic paths passed through intact | The `/ar/` URLs are Arabic script; most servers handle this, but test one |
| `404.html` served on a miss, **with a 404 status** | `src/pages/404.astro`. A static host has one error page for the whole site, so it carries all three languages: French first, then an English and an Arabic line with a link home. It is `noindex` and excluded from the sitemap |

### nginx

```nginx
root /var/www/egrowth/dist;
index index.html;

# Serve /foo from foo.html
location / {
  try_files $uri $uri.html $uri/index.html =404;
}

location /_astro/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

location /fonts/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
  types { font/woff2 woff2; }
}

location ~* \.html$ {
  add_header Cache-Control "public, max-age=0, must-revalidate";
}

# The try_files above already returns 404; this gives it a page. Keep it
# INTERNAL so the status code stays 404 — a 200 here would get the error page
# indexed, and tell crawlers the broken URL is a real one.
error_page 404 /404.html;
location = /404.html {
  internal;
}

gzip on;
gzip_types text/html application/json image/svg+xml;
```

### Apache

```apache
DocumentRoot /var/www/egrowth/dist
DirectoryIndex index.html
Options -Indexes

RewriteEngine On
# Serve /foo from foo.html
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

AddType font/woff2 .woff2

<LocationMatch "^/(_astro|fonts)/">
  Header set Cache-Control "public, max-age=31536000, immutable"
</LocationMatch>

<FilesMatch "\.html$">
  Header set Cache-Control "public, max-age=0, must-revalidate"
</FilesMatch>

# Keeps the 404 status; ErrorDocument does not rewrite the URL.
ErrorDocument 404 /404.html
```

### One honest note on the 200 ms target

The ≤ 200 ms TTFB budget assumes the bytes are served from an edge close to
Morocco. A single origin server in Europe will land closer to 400–600 ms from
Casablanca on a good connection, through no fault of the code. If you keep
your own hosting, putting a CDN in front of it is the cheapest way to close
that gap — the output is fully static, so any CDN works with no changes here.

`public/CNAME` is a GitHub Pages artefact. It is harmless on any other host;
delete it if you are not using GitHub Pages.

## Status

**All 31 routes are built, in all three locales — 93 pages, plus the 404.**
Zero JavaScript in the output, 1.00 Lighthouse in all four categories on every
page tested, and both gates (`check:budget`, `check:lighthouse`) wired into
`.github/workflows/ci.yml`.

Pages: home; the ad-account hub plus five per-platform pages; the services hub
plus nine service pages; work and two industry pages; pricing; the free audit;
contact; the resources hub, three guides and the glossary; about; and terms and
privacy.

Known gaps, in priority order:

1. **The 102 content placeholders** — 57 business facts and 45 legal clause
   bodies. `npm run check:content` lists them with the pages they appear on.
   The site cannot deploy until they are filled, which is why that step is the
   one step on CI that does not block: a required check that is permanently red
   teaches people to ignore CI. Drop the `continue-on-error` in
   `.github/workflows/ci.yml` the day the count reaches zero.
2. **Terms and privacy are scaffolds.** Headings and structure are there; every
   clause body is a `[[TODO]]` marker. These pages create legal obligations and
   the ad-account terms are what the whole positioning rests on, so they need a
   lawyer, not a generator.
3. **No hero photographs yet.** The slider renders each slide's art-direction
   brief as a labelled placeholder until files are dropped into
   `src/assets/hero/` and wired to `heroSlides[].src` in `src/data/site.ts`.
   Shot list and art direction: the "Hero image directions" artboard.
4. **Platform logos are redrawn approximations** in
   `src/components/PlatformIcon.astro`. Replace each with the official SVG from
   the platform's own brand resource centre before launch.
5. **The account-request form has no backend.** `site.formEndpoint` needs a
   static form service or a small function. Until then the form posts nowhere.
