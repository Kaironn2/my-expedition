import { useLocale, useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Locale } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const ordered = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));

  return (
    <Section id="projects">
      <Heading eyebrow="04" as="h2">
        {t("projects")}
      </Heading>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {ordered.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            name={project.name}
            summary={project.summary[locale]}
            stack={project.stack}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            highlight={project.highlight}
          />
        ))}
      </ul>
    </Section>
  );
}
