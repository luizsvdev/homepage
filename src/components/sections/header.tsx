import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { translateHash, type Dictionary } from "@/content/i18n";
import { localePath, type Locale } from "@/content/site";

export function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const other: Locale = locale === "pt-BR" ? "en" : "pt-BR";
  const [open, setOpen] = useState(false);
  const links = [
    { href: `#${t.ids.company}`, label: t.nav.company },
    { href: `#${t.ids.career}`, label: t.nav.career },
    { href: `#${t.ids.approach}`, label: t.nav.approach },
    { href: `#${t.ids.contact}`, label: t.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Close if the viewport grows past the breakpoint where the inline nav shows.
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <a
        href={`#${t.ids.main}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        {t.nav.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href={localePath[locale]}
          onClick={(e) => {
            // Same page: scroll to the top instead of reloading it.
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.location.hash) history.replaceState(null, "", window.location.pathname);
          }}
          className="font-serif text-2xl leading-none tracking-tight"
        >
          Luiz Silva
        </a>
        <nav aria-label={t.nav.label} className="flex items-center gap-1 text-sm">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3 py-2 text-muted transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={localePath[other]}
            hrefLang={other}
            lang={other}
            onClick={(e) => {
              // Keep the reader on the same section after switching language.
              const hash = translateHash(window.location.hash, other);
              if (hash) {
                e.preventDefault();
                window.location.assign(localePath[other] + hash);
              }
            }}
            className="ml-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:border-foreground hover:text-foreground"
          >
            <span aria-hidden="true">{other === "en" ? "EN" : "PT"}</span>
            <span className="sr-only">{t.nav.switchTo}</span>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 ml-1 inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
          </button>
        </nav>
      </div>
      <div id="mobile-nav" hidden={!open} className="border-t border-border/70 md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
