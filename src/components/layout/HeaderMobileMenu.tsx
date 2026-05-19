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
        className="rounded-md border border-border-subtle p-2 text-gold-300"
      >
        <span aria-hidden className="mb-1 block h-0.5 w-5 bg-current" />
        <span aria-hidden className="mb-1 block h-0.5 w-5 bg-current" />
        <span aria-hidden className="block h-0.5 w-5 bg-current" />
      </button>
      <ul
        className={cn(
          "absolute right-6 top-16 w-48 rounded-lg border border-border-subtle",
          "bg-bg-elevated p-2 shadow-lg",
          open ? "block" : "hidden",
        )}
      >
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-text-muted hover:bg-bg-base hover:text-gold-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
