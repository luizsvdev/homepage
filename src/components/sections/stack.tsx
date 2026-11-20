import { Marquee } from "@/components/ui/marquee";
import type { Dictionary } from "@/content/i18n";

// Only things you build with: languages, frameworks, databases, runtime tooling.
const rows = [
  ["Java", "TypeScript", "Python", "Go", "Rust", "Node.js"],
  ["Spring Boot", "Hibernate", "Express", "React", "Angular", "Next.js"],
  ["PostgreSQL", "Docker", "Tailwind CSS", "Vite"],
];

const speeds = ["50s", "60s", "45s"];

export function Stack({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.stack.kicker} className="border-y border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{t.stack.kicker}</p>
        <p className="font-serif text-lg text-muted italic">{t.stack.note}</p>
      </div>
      <div className="mt-6 flex flex-col gap-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {rows.map((row, i) => (
          <Marquee
            key={i}
            reverse={i % 2 === 1}
            pauseOnHover
            repeat={row.length < 6 ? 5 : 3}
            className="py-1 [--gap:0px]"
            style={{ "--duration": speeds[i] } as React.CSSProperties}
          >
            {row.map((tool) => (
              <span key={tool} className="flex items-center text-xl font-medium tracking-tight whitespace-nowrap text-foreground/70 sm:text-2xl">
                {tool}
                <span aria-hidden="true" className="mx-5 text-muted/60 sm:mx-7">
                  ·
                </span>
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
