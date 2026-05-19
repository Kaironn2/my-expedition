"use client";

import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly ctaLabel: string;
}

export function HeroIntro({ name, role, tagline, ctaLabel }: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="space-y-6">
      <p
        className={`${animClass({ isVisible: isInView })} font-mono text-xs uppercase tracking-[0.3em] text-gold-700`}
        style={staggerDelay(0, 120)}
      >
        {role}
      </p>
      <h1
        className={`${animClass({ isVisible: isInView })} max-w-4xl break-words font-serif text-5xl text-gold-300 md:text-7xl`}
        style={staggerDelay(1, 120)}
      >
        {name}
      </h1>
      <p
        className={`${animClass({ isVisible: isInView })} max-w-xl text-lg leading-relaxed text-text-muted`}
        style={staggerDelay(2, 120)}
      >
        {tagline}
      </p>
      <div className={animClass({ isVisible: isInView })} style={staggerDelay(3, 120)}>
        <a
          href="#projects"
          className="inline-flex items-center rounded-full border border-gold-500 px-6 py-3 font-mono text-xs uppercase tracking-wider text-gold-300 transition-colors hover:bg-gold-500 hover:text-bg-base"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
