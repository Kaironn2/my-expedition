"use client";

import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";
import type { ContactLink } from "@/types/portfolio";

function SocialIcon({ icon }: { readonly icon: ContactLink["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 5.96c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.2 10.2 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "twitter") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M14.2 10.2 21.4 2h-1.7l-6.3 7.1L8.4 2H2.6l7.6 10.8L2.6 22h1.7l6.7-7.8 5.4 7.8h5.8l-8-11.8Zm-2.4 2.7-.8-1.1L4.9 3.3h2.7l4.9 6.9.8 1.1 6.5 9.3h-2.7l-5.3-7.7Z"
        />
      </svg>
    );
  }

  if (icon === "nexus") {
    return (
      <svg viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
        <circle cx="512" cy="512" r="450" fill="none" stroke="currentColor" strokeWidth="84" />
        <path
          d="M692.3 573.2c-13.4-13.8-36.2-30.8-79-49.5l11.6-22-89.1 23.9L568 608l12.9-24.5c11 5 19.2 10.1 27.4 16.1 12.6 8.8 24.2 18.6 34 29 23.8 24.1 36.3 48.8 33.1 69.2l-.4.2-1.6.3c-11 1.3-23 .6-35.2-2.2h-.3c-13.2-3.5-26.3-8.4-39.5-14.5-25.9 13.2-55.3 20.8-86.4 20.8-21.4 0-41.9-3.6-61.1-10.1 13.5-13.6 29.9-36.3 47.9-77.4l22 11.6-23.9-89.1-82.8 31.6 24.9 13.5c-5 11-10.1 19.2-16.1 27.4-8.8 12.6-18.6 24.2-29 34-24.1 23.8-48.8 36.3-69.2 33.1l-.4-.4-.3-1.6c-1.3-11-.6-23 2.2-35.2v-.3c3.7-14 9-27.9 15.6-41.9-13-25.7-20.3-54.8-20.3-85.6 0-19.9 3.1-39.1 8.8-57.1 13.3 13.9 36.2 31.2 79.7 50.2l-11.6 22 89.1-23.9-31.8-83.4-13.3 25.2c-11-5-19.2-10.1-27.4-16.1-12.6-8.8-24.2-18.6-34-29-23.6-24-36.2-48.5-33.1-68.8l.7-.7 1.6-.3c11-1.3 23-.6 35.2 2.2h.3c11.7 3.1 23.4 7.3 35.1 12.5C448 330 479 321.6 512 321.6c21.7 0 42.5 3.7 61.9 10.3-14 13.2-31.4 36.1-50.6 80l-22-11.6 23.9 89.1 83.1-31.5-25.2-13.5c5-11 10.1-19.2 16.1-27.4 8.8-12.6 18.6-24.2 29-34 24.1-23.8 48.8-36.3 69.2-33.1l.4.4.3 1.6c1.3 11 .6 23-2.2 35.2v.3c-3.4 12.8-8.2 25.7-14 38.5 13.2 25.9 20.6 55.1 20.6 86.2-.1 21.3-3.7 41.9-10.2 61.1z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (icon === "steam") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M11.98 0C5.68 0 .51 4.86.02 11.04l6.43 2.66a3.37 3.37 0 0 1 1.91-.59h.19l2.87-4.14v-.06a4.52 4.52 0 1 1 4.52 4.53h-.11l-4.07 2.91v.16a3.39 3.39 0 0 1-6.72.67L.44 15.27A12 12 0 1 0 11.98 0ZM7.54 18.21l-1.47-.61c.26.54.71 1 1.31 1.25a2.54 2.54 0 0 0 3.33-1.38 2.54 2.54 0 0 0-1.37-3.33 2.5 2.5 0 0 0-1.88-.03l1.53.63a1.88 1.88 0 1 1-1.45 3.47Zm11.42-9.3a3.02 3.02 0 1 0-6.04-.01 3.02 3.02 0 0 0 6.04.01Zm-5.28-.01a2.27 2.27 0 1 1 4.53 0 2.27 2.27 0 0 1-4.53 0Z"
        />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="3.5"
          y="5.5"
          width="17"
          height="13"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ContactLinks({ links }: { readonly links: readonly ContactLink[] }) {
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <ul ref={ref} className="mt-10 grid gap-4 sm:grid-cols-2">
      {links.map((link, index) => {
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <li
            key={link.id}
            className={animClass({ isVisible: isInView })}
            style={staggerDelay(index, 100)}
          >
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border-subtle bg-bg-elevated px-6 py-4 transition-colors hover:border-gold-500"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-9 place-items-center border border-gold-700/35 text-gold-700 transition-colors group-hover:border-gold-500 group-hover:text-gold-300 [&_svg]:size-4">
                  <SocialIcon icon={link.icon} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-gold-700 group-hover:text-gold-300">
                  {link.id}
                </span>
              </span>
              <span className="break-all text-right font-serif text-lg text-text-primary group-hover:text-gold-300">
                {link.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
