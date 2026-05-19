import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import type { Locale } from "@/types/portfolio";
import { HeroIntro } from "./HeroIntro";

export function Hero() {
  const locale = useLocale() as Locale;
  const t = useTranslations("hero");

  return (
    <Section id="top" className="flex min-h-screen items-center">
      <HeroIntro
        name={profile.name}
        role={profile.role[locale]}
        tagline={profile.tagline[locale]}
        ctaLabel={t("cta")}
      />
    </Section>
  );
}
