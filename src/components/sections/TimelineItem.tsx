"use client";

import { Badge } from "@/components/ui/Badge";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly index: number;
  readonly company: string;
  readonly role: string;
  readonly description: string;
  readonly period: string;
  readonly stack: readonly string[];
}

export function TimelineItem(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`${animClass({ isVisible: isInView })} relative`}
      style={staggerDelay(props.index, 100)}
    >
      <span
        aria-hidden
        className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border border-gold-500 bg-bg-base"
      />
      <p className="font-mono text-xs uppercase tracking-wider text-gold-700">{props.period}</p>
      <h3 className="mt-1 font-serif text-2xl text-gold-300">{props.role}</h3>
      <p className="font-mono text-sm text-text-muted">{props.company}</p>
      <p className="mt-3 text-text-primary">{props.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {props.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </li>
  );
}
