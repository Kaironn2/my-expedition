import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "proj-portfolio",
    name: {
      pt: "my-expedition",
      en: "my-expedition",
    },
    iconKind: "expedition-33",
    summary: {
      pt: "Portfolio narrativo com rotas localizadas e camada de conteudo tipada para evoluir sem retrabalho.",
      en: "Narrative portfolio with localized routes and a typed content layer built to evolve without rework.",
    },
    longSummary: {
      pt: "Site pessoal pensado como diario de expedicao, com experiencia bilingue, animacoes on-scroll leves e arquitetura de dados centralizada em arquivos tipados. Cada secao pode ganhar novos artefatos sem alterar a estrutura visual.",
      en: "Personal site shaped as an expedition log, with a bilingual experience, lightweight on-scroll animations, and a data architecture centralized in typed files. Every section can welcome new artifacts without breaking the visual structure.",
    },
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind", "next-intl"],
    links: [{ kind: "github", url: "https://github.com/Kaironn2/my-expedition" }],
  },
  {
    id: "proj-icosa",
    name: {
      pt: "Icosa",
      en: "Icosa",
    },
    iconKind: "icosa",
    summary: {
      pt: "Ferramenta desktop para tradutores de mods de Baldur's Gate 3 - gerencia arquivos, dicionarios e fluxos de localizacao.",
      en: "Desktop tool for Baldur's Gate 3 mod translators - manages files, dictionaries, and localization workflows.",
    },
    longSummary: {
      pt: "Construido a partir da experiencia com localizacao de jogos e da comunidade de modding. Centraliza arquivos, termos e traducoes em um fluxo unico e ja e usado por tradutores ao redor do mundo.",
      en: "Built from hands-on game localization and modding community experience. Centralizes files, terminology, and translations in a single workflow and is already used by translators around the world.",
    },
    stack: ["Electron", "TypeScript", "React", "SQLite"],
    links: [
      { kind: "github", url: "https://github.com/Kaironn2/BG3-Mod-Translator-Desktop" },
      { kind: "nexus", url: "https://www.nexusmods.com/baldursgate3/mods/15976" },
    ],
  },
  {
    id: "proj-secret",
    name: {
      pt: "Em breve",
      en: "Coming soon",
    },
    iconKind: "lune-glyph",
    summary: {
      pt: "",
      en: "",
    },
    longSummary: {
      pt: "Entendo a curiosidade, mas e segredo o que vem ai...",
      en: "I get the curiosity, but what is coming next is a secret...",
    },
    stack: [],
    links: [],
    placeholder: true,
    secretLevel: "?",
  },
] as const;
