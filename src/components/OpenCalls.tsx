"use client";

import Link from "next/link";
import { ScrambleText } from "./ScrambleText";
import { useLanguage } from "./LanguageProvider";
import { useContent } from "./ContentProvider";
import { L } from "@/lib/content";

export function OpenCalls() {
  const { lang } = useLanguage();
  const { openCalls } = useContent();

  return (
    <section id="open-calls" className="relative px-5 py-24 md:px-6 md:py-40">
      <h3 className="display-pressura mb-12 text-[14vw] leading-[0.85] md:mb-20 md:text-[clamp(2.5rem,8vw,8rem)]">
        <ScrambleText
          as="span"
          text={L(openCalls.heading, lang)}
          className="block"
        />
      </h3>

      <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
        {openCalls.items.map((call) => (
          <article key={call.id} className="group flex flex-col">
            <div
              className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ background: call.gradient }}
            />
            <div className="mb-3 flex items-center justify-between">
              <span className="label-mono text-[11px]">{call.num}</span>
              <span className="label-mono text-[11px]">
                ● {L(call.status, lang)}
              </span>
            </div>
            <h4 className="display-pressura mb-2 text-[7vw] leading-[0.9] md:text-[clamp(1.4rem,2.2vw,2rem)]">
              {L(call.title, lang)}
            </h4>
            <p className="label-mono mb-4 text-[12px] uppercase leading-relaxed opacity-90">
              {L(call.description, lang)}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-foreground/30 pt-3">
              <span className="label-mono text-[11px]">{L(call.deadline, lang)}</span>
              <Link href={call.applyHref} className="link-sweep label-mono text-[11px]">
                {lang === "de" ? "BEWERBEN ↗" : "APPLY ↗"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
