import type { Experience } from "@/types/portfolio";

export const experiences: readonly Experience[] = [
  {
    id: "exp-current",
    company: "TODO: Empresa atual",
    role: {
      pt: "TODO: cargo atual",
      en: "TODO: current role",
    },
    period: { start: "2024-01" },
    description: {
      pt: "TODO: descricao curta das responsabilidades, entregas e impacto no produto.",
      en: "TODO: short description of responsibilities, deliveries, and product impact.",
    },
    stack: ["TypeScript", "React", "Node.js"],
  },
] as const;
