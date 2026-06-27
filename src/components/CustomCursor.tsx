"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch / coarse pointers
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor]',
      );
      setActive(Boolean(interactive));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const render = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={`cursor-ring ${active ? "is-active" : ""} ${
          visible ? "is-visible" : ""
        }`}
      />
      <div
        ref={dotRef}
        aria-hidden
        className={`cursor-dot ${active ? "is-active" : ""} ${
          visible ? "is-visible" : ""
        }`}
      />
    </>
  );
}
