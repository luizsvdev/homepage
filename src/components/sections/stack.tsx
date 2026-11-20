import { Marquee } from "@/components/ui/marquee";
import type { Dictionary } from "@/content/i18n";

const tools = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "Node.js",
  "React",
  "Angular",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "CI/CD",
  "Python",
  "Go",
  "Rust",
];

export function Stack({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.stack.kicker} className="border-y border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{t.stack.kicker}</p>
        <p className="font-serif text-lg text-muted italic">{t.stack.note}</p>
      </div>
      <div className="relative mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee pauseOnHover repeat={3} className="[--duration:45s] [--gap:3rem]">
          {tools.map((tool) => (
            <span key={tool} className="text-2xl font-medium tracking-tight whitespace-nowrap text-foreground/70">
              {tool}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
