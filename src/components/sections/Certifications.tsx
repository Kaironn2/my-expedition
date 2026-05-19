import { useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const t = useTranslations("nav");

  return (
    <Section id="certifications">
      <Heading eyebrow="03" as="h2">
        {t("certifications")}
      </Heading>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            index={index}
            name={certification.name}
            issuer={certification.issuer}
            issuedAt={certification.issuedAt}
            credentialUrl={certification.credentialUrl}
          />
        ))}
      </ul>
    </Section>
  );
}
