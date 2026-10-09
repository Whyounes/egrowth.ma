#!/usr/bin/env node
/**
 * Enforces the performance budget on the built output, in about a second and
 * without a browser.
 *
 * Lighthouse measures what a page does; this measures what it weighs. The most
 * common regression on a site like this is not a slow script, it is somebody
 * adding a script at all — or a 900 KB hero JPEG — and that shows up in bytes
 * long before it shows up in a lab metric. So this runs on every build and
 * Lighthouse runs on CI.
 *
 * Per page it counts: gzipped HTML + gzipped CSS it links + the fonts it
 * preloads + any JS. Fonts are already woff2, so they are counted raw.
 *
 * The css column reads 0.0 while build.inlineStylesheets is 'always' — the
 * styles are inside the HTML and already counted there. The column stays
 * because the day someone links a stylesheet again, it should show up.
 *
 * Known blind spot: this counts the fonts a page PRELOADS. A font pulled
 * because some glyph on the page falls in its unicode-range is invisible here
 * — one Arabic word in the language menu was quietly costing every French
 * page 44 KB and this script read it as 47 KB. Lighthouse's total-byte-weight
 * assertion is the backstop for that; see lighthouserc.cjs.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { join, relative, posix } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

/** Arabic gets its own ceiling: two Arabic font weights cost ~87 KB on their
    own and no amount of discipline changes that. */
const BUDGETS = {
  ltr: 120 * 1024,
  ar: 200 * 1024,
};

/** Nothing on this site should ship JavaScript. */
const JS_BUDGET = 0;

const gz = (buf) => gzipSync(buf, { level: 9 }).length;

async function walk(dir, ext) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, ext)));
    else if (entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

/** Cache of asset sizes, since every page links the same stylesheet. */
const assetCache = new Map();

async function assetSize(href, { compress }) {
  const key = `${href}:${compress}`;
  if (assetCache.has(key)) return assetCache.get(key);

  // Only local assets count toward the budget; there should be no remote ones.
  if (/^https?:\/\//.test(href)) {
    assetCache.set(key, 0);
    return 0;
  }

  const path = join(DIST, href.replace(/^\//, ''));
  let size = 0;
  try {
    if (compress) size = gz(await readFile(path));
    else size = (await stat(path)).size;
  } catch {
    console.error(`  ! missing asset referenced by a page: ${href}`);
    process.exitCode = 1;
  }
  assetCache.set(key, size);
  return size;
}

const htmlFiles = await walk(DIST, '.html');
const jsFiles = await walk(DIST, '.js');

/* --- Hard rule: zero JavaScript ---------------------------------------- */
let jsBytes = 0;
for (const file of jsFiles) jsBytes += (await stat(file)).size;

/* --- Per-page weight --------------------------------------------------- */
const rows = [];

for (const file of htmlFiles) {
  const page = '/' + relative(DIST, file).replace(/\\/g, posix.sep);
  const html = await readFile(file);

  const htmlBytes = gz(html);
  const text = html.toString('utf8');

  const cssHrefs = [...text.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map(
    (m) => m[1],
  );
  const fontHrefs = [
    ...text.matchAll(/<link[^>]+rel="preload"[^>]+href="([^"]+\.woff2)"/g),
  ].map((m) => m[1]);

  let cssBytes = 0;
  for (const href of cssHrefs) cssBytes += await assetSize(href, { compress: true });

  let fontBytes = 0;
  for (const href of fontHrefs) fontBytes += await assetSize(href, { compress: false });

  const locale = /(^\/ar\/|^\/ar\.html$)/.test(page) ? 'ar' : 'ltr';
  const total = htmlBytes + cssBytes + fontBytes;

  rows.push({ page, locale, htmlBytes, cssBytes, fontBytes, total, budget: BUDGETS[locale] });
}

rows.sort((a, b) => b.total - a.total);

const over = rows.filter((r) => r.total > r.budget);
const kb = (n) => (n / 1024).toFixed(1).padStart(6);

console.log(`\nPerformance budget — ${rows.length} page(s)\n`);
console.log(`  JavaScript        ${kb(jsBytes)} KB   budget ${kb(JS_BUDGET)} KB`);

for (const locale of ['ltr', 'ar']) {
  const group = rows.filter((r) => r.locale === locale);
  if (group.length === 0) continue;
  const worst = group[0];
  console.log(
    `  Heaviest (${locale === 'ar' ? 'ar ' : 'fr/en'})   ${kb(worst.total)} KB   ` +
      `budget ${kb(worst.budget)} KB   ${worst.page}`,
  );
  console.log(
    `                      html ${kb(worst.htmlBytes)} · css ${kb(worst.cssBytes)} · font ${kb(worst.fontBytes)}`,
  );
}

if (jsBytes > JS_BUDGET) {
  console.error(
    `\n✗ ${jsFiles.length} JavaScript file(s), ${(jsBytes / 1024).toFixed(1)} KB.\n` +
      `  This site ships zero JS on first paint by design. If an island is genuinely\n` +
      `  needed, raise JS_BUDGET here deliberately and say why.\n`,
  );
  for (const f of jsFiles.slice(0, 10)) console.error(`  • /${relative(DIST, f)}`);
  process.exitCode = 1;
}

if (over.length > 0) {
  console.error(`\n✗ ${over.length} page(s) over budget:\n`);
  for (const r of over.slice(0, 15)) {
    console.error(
      `  • ${r.page}\n      ${(r.total / 1024).toFixed(1)} KB vs ${(r.budget / 1024).toFixed(1)} KB ` +
        `(html ${(r.htmlBytes / 1024).toFixed(1)} · css ${(r.cssBytes / 1024).toFixed(1)} · font ${(r.fontBytes / 1024).toFixed(1)})`,
    );
  }
  console.error('');
  process.exitCode = 1;
}

if (!process.exitCode) {
  console.log('\n✓ Every page inside budget, and no JavaScript shipped.\n');
}
