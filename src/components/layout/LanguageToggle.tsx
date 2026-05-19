"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/cn";
import type { Locale } from "@/types/portfolio";

const LOCALES = ["pt", "en"] as const;

interface Props {
  readonly ariaLabel: string;
  readonly className?: string;
  readonly locale: Locale;
}

function pathForLocale(pathname: string, locale: Locale): string {
  const parts = pathname.split("/");
  parts[1] = locale;
  return parts.join("/") || `/${locale}`;
}

export function LanguageToggle({ ariaLabel, className, locale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      const hash = window.location.hash;
      router.replace(`${pathForLocale(pathname, next)}${hash}`, { scroll: false });
    });
  }

  return (
    <fieldset
      className={cn(
        "inline-flex rounded-full border border-border-subtle p-1 font-mono text-xs",
        isPending && "opacity-60",
        className,
      )}
    >
      <legend className="sr-only">{ariaLabel}</legend>
      {LOCALES.map((nextLocale) => (
        <button
          key={nextLocale}
          type="button"
          onClick={() => switchTo(nextLocale)}
          aria-pressed={nextLocale === locale}
          className={cn(
            "rounded-full px-3 py-1 uppercase tracking-wider transition-colors",
            nextLocale === locale
              ? "bg-gold-500 text-bg-base"
              : "text-text-muted hover:text-gold-300",
          )}
        >
          {nextLocale}
        </button>
      ))}
    </fieldset>
  );
}
