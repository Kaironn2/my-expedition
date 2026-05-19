"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HOVER_TARGETS = "button, a, [role='button'], input, textarea, select, label, [data-hover]";
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef({ x: -100, y: -100, ringX: -100, ringY: -100 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia(POINTER_QUERY);
    if (reducedMotion || !media.matches) return;

    let frame = 0;
    const root = document.documentElement;

    function setVisible(visible: boolean) {
      const opacity = visible ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    }

    function syncPointer(event: PointerEvent) {
      positionRef.current.x = event.clientX;
      positionRef.current.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      }
      setVisible(true);
    }

    function syncHover(event: PointerEvent) {
      const target = event.target instanceof Element ? event.target : null;
      ringRef.current?.classList.toggle("is-hover", Boolean(target?.closest(HOVER_TARGETS)));
    }

    function hideCursor() {
      setVisible(false);
    }

    function showCursor() {
      setVisible(true);
    }

    function tick() {
      positionRef.current.ringX += (positionRef.current.x - positionRef.current.ringX) * 0.18;
      positionRef.current.ringY += (positionRef.current.y - positionRef.current.ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${positionRef.current.ringX}px, ${positionRef.current.ringY}px) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(tick);
    }

    root.classList.add("has-custom-cursor");
    window.addEventListener("pointermove", syncPointer, { passive: true });
    window.addEventListener("pointerover", syncHover, { passive: true });
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("pointerenter", showCursor);
    frame = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("has-custom-cursor");
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", syncPointer);
      window.removeEventListener("pointerover", syncHover);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("pointerenter", showCursor);
    };
  }, [reducedMotion]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
