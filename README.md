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

## Deploying to your own hosting

`npm run build` produces plain static files in `dist/`. There is no server
runtime, no database and no Node process to keep alive — copy `dist/` to a
web root and you are done.

**Run `npm run verify` first.** It type-checks, builds, and then fails if any
unfilled placeholder reached the HTML.

### What the server has to do

| Requirement | Why |
| --- | --- |
| Serve `/foo` from `foo.html` | `trailingSlash: 'never'` + `build.format: 'file'`, so the canonical in `<head>` always matches the request |
| `Content-Type: font/woff2` on `/fonts/*.woff2` | A wrong type makes the browser refuse the font and fall back |
| Long cache on `/_astro/*` and `/fonts/*`, short on `*.html` | Hashed asset names make them immutable; HTML must stay fresh |
| Gzip or Brotli on HTML, CSS and SVG | The 43 KB page figure assumes it. Do **not** re-compress woff2 |
| HTTPS, with HTTP redirected | Non-negotiable for a site collecting form data |
| Percent-encoded Arabic paths passed through intact | The `/ar/` URLs are Arabic script; most servers handle this, but test one |
| `404.html` served on a miss | Astro does not emit one yet — see Status |

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

gzip on;
gzip_types text/html text/css application/json image/svg+xml;
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

**All 31 routes are built, in all three locales — 93 pages.** Zero JavaScript
in the output.

Pages: home; the ad-account hub plus five per-platform pages; the services hub
plus nine service pages; work and two industry pages; pricing; the free audit;
contact; the resources hub, three guides and the glossary; about; and terms and
privacy.

Known gaps, in priority order:

1. **The 56 content placeholders.** `npm run check:content` lists them. The
   site cannot deploy until they are filled.
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
5. **No 404 page**, no Lighthouse CI step, and the account-request form has no
   backend — `site.formEndpoint` needs a static form service or a small
   function.
