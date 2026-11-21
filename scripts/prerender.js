// Turns the client build into static HTML: one page per locale, plus sitemap.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, head, locales, localePath } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
let template = await readFile(path.join(dist, "index.html"), "utf8");

// Inline the stylesheet (small) so first paint doesn't wait on a request,
// and preload the latin fonts used above the fold to avoid layout shift.
const cssHref = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (cssHref) {
  const css = await readFile(path.join(dist, cssHref[1]), "utf8");
  const fonts = [
    /instrument-serif-latin-400-normal-[\w-]+\.woff2/,
    /instrument-serif-latin-400-italic-[\w-]+\.woff2/,
    /geist-latin-wght-normal-[\w-]+\.woff2/,
  ]
    .map((re) => css.match(re)?.[0])
    .filter(Boolean)
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
    .join("\n    ");
  template = template.replace(cssHref[0], `${fonts}\n    <style>${css}</style>`);
}

for (const locale of locales) {
  const html = template
    .replace('<html lang="pt-BR">', `<html lang="${locale}">`)
    .replace("<!--app-head-->", head(locale))
    .replace("<!--app-html-->", render(locale));

  // "/en" -> en.html, served at /en without a redirect (Vercel cleanUrls, vite preview).
  const route = localePath[locale];
  const out = path.join(dist, route === "/" ? "index.html" : `${route.slice(1)}.html`);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`prerendered ${localePath[locale]} -> ${path.relative(root, out)}`);
}

const site = "https://luizsv.dev";
const href = (l) => site + (localePath[l] === "/" ? "/" : localePath[l]);
const alternates = locales
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href(l)}"/>`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${site}/"/>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales.map((l) => `  <url>\n    <loc>${href(l)}</loc>\n${alternates}\n  </url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await rm(ssrDir, { recursive: true, force: true });
console.log("sitemap.xml written");
