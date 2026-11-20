import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import type { Dictionary } from "@/content/i18n";
import { site, whatsappUrl } from "@/content/site";

export function Contact({ t }: { t: Dictionary }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const card =
    "group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground";

  return (
    <section id={t.ids.contact} aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeading id="contact-title" kicker={t.contact.kicker} title={t.contact.title} />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted">{t.contact.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 [&>*]:min-w-0">
          <Reveal delay={0.12}>
            <a href={whatsappUrl(t.contact.whatsappMessage)} target="_blank" rel="noopener" className={card}>
              <span className="flex items-center gap-4">
                <MessageCircle aria-hidden="true" className="size-6 text-muted" />
                <span>
                  <span className="block text-sm text-muted">{t.contact.whatsapp}</span>
                  <span className="block text-lg font-medium">{site.whatsappDisplay}</span>
                </span>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
          <Reveal delay={0.18}>
            <div className={card}>
              <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-4">
                <Mail aria-hidden="true" className="size-6 shrink-0 text-muted" />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{t.contact.email}</span>
                  <span className="block text-base font-medium break-all sm:text-lg">{site.email}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-foreground hover:text-foreground"
              >
                {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}
                <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
