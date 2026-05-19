import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "proj-portfolio",
    name: "my-expedition",
    summary: {
      pt: "Este portfolio. Next.js + TypeScript, animacoes on-scroll com CSS puro.",
      en: "This portfolio. Next.js + TypeScript, scroll animations in pure CSS.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
    repoUrl: "https://github.com/kaironn/my-expedition",
    highlight: true,
  },
] as const;
