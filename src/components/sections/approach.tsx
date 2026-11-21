import { Reveal, SectionHeading } from "@/components/reveal";
import { MagicCard } from "@/components/ui/magic-card";
import type { Dictionary } from "@/content/i18n";

export function Approach({ t }: { t: Dictionary }) {
  return (
    <section id={t.ids.approach} aria-labelledby="approach-title" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="approach-title" kicker={t.approach.kicker} title={t.approach.title} />
        <ol className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {t.approach.items.map((item, i) => (
            <li key={item.title} className="h-full rounded-2xl">
              <Reveal delay={0.06 * i} className="h-full">
                <MagicCard
                  className="h-full rounded-2xl"
                  gradientColor="color-mix(in oklab, var(--fg) 7%, transparent)"
                  gradientFrom="var(--muted)"
                  gradientTo="var(--line)"
                >
                  <div className="p-5 sm:p-8">
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    <h3 className="mt-4 text-xl sm:mt-6 font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-pretty text-muted">{item.body}</p>
                  </div>
                </MagicCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
