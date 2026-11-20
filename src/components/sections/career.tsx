import { Reveal, SectionHeading } from "@/components/reveal";
import type { Dictionary } from "@/content/i18n";

export function Career({ t }: { t: Dictionary }) {
  return (
    <section id="trajetoria" aria-labelledby="career-title" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading id="career-title" kicker={t.career.kicker} title={t.career.title} />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted">{t.career.lead}</p>
        </Reveal>

        <ol className="mt-16">
          {t.career.items.map((job, i) => (
            <li key={job.company}>
              <Reveal delay={0.04 * i}>
                <article className="grid gap-4 border-t border-border py-10 md:grid-cols-[14rem_1fr] md:gap-12">
                  <div>
                    <p className="font-mono text-xs tracking-wider text-muted uppercase">{job.period}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight">
                      {job.company}
                      <span className="text-muted"> · {job.role}</span>
                    </h3>
                    <p className="mt-2 text-muted">{job.summary}</p>
                    <ul className="mt-5 space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 leading-relaxed">
                          <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-muted" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
