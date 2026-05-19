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
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="border border-gold-700/35 bg-bg-base/40 p-2 text-gold-300"
      >
        <span aria-hidden className="mb-1 block h-0.5 w-5 bg-current" />
        <span aria-hidden className="mb-1 block h-0.5 w-5 bg-current" />
        <span aria-hidden className="block h-0.5 w-5 bg-current" />
      </button>
      <ul
        className={cn(
          "absolute right-6 top-16 w-52 border border-gold-700/25",
          "bg-bg-base/95 p-2 shadow-lg shadow-black/30 backdrop-blur-xl",
          open ? "block" : "hidden",
        )}
      >
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 font-display text-[10px] uppercase tracking-[0.22em] text-text-muted hover:bg-gold-500/10 hover:text-gold-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
