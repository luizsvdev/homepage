import type { ReactNode } from "react";

import { BlurFade } from "@/components/ui/blur-fade";

/**
 * Scroll reveal on top of Magic UI's BlurFade. The `data-reveal` attribute is
 * what the <noscript> rule in the document head targets, so the prerendered
 * text stays visible for crawlers and visitors without JavaScript.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <BlurFade inView delay={delay} offset={12} direction="up" className={className} data-reveal="">
      {children}
    </BlurFade>
  );
}

export function SectionHeading({ kicker, title, id }: { kicker: string; title: string; id: string }) {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{kicker}</p>
      <h2 id={id} className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-balance sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
