"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { useContent } from "./ContentProvider";
import { L } from "@/lib/content";

export function Nav() {
  const { lang, toggle, t } = useLanguage();
  const { headerStatement } = useContent();

  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-multiply">
      <div className="px-5 py-4 md:px-6 md:py-5">
        <nav className="flex items-start justify-between">
          {/* Left menu */}
          <div className="hidden flex-col gap-3 md:flex">
            <ul className="label-mono flex flex-col gap-[3px] text-[15px] font-medium leading-tight">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="link-sweep">
                    {link[lang]}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="label-mono flex items-center gap-1 text-[11px]"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => lang !== "en" && toggle()}
                aria-pressed={lang === "en"}
                className={
                  lang === "en"
                    ? "underline underline-offset-2"
                    : "opacity-50 transition-opacity hover:opacity-100"
                }
              >
                EN
              </button>
              <span aria-hidden>/</span>
              <button
                type="button"
                onClick={() => lang !== "de" && toggle()}
                aria-pressed={lang === "de"}
                className={
                  lang === "de"
                    ? "underline underline-offset-2"
                    : "opacity-50 transition-opacity hover:opacity-100"
                }
              >
                DE
              </button>
            </div>
          </div>

          {/* Center logo */}
          <Link
            href="/"
            aria-label="ZEMIN"
            className="display-pressura absolute left-1/2 top-4 -translate-x-1/2 text-[26px] font-medium tracking-tight md:top-5 md:text-[30px]"
          >
            ZEMIN<sup className="text-[10px] align-super">®</sup>
          </Link>

          {/* Mobile language toggle */}
          <div
            className="label-mono flex items-center gap-1 text-[11px] md:hidden"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => lang !== "en" && toggle()}
              aria-pressed={lang === "en"}
              className={lang === "en" ? "underline underline-offset-2" : "opacity-50"}
            >
              EN
            </button>
            <span aria-hidden>/</span>
            <button
              type="button"
              onClick={() => lang !== "de" && toggle()}
              aria-pressed={lang === "de"}
              className={lang === "de" ? "underline underline-offset-2" : "opacity-50"}
            >
              DE
            </button>
          </div>

          {/* Right: vertical CTA */}
          <Link
            href="/#contact"
            className="group flex flex-col items-center gap-4"
            aria-label="Get in touch"
          >
            <span className="label-mono hidden whitespace-pre text-center text-[15px] font-medium uppercase leading-[1.05] [writing-mode:vertical-rl] rotate-180 md:block">
              {t.getInTouch}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="rotate-[135deg]"
              >
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </Link>
        </nav>

        {/* Mobile menu (compact) */}
        <ul className="label-mono mt-1 flex gap-3 text-[10px] md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="link-sweep">
                {link[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Site-wide header statement strip */}
      <p className="label-mono border-y border-foreground/20 px-5 py-1.5 text-[10px] uppercase leading-tight md:px-6 md:text-[11px]">
        {L(headerStatement, lang)}
      </p>
    </header>
  );
}
