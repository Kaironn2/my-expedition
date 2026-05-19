"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface Item {
  readonly id: string;
  readonly label: string;
}

interface Props {
  readonly items: readonly Item[];
}

export function HeaderNavigation({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    function syncHash() {
      const id = window.location.hash.replace("#", "");
      if (items.some((item) => item.id === id)) setActiveId(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-34% 0px -56% 0px",
        threshold: [0.08, 0.18, 0.32],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer.disconnect();
    };
  }, [items]);

  return (
    <nav className="hidden md:block" aria-label="Primary">
      <ul className="k-header-nav">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cn("k-header-nav-link", activeId === item.id && "is-active")}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
