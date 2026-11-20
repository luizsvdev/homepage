import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import type { Dictionary } from "@/content/i18n";
import { experienceLinks, projectLinks } from "@/content/site";

type Job = Dictionary["career"]["items"][number];

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

function Period({ children, featured }: { children: string; featured?: boolean }) {
  return featured ? (
    <span className="inline-block rounded-full bg-l2mu-bg px-3 py-1 font-mono text-xs tracking-wider text-l2mu-primary uppercase">
      {children}
    </span>
  ) : (
    <span className="font-mono text-xs tracking-wider text-muted uppercase">{children}</span>
  );
}

function Highlights({ items, featured }: { items: string[]; featured?: boolean }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((h) => (
        <li key={h} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className={featured ? "mt-[0.7em] h-px w-4 shrink-0 bg-l2mu-primary" : "mt-[0.7em] h-px w-4 shrink-0 bg-muted"}
          />
          {h}
        </li>
      ))}
    </ul>
  );
}

function JobCard({ job }: { job: Job }) {
  const url = experienceLinks[job.id];
  return (
    <MagicCard
      className="rounded-2xl"
      gradientColor="color-mix(in oklab, var(--fg) 6%, transparent)"
      gradientFrom="var(--muted)"
      gradientTo="var(--line)"
    >
      <article className="p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-2xl font-medium tracking-tight">
            <a href={url} target="_blank" rel="noopener" className="group inline-flex items-center gap-1.5 hover:underline">
              {job.company}
              <ArrowUpRight aria-hidden="true" className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </h3>
          <span className="font-mono text-xs text-muted">{host(url)}</span>
        </div>
        <p className="mt-1 text-muted">{job.role}</p>
        <p className="mt-4 text-pretty">{job.summary}</p>
        <Highlights items={job.highlights} />
        {job.project && (
          <a
            href={projectLinks.chefhabil}
            target="_blank"
            rel="noopener"
            className="group mt-6 flex items-start justify-between gap-4 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-foreground"
          >
            <span>
              <span className="flex items-center gap-2 font-medium">
                {job.project.name}
                <span className="font-mono text-xs font-normal text-muted">{host(projectLinks.chefhabil)}</span>
              </span>
              <span className="mt-1 block text-sm text-pretty text-muted">{job.project.body}</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </article>
    </MagicCard>
  );
}

/** L²MU gets the company's own palette, a larger card and a live marker. */
function FeaturedCard({ job, t }: { job: Job; t: Dictionary }) {
  const url = experienceLinks[job.id];
  return (
    <article className="relative overflow-hidden rounded-3xl border border-l2mu-accent bg-l2mu-bg p-8 font-brand text-white [color-scheme:dark] sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-l2mu-primary/15 blur-3xl"
      />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3>
            <a href={url} target="_blank" rel="noopener" aria-label={`${job.company} (${host(url)})`}>
              <img src="/brand/l2mu-wordmark.svg" alt={job.company} width={290} height={120} className="h-12 w-auto sm:h-14" />
            </a>
          </h3>
          <span className="inline-flex items-center gap-2 rounded-full border border-l2mu-primary/40 px-3 py-1 text-xs font-semibold text-l2mu-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-l2mu-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-l2mu-primary" />
            </span>
            {t.career.current}
          </span>
        </div>
        <p className="mt-6 text-xl font-semibold">{job.role}</p>
        <p className="mt-2 text-lg text-pretty text-white/75">{job.summary}</p>
        <div className="text-white/90">
          <Highlights items={job.highlights} featured />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`#${t.ids.company}`}
            className="inline-flex items-center gap-2 rounded-full bg-l2mu-primary px-5 py-2.5 text-sm font-semibold text-l2mu-bg transition-transform hover:-translate-y-0.5"
          >
            {t.career.more}
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-mono text-sm text-white/80 transition-colors hover:border-l2mu-primary hover:text-l2mu-primary"
          >
            {host(url)}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      <BorderBeam size={180} duration={8} colorFrom="#c8ff00" colorTo="#c8ff0000" borderWidth={1.5} />
    </article>
  );
}

const featuredDot = (
  <span className="relative flex size-5 items-center justify-center">
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-l2mu-primary/50" />
    <span className="relative size-4 rounded-full border-2 border-l2mu-bg bg-l2mu-primary" />
  </span>
);

export function Career({ t }: { t: Dictionary }) {
  return (
    <section id={t.ids.career} aria-labelledby="career-title" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeading id="career-title" kicker={t.career.kicker} title={t.career.title} />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted">{t.career.lead}</p>
        </Reveal>

        <Timeline className="mt-16">
          {t.career.items.map((job) => {
            const featured = job.id === "l2mu";
            return (
              <TimelineItem
                key={job.id}
                period={<Period featured={featured}>{job.period}</Period>}
                dot={featured ? featuredDot : undefined}
              >
                <Reveal>{featured ? <FeaturedCard job={job} t={t} /> : <JobCard job={job} />}</Reveal>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
