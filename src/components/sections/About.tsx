import { useLocale, useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import type { Locale } from "@/types/portfolio";
import { AboutContent } from "./AboutContent";

export function About() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");

  return (
    <Section id="about">
      <Heading eyebrow="01" as="h2">
        {t("about")}
      </Heading>
      <AboutContent bio={profile.bio[locale]} location={profile.location} />
    </Section>
  );
}
