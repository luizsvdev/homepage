export const site = {
  url: "https://luizsv.dev",
  name: "Luiz Silva",
  email: "luizsv.dev@gmail.com",
  whatsapp: "5546991177172",
  whatsappDisplay: "+55 46 99117-7172",
  country: "BR",
  company: { name: "L²MU", url: "https://llmu.dev", foundingDate: "2025-04" },
} as const;

export const experienceLinks = {
  flow: "https://www.emflow.com.br",
  l2mu: "https://www.llmu.dev",
  viasoft: "https://viasoft.com.br",
  habil: "https://habil.com.br",
} as const;

export const projectLinks = { chefhabil: "https://chefhabil.com.br" } as const;

export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = { "pt-BR": "/", en: "/en" };

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
