"use client";

import { useInView } from "@/hooks/useInView";
import { animClass, staggerDelay } from "@/lib/anim";
import type { ContactLink } from "@/types/portfolio";

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
              <span className="font-mono text-xs uppercase tracking-wider text-gold-700 group-hover:text-gold-300">
                {link.id}
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
