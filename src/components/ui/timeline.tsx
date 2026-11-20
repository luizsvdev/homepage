import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Vertical timeline with a rail that fills as the reader scrolls through it.
 * Plain <ol>/<li> markup, so every item is in the prerendered HTML; the
 * scroll fill is decoration layered on top.
 *
 * Layout: the rail sits at `--rail` (left edge on mobile, between the period
 * column and the content on md+). Items place their dot on that line.
 */
export function Timeline({ className, children, ...props }: ComponentPropsWithoutRef<"ol">) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <ol
      ref={ref}
      className={cn("relative [--rail:0.5rem] md:[--rail:12.5rem]", className)}
      {...props}
    >
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-(--rail) w-px -translate-x-1/2 bg-border" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: progress }}
        className="absolute top-2 bottom-2 left-(--rail) w-px origin-top -translate-x-1/2 bg-foreground"
      />
      {children}
    </ol>
  );
}

export function TimelineItem({
  period,
  dot,
  className,
  children,
}: {
  period: ReactNode;
  /** Custom marker; defaults to a small ring. */
  dot?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <li className={cn("relative grid gap-3 pb-14 pl-8 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-12 md:pl-0", className)}>
      <span aria-hidden="true" className="absolute top-7 left-(--rail) z-10 -translate-x-1/2 -translate-y-1/2">
        {dot ?? <span className="block size-3 rounded-full border-2 border-foreground bg-surface" />}
      </span>
      <div className="md:pt-5 md:text-right">{period}</div>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
