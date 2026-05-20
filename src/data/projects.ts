import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "proj-portfolio",
    name: "my-expedition",
    category: {
      pt: "Portfolio narrativo",
      en: "Narrative portfolio",
    },
    level: {
      pt: "Nv. 6",
      en: "Lv. 6",
    },
    slot: {
      pt: "[ expedition log ]",
      en: "[ expedition log ]",
    },
    summary: {
      pt: "Portfolio em Next.js 15 com rotas localizadas, visual de expedicao e uma camada de conteudo tipada para evoluir sem retrabalho.",
      en: "Next.js 15 portfolio with localized routes, expedition-inspired visuals, and a typed content layer built to evolve without rework.",
    },
    highlights: [
      {
        pt: "Experiencia bilingue com next-intl e prefixo de locale em todas as rotas.",
        en: "Bilingual experience with next-intl and locale prefixes on every route.",
      },
      {
        pt: "Animacoes on-scroll em CSS e componentes client pequenos para preservar performance.",
        en: "CSS scroll animations and small client components to preserve performance.",
      },
      {
        pt: "Dados de carreira, certificacoes e projetos centralizados em arquivos tipados.",
        en: "Career, certification, and project content centralized in typed data files.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
    status: {
      pt: "Em evolucao",
      en: "Evolving",
    },
    year: "2026",
    repoUrl: "https://github.com/Kaironn2/my-expedition",
    imageUrl: "/projects/my-expedition.webp",
    imageAlt: {
      pt: "Screenshot do portfolio my-expedition.",
      en: "Screenshot of the my-expedition portfolio.",
    },
    highlight: true,
  },
  {
    id: "proj-icosa",
    name: "Icosa",
    category: {
      pt: "Ferramenta desktop",
      en: "Desktop tool",
    },
    level: {
      pt: "Nv. 7",
      en: "Lv. 7",
    },
    slot: {
      pt: "[ screenshot do app ]",
      en: "[ app screenshot ]",
    },
    summary: {
      pt: "Aplicacao desktop em Electron + TypeScript para auxiliar tradutores de mods de Baldur's Gate 3 com gerenciamento de arquivos, dicionarios e fluxos de localizacao.",
      en: "Electron + TypeScript desktop app that helps Baldur's Gate 3 mod translators manage files, dictionaries, and localization workflows.",
    },
    highlights: [
      {
        pt: "Criado a partir da experiencia com localizacao de jogos e comunidade de modding.",
        en: "Built from hands-on game localization and modding community experience.",
      },
      {
        pt: "Apoia tradutores com fluxos de trabalho para arquivos, termos e traducoes.",
        en: "Supports translators with workflows for files, terminology, and translations.",
      },
      {
        pt: "Projeto usado por tradutores ao redor do mundo.",
        en: "Project used by translators around the world.",
      },
    ],
    stack: ["Electron", "TypeScript", "React", "SQLite"],
    status: {
      pt: "Em producao",
      en: "In production",
    },
    year: "2025",
    repoUrl: "https://github.com/Kaironn2/BG3-Mod-Translator-Desktop",
    imageUrl: "/projects/icosa.webp",
    imageAlt: {
      pt: "Screenshot do aplicativo Icosa.",
      en: "Screenshot of the Icosa app.",
    },
    highlight: true,
  },
] as const;
