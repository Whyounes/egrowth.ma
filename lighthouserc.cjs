/**
 * Lighthouse CI thresholds.
 *
 * scripts/check-budget.mjs measures what pages WEIGH, on every build, in a
 * second. This measures what they DO, on CI, in a browser. The two are
 * complementary and neither replaces the other — and the browser is the only
 * one of the two that sees a font pulled by unicode-range rather than by a
 * preload, which is how 44 KB of Arabic webfont rode onto every French page
 * unnoticed until this config was first run.
 *
 * Note on LCP: the budget in the README is <= 1.2 s as a FIELD target on
 * Moroccan 4G. The assertions below are LAB numbers under Lighthouse's
 * simulated mobile throttling, which is deliberately harsher than a real
 * connection. They are not the same number and should not be reconciled —
 * watch field data from real Moroccan visitors for the 1.2 s target.
 *
 * Run locally:  npm run check:lighthouse   (downloads the pinned CLI on demand)
 */

/* Measured on this build, simulated mobile, Lighthouse 12: every page scores
   1.00 in all four categories; FCP 857-942 ms, LCP 1054-1057 ms (1663 ms on
   Arabic, which pays for 87 KB of Arabic font), TBT 0, CLS 0. The ceilings
   leave roughly 20% headroom: enough for runner noise, not enough to hide a
   regression. */
const base = {
  /* --- Category scores ----------------------------------------------------
     One point of slack on performance absorbs runner noise; the other three
     have none, because nothing about a static page should make them wobble. */
  'categories:performance': ['error', { minScore: 0.99 }],
  'categories:accessibility': ['error', { minScore: 1 }],
  'categories:best-practices': ['error', { minScore: 1 }],
  'categories:seo': ['error', { minScore: 1 }],

  /* --- The metrics the design commits to --------------------------------- */
  'largest-contentful-paint': ['error', { maxNumericValue: 1300 }],
  'first-contentful-paint': ['error', { maxNumericValue: 1150 }],
  'cumulative-layout-shift': ['error', { maxNumericValue: 0.02 }],
  'total-blocking-time': ['error', { maxNumericValue: 50 }],
  'speed-index': ['error', { maxNumericValue: 1400 }],

  /* --- Total transfer -----------------------------------------------------
     The check that catches a 900 KB hero JPEG, a webfont nobody meant to
     serve, or a tag manager. Overridden per locale below. */
  'total-byte-weight': ['error', { maxNumericValue: 70 * 1024 }],

  /* --- The rules that keep the budget honest ----------------------------- */
  // Zero JS is enforced in bytes by check-budget.mjs; this catches a script
  // that arrives from a third party rather than from the build.
  'unused-javascript': ['error', { maxLength: 0 }],
  'third-party-summary': ['error', { maxLength: 0 }],
  // Zero only because the CSS is inlined (astro.config.mjs,
  // build.inlineStylesheets). Linking it again puts two blocking requests
  // back on the critical path and this turns red.
  'render-blocking-resources': ['error', { maxLength: 0 }],
  'unsized-images': ['error', { maxLength: 0 }],
  'font-display': ['error', { maxLength: 0 }],
  'uses-responsive-images': ['warn', { maxLength: 0 }],
  'modern-image-formats': ['warn', { maxLength: 0 }],

  /* --- Accessibility rules worth naming explicitly ------------------------
     Already covered by accessibility: 1, but naming them puts the rule in the
     failure message instead of a bare score drop. Each one here has already
     caught a real defect: contrast found --c-ink-3 passing 4.9:1 on white and
     failing 4.1:1 on a tinted card; label-content-name-mismatch found the
     slider dots whose hidden number disagreed with their aria-label;
     definition-list found an invalid <dl> on the pricing table. */
  'color-contrast': ['error', { maxLength: 0 }],
  'label-content-name-mismatch': ['error', { maxLength: 0 }],
  'definition-list': ['error', { maxLength: 0 }],
  dlitem: ['error', { maxLength: 0 }],
  'html-has-lang': ['error', { maxLength: 0 }],
  'valid-lang': ['error', { maxLength: 0 }],
  'link-name': ['error', { maxLength: 0 }],
  'button-name': ['error', { maxLength: 0 }],
  'heading-order': ['error', { maxLength: 0 }],
  'target-size': ['error', { maxLength: 0 }],

  /* --- Noise -------------------------------------------------------------- */
  // The static server sets no cache headers; the real host does, and the
  // README specifies them. Asserting it here would only ever be red.
  'uses-long-cache-ttl': 'off',
  // No service worker by design.
  'installable-manifest': 'off',
  'splash-screen': 'off',
  'themed-omnibox': 'off',
  'maskable-icon': 'off',
};

module.exports = {
  ci: {
    collect: {
      // lhci's static server does not rewrite /foo to foo.html, so the URLs
      // below are the .html paths. Same bytes, same verdict.
      staticDistDir: './dist',
      numberOfRuns: 2,
      url: [
        // French: the default locale and the bulk of the traffic.
        'http://localhost/index.html',
        'http://localhost/comptes-publicitaires.html',
        'http://localhost/comptes-publicitaires/meta.html',
        'http://localhost/tarifs.html',
        'http://localhost/ressources/tva-publicite-meta-tiktok-maroc.html',
        // English: the agency-ad-account keyword cluster.
        'http://localhost/en/agency-ad-account.html',
        // Arabic: RTL, and the heavier font path.
        'http://localhost/ar.html',
        // The 404 is the one page every visitor reaches by accident, and the
        // one page that carries all three languages at once.
        'http://localhost/404.html',
      ],
      settings: {
        // No JS to hydrate, so there is nothing to wait for beyond the paint.
        skipAudits: ['uses-http2', 'canonical'],
        // Needed wherever CI runs Chrome inside a container.
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },

    /* The three page classes have genuinely different ceilings, so the
       patterns are mutually exclusive: every URL is asserted by exactly one
       entry, and each entry carries the full set. */
    assert: {
      assertMatrix: [
        {
          // Everything except Arabic and the 404.
          matchingUrlPattern: '^(?!.*(?:/ar\\.html|/404\\.html)$).*$',
          assertions: base,
        },
        {
          // Arabic pays 87 KB for two Arabic font weights, and no amount of
          // discipline changes that. Same scores, more bytes, later LCP.
          matchingUrlPattern: '/ar\\.html$',
          assertions: {
            ...base,
            'total-byte-weight': ['error', { maxNumericValue: 170 * 1024 }],
            'largest-contentful-paint': ['error', { maxNumericValue: 2000 }],
          },
        },
        {
          matchingUrlPattern: '/404\\.html$',
          assertions: {
            ...base,
            // The 404 is noindex on purpose, so is-crawlable fails on purpose
            // and takes the SEO category down to 0.63 with it. Asserting the
            // category here would mean asserting that the page IS indexable.
            'categories:seo': 'off',
            'is-crawlable': 'off',
            // No header, no hero: it should be the lightest page on the site.
            'total-byte-weight': ['error', { maxNumericValue: 45 * 1024 }],
          },
        },
      ],
    },

    upload: {
      // Keeps the HTML reports as CI artifacts instead of posting them to a
      // third-party server.
      target: 'filesystem',
      outputDir: './.lighthouseci',
      reportFilenamePattern: '%%PATHNAME%%-report.%%EXTENSION%%',
    },
  },
};
