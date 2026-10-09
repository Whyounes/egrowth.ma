/** Renders **bold** and *italic* from our own dictionaries. Never used on
    anything a visitor supplied, so there is nothing to escape beyond this. */
export function richText(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');
}

/** "Compte publicitaire agence {platform}" -> filled. */
export function fill(pattern: string, values: Record<string, string>): string {
  return pattern.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
}
