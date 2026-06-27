"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type ScrambleTextProps = {
  text: string;
  className?: string;
  as?: "span" | "div" | "p";
  /** delay before the reveal starts, in ms */
  delay?: number;
  /** speed of the resolve, lower is faster */
  speed?: number;
};

/**
 * Reveals text with a per-character scramble animation when it enters
 * the viewport — the signature effect on the Valiente site.
 */
export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  speed = 1,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          window.setTimeout(run, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    let raf = 0;
    function run() {
      let frame = 0;
      const total = text.length * 3 * speed;
      const animate = () => {
        const progress = frame / total;
        const revealed = Math.floor(progress * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === " ") {
            out += " ";
          } else if (i < revealed) {
            out += ch;
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);
        frame++;
        if (frame <= total) {
          raf = requestAnimationFrame(animate);
        } else {
          setDisplay(text);
        }
      };
      animate();
    }

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, delay, speed]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement & HTMLDivElement>}
      className={cn(className)}
    >
      {display}
    </Tag>
  );
}
