import { cn } from "@/lib/utils";

/**
 * L²MU wordmark, inline so it can sit inside a line of text. The symbol keeps
 * the brand lime; "MU" uses currentColor, so it reads on light and dark
 * backgrounds (the file in public/brand only works on dark).
 */
export function L2muWordmark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 120"
      role="img"
      aria-label="L²MU"
      className={cn("inline-block h-[1.3em] w-auto align-[-0.3em]", className)}
    >
      <title>L²MU</title>
      <rect width="120" height="120" rx="26" fill="#C8FF00" />
      <g fill="#0B0B0B">
        <rect x="24" y="30" width="18" height="66" />
        <rect x="24" y="78" width="48" height="18" />
        <rect x="72" y="22" width="28" height="7" />
        <rect x="93" y="22" width="7" height="21" />
        <rect x="72" y="36" width="28" height="7" />
        <rect x="72" y="36" width="7" height="21" />
        <rect x="72" y="50" width="28" height="7" />
      </g>
      <g transform="translate(144 30)" fill="currentColor">
        <rect width="78" height="18" />
        <rect width="18" height="66" />
        <rect x="30" width="18" height="42" />
        <rect x="60" width="18" height="66" />
        <rect x="92" width="18" height="66" />
        <rect x="128" width="18" height="66" />
        <rect x="92" y="48" width="54" height="18" />
      </g>
    </svg>
  );
}
