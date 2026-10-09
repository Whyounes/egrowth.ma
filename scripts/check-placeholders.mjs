#!/usr/bin/env node
/**
 * Fails if any unfilled placeholder reached the built HTML.
 *
 * Every unknown fact in src/data/site.ts is wrapped in TODO(), which renders
 * as [[TODO: hint]]. This walks dist/ and reports each one with the page it
 * landed on, so "fill the placeholders" is a checklist rather than a reread of
 * the whole site. Wire it into CI ahead of deploy.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const MARKER = /\[\[TODO:\s*([^\]]+)\]\]/g;

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = await htmlFiles(DIST);

/** The same hint reaches HTML text and a JSON-LD string with different
    escaping, so normalise before using it as a key or the list double-counts. */
function normalise(hint) {
  return hint
    .replace(/&quot;|\\"/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/** hint -> set of pages it appears on */
const found = new Map();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const [, rawHint] of html.matchAll(MARKER)) {
    const hint = normalise(rawHint);
    const page = '/' + relative(DIST, file).replace(/\\/g, '/');
    if (!found.has(hint)) found.set(hint, new Set());
    found.get(hint).add(page);
  }
}

if (found.size === 0) {
  console.log(`✓ No unfilled placeholders in ${files.length} page(s).`);
  process.exit(0);
}

const total = [...found.values()].reduce((n, pages) => n + pages.size, 0);
console.error(
  `\n✗ ${found.size} unfilled placeholder(s) in the build, across ${total} page slot(s).\n` +
    `  Fill them in src/data/site.ts, then rebuild.\n`,
);

for (const [hint, pages] of [...found.entries()].sort()) {
  const list = [...pages].sort();
  const shown = list.slice(0, 3).join(', ');
  console.error(`  • ${hint}`);
  console.error(`      on ${shown}${list.length > 3 ? ` and ${list.length - 3} more` : ''}`);
}

console.error('');
process.exit(1);
