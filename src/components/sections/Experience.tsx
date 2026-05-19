import { useLocale, useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experiences";
import { formatPeriod } from "@/lib/format-period";
import type { Locale } from "@/types/portfolio";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");

  return (
    <Section id="experience">
      <Heading eyebrow="02" as="h2">
        {t("experience")}
      </Heading>
      <ol className="mt-10 space-y-10 border-l border-border-subtle pl-6">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            index={index}
            company={experience.company}
            role={experience.role[locale]}
            description={experience.description[locale]}
            period={formatPeriod(experience.period, locale)}
            stack={experience.stack}
          />
        ))}
      </ol>
    </Section>
  );
}
