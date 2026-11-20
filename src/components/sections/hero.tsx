import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import type { Dictionary } from "@/content/i18n";
import { whatsappUrl } from "@/content/site";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--fg)_18%,transparent)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(60%_60%_at_70%_40%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:grid-cols-[1.25fr_1fr] md:pt-24 md:pb-28">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-6 font-serif text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              {t.hero.title[0]}{" "}
              <em className="text-muted">{t.hero.title[1]}</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted">{t.hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(t.contact.whatsappMessage)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#trajetoria"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                {t.hero.ctaSecondary}
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <figure className="relative overflow-hidden rounded-3xl border border-border bg-[#0d0d0d] shadow-2xl shadow-black/10">
            <picture>
              <source type="image/avif" srcSet="/img/luiz-480.avif 480w, /img/luiz-800.avif 800w" sizes="(min-width: 768px) 420px, 90vw" />
              <source type="image/webp" srcSet="/img/luiz-480.webp 480w, /img/luiz-800.webp 800w" sizes="(min-width: 768px) 420px, 90vw" />
              <img
                src="/img/luiz-800.jpg"
                alt={t.hero.photoAlt}
                width={800}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </picture>
            <BorderBeam size={120} duration={10} colorFrom="#ecebe6" colorTo="#5f5c55" />
          </figure>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {t.hero.facts.map((f, i) => (
            <li key={f.label} className="bg-background">
              <Reveal delay={0.1 * i} className="p-6">
                <p className="font-serif text-3xl">{f.value}</p>
                <p className="mt-1 text-sm text-muted">{f.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
