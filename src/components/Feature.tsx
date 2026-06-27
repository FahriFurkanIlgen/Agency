"use client";

import { useLanguage } from "./LanguageProvider";
import { useContent } from "./ContentProvider";
import { ScrambleText } from "./ScrambleText";
import { L, lines } from "@/lib/content";

export function Feature() {
  const { lang } = useLanguage();
  const { feature } = useContent();

  return (
    <section
      id="feature"
      className="relative overflow-hidden border-t border-foreground/15 px-5 py-20 md:px-6 md:py-32"
    >
      <div className="relative md:min-h-[78vh]">
        {/* Big statement — sits on top of the video */}
        <h2 className="display-pressura pointer-events-none relative z-10 text-foreground">
          {lines(feature.headingLines, lang).map((line, i) => (
            <ScrambleText
              key={`${lang}-${i}`}
              text={line}
              as="span"
              delay={i * 80}
              className="block text-[15vw] leading-[0.82] md:text-[12.5vw]"
            />
          ))}
        </h2>

        {/* Square video, floated to the right and sitting behind the text */}
        <figure className="relative z-0 mt-8 aspect-square w-full overflow-hidden md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-[46vw] md:max-w-[720px] md:-translate-y-1/2">
          <video
            className="h-full w-full object-cover"
            src="/videos/feedback.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <figcaption className="label-mono absolute left-0 top-0 m-3 max-w-[60%] whitespace-pre-line text-[11px] leading-tight text-background mix-blend-difference">
            {L(feature.caption, lang)}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
