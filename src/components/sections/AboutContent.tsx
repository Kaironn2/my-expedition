"use client";

import { useInView } from "@/hooks/useInView";
import { animClass } from "@/lib/anim";

interface Props {
  readonly bio: string;
  readonly location: string;
}

export function AboutContent({ bio, location }: Props) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${animClass({ isVisible: isInView })} mt-10 grid gap-8 md:grid-cols-3`}
    >
      <div className="md:col-span-2">
        <p className="whitespace-pre-line text-lg leading-relaxed text-text-primary">{bio}</p>
      </div>
      <aside className="font-mono text-xs uppercase tracking-wider text-text-muted">
        <dl className="space-y-3">
          <div>
            <dt className="text-gold-700">Location</dt>
            <dd className="mt-1 text-text-primary">{location}</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
