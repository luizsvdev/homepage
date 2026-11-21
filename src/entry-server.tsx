import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import { App } from "./app";
import { dictionaries } from "./content/i18n";
import { locales, localePath, site, type Locale } from "./content/site";

export { locales, localePath };

export function render(locale: Locale) {
  return renderToString(
    <StrictMode>
      <App locale={locale} />
    </StrictMode>,
  );
}

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ogLocale: Record<Locale, string> = { "pt-BR": "pt_BR", en: "en_US" };

export function head(locale: Locale) {
  const t = dictionaries[locale];
  const url = site.url + (localePath[locale] === "/" ? "/" : localePath[locale]);
  const image = `${site.url}/og-${locale}.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        image: `${site.url}/img/luiz-800.jpg`,
        jobTitle: locale === "en" ? "Software Engineer" : "Engenheiro de Software",
        email: `mailto:${site.email}`,
        telephone: `+${site.whatsapp}`,
        address: { "@type": "PostalAddress", addressCountry: site.country },
        sameAs: [site.github],
        worksFor: { "@id": `${site.company.url}/#organization` },
        knowsAbout: [
          "Software Engineering",
          "Software Architecture",
          "Microservices",
          "ERP",
          "SaaS",
          "Java",
          "Spring Boot",
          "TypeScript",
          "Node.js",
          "React",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${site.company.url}/#organization`,
        name: site.company.name,
        url: site.company.url,
        foundingDate: site.company.foundingDate,
        founder: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: locale,
        mainEntity: { "@id": `${site.url}/#person` },
      },
    ],
  };

  const alternates = locales
    .map((l) => {
      const href = site.url + (localePath[l] === "/" ? "/" : localePath[l]);
      return `<link rel="alternate" hreflang="${l}" href="${href}">`;
    })
    .concat(`<link rel="alternate" hreflang="x-default" href="${site.url}/">`)
    .join("\n    ");

  return `<title>${escape(t.meta.title)}</title>
    <meta name="description" content="${escape(t.meta.description)}">
    <meta name="author" content="${site.name}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="${url}">
    ${alternates}
    <meta property="og:type" content="profile">
    <meta property="og:site_name" content="${site.name}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${escape(t.meta.title)}">
    <meta property="og:description" content="${escape(t.meta.description)}">
    <meta property="og:image" content="${image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${escape(t.meta.ogAlt)}">
    <meta property="og:locale" content="${ogLocale[locale]}">
    <meta property="og:locale:alternate" content="${ogLocale[locale === "en" ? "pt-BR" : "en"]}">
    <meta property="profile:first_name" content="Luiz">
    <meta property="profile:last_name" content="Silva">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escape(t.meta.title)}">
    <meta name="twitter:description" content="${escape(t.meta.description)}">
    <meta name="twitter:image" content="${image}">
    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`;
}
