// Generates optimized photos, Open Graph cards and icons into public/.
// Run once when the photo or copy changes: `pnpm images`.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");
const src = path.join(root, "assets", "luiz.png");
await mkdir(path.join(pub, "img"), { recursive: true });

for (const size of [480, 800, 1200]) {
  const base = sharp(src).resize(size, size, { fit: "cover" });
  await base.clone().avif({ quality: 62, effort: 6 }).toFile(path.join(pub, "img", `luiz-${size}.avif`));
  await base.clone().webp({ quality: 85 }).toFile(path.join(pub, "img", `luiz-${size}.webp`));
  await base.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(pub, "img", `luiz-${size}.jpg`));
}

const og = {
  "pt-BR": ["Engenheiro de Software", "Cofundador da L²MU"],
  en: ["Software Engineer", "Co-founder of L²MU"],
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
for (const [locale, [role, company]] of Object.entries(og)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#0d0d0d"/>
    <text x="72" y="250" font-family="Georgia, serif" font-size="92" fill="#ecebe6">Luiz Silva</text>
    <text x="76" y="330" font-family="DejaVu Sans, Arial, sans-serif" font-size="36" fill="#9c998f">${esc(role)}</text>
    <rect x="76" y="380" width="14" height="14" rx="3" fill="#c8ff00"/>
    <text x="104" y="394" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" fill="#ecebe6">${esc(company)}</text>
    <text x="76" y="560" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#5f5c55">luizsv.dev</text>
  </svg>`;
  const photo = await sharp(src).resize(630, 630).toBuffer();
  const fade = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="630" height="630">
    <defs><linearGradient id="g"><stop offset="0" stop-color="#0d0d0d"/><stop offset="0.35" stop-color="#0d0d0d" stop-opacity="0"/></linearGradient></defs>
    <rect width="630" height="630" fill="url(#g)"/></svg>`);
  await sharp(Buffer.from(svg))
    .composite([{ input: photo, left: 570, top: 0 }, { input: fade, left: 570, top: 0 }])
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(path.join(pub, `og-${locale}.jpg`));
}

const icon = (size, rx) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${rx}" fill="#161513"/>
  <text x="32" y="44" text-anchor="middle" font-family="Georgia, 'Instrument Serif', serif" font-size="36" fill="#f6f5f1">LS</text>
</svg>`;
await writeFile(path.join(pub, "favicon.svg"), icon(64, 14));
await sharp(Buffer.from(icon(32, 14))).png().toFile(path.join(pub, "favicon-32.png"));
await sharp(Buffer.from(icon(180, 0))).resize(180, 180).png().toFile(path.join(pub, "apple-touch-icon.png"));
for (const s of [192, 512]) await sharp(Buffer.from(icon(s, 0))).resize(s, s).png().toFile(path.join(pub, `icon-${s}.png`));
console.log("images generated");
