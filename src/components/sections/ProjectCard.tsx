"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";
import { cn } from "@/lib/cn";

interface Props {
  readonly index: number;
  readonly name: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly repoUrl?: string;
  readonly liveUrl?: string;
  readonly highlight: boolean;
}

export function ProjectCard(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={animClass({ isVisible: isInView })}
      style={staggerDelay(props.index, 100)}
    >
      <Card className={cn("flex h-full flex-col gap-4", props.highlight && "border-gold-700")}>
        <div>
          <h3 className="font-serif text-2xl text-gold-300">{props.name}</h3>
          <p className="mt-2 text-text-primary">{props.summary}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {props.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 font-mono text-xs uppercase tracking-wider">
          {props.repoUrl ? (
            <a
              href={props.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-gold-300"
            >
              Repo -&gt;
            </a>
          ) : null}
          {props.liveUrl ? (
            <a
              href={props.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-gold-300"
            >
              Live -&gt;
            </a>
          ) : null}
        </div>
      </Card>
    </li>
  );
}
