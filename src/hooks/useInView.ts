"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly once?: boolean;
}

export function useInView<T extends Element>(options: Options = {}) {
  const { threshold = 0.15, rootMargin = "0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView] as const;
}
