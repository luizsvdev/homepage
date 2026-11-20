# luizsv.dev

Portfólio pessoal. Vite + React + Tailwind v4 + Magic UI, pré-renderizado em HTML estático.

```bash
pnpm dev      # desenvolvimento
pnpm build    # build + pré-renderização (dist/index.html, dist/en.html, sitemap.xml)
pnpm images   # regera fotos otimizadas, imagens OG e ícones a partir de assets/luiz.jpg
```

- Textos (pt-BR / en): `src/content/i18n.ts`
- Dados de contato e empresa: `src/content/site.ts`
- SEO (meta, Open Graph, JSON-LD, hreflang): `src/entry-server.tsx`
