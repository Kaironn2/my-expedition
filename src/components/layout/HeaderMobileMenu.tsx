"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface Item {
  readonly id: string;
  readonly label: string;
}

export function HeaderMobileMenu({ items }: { readonly items: readonly Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="k-mobile-menu md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="k-mobile-menu-trigger"
      >
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />
      </button>
      <ul className={cn("k-mobile-menu-panel", open ? "block" : "hidden")}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => setOpen(false)} className="k-mobile-menu-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
