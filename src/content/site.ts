export const site = {
  url: "https://luizsv.dev",
  name: "Luiz Silva",
  email: "luizsv.dev@gmail.com",
  whatsapp: "5546991177172",
  whatsappDisplay: "+55 46 99117-7172",
  location: { city: "Pato Branco", region: "PR", country: "BR" },
  company: { name: "L²MU", url: "https://llmu.dev", foundingDate: "2025-04" },
} as const;

export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = { "pt-BR": "/", en: "/en" };

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
