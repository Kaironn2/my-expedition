import { useLocale, useTranslations } from "next-intl";
import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { HeaderNavigation } from "@/components/layout/HeaderNavigation";
import { HeaderScrollFrame } from "@/components/layout/HeaderScrollFrame";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import type { Locale } from "@/types/portfolio";

const SECTIONS = [
  "about",
  "experience",
  "skills",
  "projects",
  "certifications",
  "courses",
  "contact",
] as const;

export function Header() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const language = useTranslations("language");
  const items = SECTIONS.map((id) => ({ id, label: t(id) }));

  return (
    <HeaderScrollFrame>
      <div className="k-header-inner">
        <a href="#top" className="k-header-brand" aria-label="Kaironn">
          <span className="k-header-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
              <path d="M14 2 L26 14 L14 26 L2 14 Z" />
              <path d="M14 8 L20 14 L14 20 L8 14 Z" />
            </svg>
          </span>
          <span>KAIRONN</span>
        </a>
        <HeaderNavigation items={items} />
        <div className="k-header-actions">
          <LanguageToggle ariaLabel={language("toggle")} locale={locale} className="k-language" />
          <HeaderMobileMenu items={items} />
        </div>
      </div>
    </HeaderScrollFrame>
  );
}
