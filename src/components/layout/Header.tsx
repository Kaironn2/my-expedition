import { useLocale, useTranslations } from "next-intl";
import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import type { Locale } from "@/types/portfolio";

const SECTIONS = ["about", "experience", "certifications", "projects", "contact"] as const;

export function Header() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const language = useTranslations("language");
  const items = SECTIONS.map((id) => ({ id, label: t(id) }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-serif text-lg text-gold-300 hover:text-gold-500">
          Kaironn
        </a>
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex gap-6 font-mono text-xs uppercase tracking-wider">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-text-muted hover:text-gold-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle ariaLabel={language("toggle")} locale={locale} />
          <HeaderMobileMenu items={items} />
        </div>
      </div>
    </header>
  );
}
