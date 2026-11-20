import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import type { Dictionary } from "@/content/i18n";
import { site } from "@/content/site";

/** Uses L²MU's own palette and typeface (llmu.dev), not the portfolio's. */
export function Company({ t }: { t: Dictionary }) {
  return (
    <section
      id="l2mu"
      aria-labelledby="company-title"
      className="relative overflow-hidden bg-l2mu-bg font-brand text-white [color-scheme:dark]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_80%_20%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-l2mu-primary uppercase">{t.company.kicker}</p>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Reveal delay={0.06}>
              <div className="flex items-center gap-5">
                <img src="/brand/l2mu.svg" alt="" width={72} height={72} className="size-16 sm:size-[72px]" />
                <h2 id="company-title" className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                  {t.company.title}
                </h2>
              </div>
            </Reveal>
            {t.company.body.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/75">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <a
                href={site.company.url}
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-l2mu-primary px-6 py-3 text-sm font-semibold text-l2mu-bg transition-transform hover:-translate-y-0.5"
              >
                {t.company.cta}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-l2mu-accent bg-[#111111]">
              <div className="flex items-baseline justify-between border-b border-l2mu-accent px-6 py-5">
                <span className="font-semibold">{t.company.role}</span>
                <span className="font-mono text-xs text-white/60">{t.company.since}</span>
              </div>
              <ul>
                {t.company.pillars.map((p) => (
                  <li key={p.title} className="border-b border-l2mu-accent px-6 py-5 last:border-b-0">
                    <h3 className="flex items-center gap-2 font-semibold">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-l2mu-primary" />
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/65">{p.body}</p>
                  </li>
                ))}
              </ul>
              <BorderBeam size={140} duration={9} colorFrom="#c8ff00" colorTo="#c8ff0000" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
