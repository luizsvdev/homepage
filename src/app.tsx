import { MotionConfig } from "motion/react";

import { Approach } from "@/components/sections/approach";
import { Career } from "@/components/sections/career";
import { Company } from "@/components/sections/company";
import { Contact } from "@/components/sections/contact";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { dictionaries } from "@/content/i18n";
import { site, type Locale } from "@/content/site";

export function App({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <MotionConfig reducedMotion="user">
      <Header t={t} locale={locale} />
      <main id={t.ids.main}>
        <Hero t={t} />
        <Approach t={t} />
        <Company t={t} />
        <Career t={t} />
        <Stack t={t} />
        <Contact t={t} />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name} · {t.footer.rights}
          </p>
          <p>
            <a href={site.company.url} target="_blank" rel="noopener" className="hover:text-foreground">
              {site.company.name}
            </a>
          </p>
        </div>
      </footer>
    </MotionConfig>
  );
}
