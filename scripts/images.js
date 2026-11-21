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

// "LS" in Instrument Serif, converted to outlines (64x64 box) so the icon
// renders the same everywhere instead of depending on installed fonts.
const LS_PATH =
  "M29.81 48.59L14.95 48.59Q14.26 48.59 14.26 48.08L14.26 48.08Q14.26 47.67 14.86 47.53L14.86 47.53L15.92 47.34Q16.89 47.16 17.19 46.84Q17.48 46.52 17.48 45.55L17.48 45.55L17.48 18.50Q17.48 17.53 17.19 17.21Q16.89 16.89 15.92 16.70L15.92 16.70L14.86 16.52Q14.26 16.38 14.26 15.97L14.26 15.97Q14.26 15.46 14.95 15.46L14.95 15.46L23.37 15.46Q24.06 15.46 24.06 16.01L24.06 16.01Q24.06 16.43 23.56 16.52L23.56 16.52L22.32 16.70Q21.35 16.84 21.05 17.21Q20.75 17.58 20.75 18.54L20.75 18.54L20.75 44.31Q20.75 45.96 21.69 46.70Q22.64 47.44 24.06 47.44L24.06 47.44Q25.12 47.44 26.25 47Q27.38 46.56 28.30 45.34Q29.22 44.12 29.68 41.78L29.68 41.78L30.27 38.69Q30.41 38.10 30.96 38.10L30.96 38.10Q31.61 38.10 31.52 38.88L31.52 38.88L30.96 47.53Q30.87 48.59 29.81 48.59L29.81 48.59ZM40.86 49L40.86 49Q39.94 49 38.81 48.82Q37.68 48.63 36.69 48.36Q35.70 48.08 35.15 47.76L35.15 47.76Q34.83 47.57 34.67 47.37Q34.51 47.16 34.51 46.65L34.51 46.65L34.28 39.43Q34.28 38.51 34.88 38.51L34.88 38.51Q35.38 38.51 35.57 39.34L35.57 39.34L35.98 41.09Q37.54 47.67 41.82 47.67L41.82 47.67Q44.12 47.67 45.48 46.12Q46.84 44.58 46.84 41.78L46.84 41.78Q46.84 39.06 45.43 36.72Q44.03 34.37 40.95 32.07L40.95 32.07Q37.54 29.63 35.98 27.35Q34.42 25.08 34.42 22.50L34.42 22.50Q34.42 19.09 36.78 17.05Q39.15 15 42.83 15L42.83 15Q44.22 15 45.50 15.32Q46.79 15.64 47.62 16.24L47.62 16.24Q47.90 16.43 48.06 16.66Q48.22 16.89 48.22 17.25L48.22 17.25L48.36 24.20Q48.36 24.98 47.76 24.98L47.76 24.98Q47.34 24.98 47.16 24.34L47.16 24.34L46.84 23.19Q45.83 19.65 44.74 18.01Q43.66 16.38 41.64 16.38L41.64 16.38Q39.66 16.38 38.49 17.67Q37.31 18.96 37.31 21.30L37.31 21.30Q37.31 23.28 38.60 25.08Q39.89 26.87 43.11 29.45L43.11 29.45Q46.56 32.25 48.15 34.85Q49.74 37.45 49.74 40.40L49.74 40.40Q49.74 42.97 48.59 44.91Q47.44 46.84 45.43 47.92Q43.43 49 40.86 49Z";

const icon = (size, rx) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${rx}" fill="#161513"/>
  <path fill="#f6f5f1" d="${LS_PATH}"/>
</svg>`;
await writeFile(path.join(pub, "favicon.svg"), icon(64, 14));
await sharp(Buffer.from(icon(32, 14))).png().toFile(path.join(pub, "favicon-32.png"));
await sharp(Buffer.from(icon(180, 0))).resize(180, 180).png().toFile(path.join(pub, "apple-touch-icon.png"));
for (const s of [192, 512]) await sharp(Buffer.from(icon(s, 0))).resize(s, s).png().toFile(path.join(pub, `icon-${s}.png`));
console.log("images generated");
