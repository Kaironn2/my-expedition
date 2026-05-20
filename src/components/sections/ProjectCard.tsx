"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";

interface Props {
  readonly index: number;
  readonly labels: {
    readonly live: string;
    readonly repository: string;
  };
  readonly level: string;
  readonly imageAlt: string;
  readonly imageUrl?: string;
  readonly name: string;
  readonly repoUrl?: string;
  readonly liveUrl?: string;
  readonly slot: string;
  readonly stack: readonly string[];
  readonly summary: string;
}

function ProjectArt({ index, label }: { readonly index: number; readonly label: string }) {
  const gradientId = `project-gradient-${index}`;
  const stripesId = `project-stripes-${index}`;

  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 520"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a1f10" />
          <stop offset="100%" stopColor="#100a06" />
        </linearGradient>
        <pattern
          id={stripesId}
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <rect width="16" height="16" fill={`url(#${gradientId})`} />
          <rect width="1" height="16" fill="rgba(201,169,110,0.10)" />
        </pattern>
      </defs>
      <rect width="400" height="520" fill={`url(#${stripesId})`} />
      <path
        d="M42 305C104 270 196 286 358 268C384 282 363 334 316 352C196 386 78 362 42 338Z"
        fill="rgba(10,8,7,0.48)"
      />
      <path
        d="M74 82L200 34L326 82L348 236C316 360 266 430 200 474C134 430 84 360 52 236L74 82Z"
        fill="rgba(201,169,110,0.05)"
        stroke="rgba(201,169,110,0.20)"
      />
      <text
        x="200"
        y="332"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="11"
        letterSpacing="2"
        fill="#c9a96e"
        opacity="0.82"
      >
        {label}
      </text>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 5.96c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.2 10.2 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export function ProjectCard(props: Props) {
  const [ref, isInView] = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`${animClass({ isVisible: isInView })} k-project-card`}
      style={staggerDelay(props.index, 100)}
    >
      <article data-hover>
        <div className="k-project-frame">
          {props.imageUrl ? (
            <Image
              src={props.imageUrl}
              alt={props.imageAlt}
              fill
              sizes="(min-width: 768px) 360px, 100vw"
              className="k-project-image"
            />
          ) : (
            <ProjectArt index={props.index} label={props.slot} />
          )}
        </div>
        <h3 className="k-project-name">{props.name}</h3>
        <div className="k-project-level">
          <span>{props.level}</span>
          <span aria-hidden>·</span>
          <span>{props.stack.slice(0, 2).join(" / ")}</span>
        </div>
        <p className="k-project-summary">{props.summary}</p>
        <div className="k-project-links">
          {props.repoUrl ? (
            <a href={props.repoUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              {props.labels.repository} -&gt;
            </a>
          ) : null}
          {props.liveUrl ? (
            <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
              {props.labels.live} -&gt;
            </a>
          ) : null}
        </div>
      </article>
    </li>
  );
}
