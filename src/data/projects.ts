import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "proj-portfolio",
    name: {
      pt: "my-expedition",
      en: "my-expedition",
    },
    iconKind: "expedition-33",
    iconLabel: "33",
    summary: {
      pt: "Portfolio narrativo com rotas localizadas e camada de conteudo tipada para evoluir sem retrabalho.",
      en: "Narrative portfolio with localized routes and a typed content layer built to evolve without rework.",
    },
    longSummary: {
      pt: "Tematizado por Clair Obscur: Expedition 33, mistura portfolio e diario de expedicao - cada secao e um capitulo da jornada, com glifos vetoriais autorais feitos no Illustrator, animacoes sutis e frases que homenageiam o jogo. Bilingue por padrao, com camada de conteudo tipada para evoluir sem retrabalho.",
      en: "Themed after Clair Obscur: Expedition 33, it blends portfolio and expedition log - every section is a chapter of the journey, with hand-drawn glyphs crafted in Illustrator, subtle animations and lines that pay homage to the game. Bilingual by default, with a typed content layer built to evolve without rework.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "i18n",
      "Biome",
      "Vercel",
      "Cloudflare",
      "Illustrator",
    ],
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
      pt: "Construido a partir da experiencia com localizacao de jogos e da comunidade de modding. Centraliza arquivos, termos e traducoes em um fluxo unico. Minhas traducoes feitas com a ferramenta ja passam de 100k de downloads e a propria Icosa ja auxiliou mais de 500 tradutores ao redor do mundo.",
      en: "Built from hands-on game localization and modding community experience. Centralizes files, terminology, and translations in a single workflow. Translations released with the tool surpass 100k downloads and Icosa itself has supported over 500 translators worldwide.",
    },
    stack: [
      "Electron",
      "TypeScript",
      "React",
      "Tailwind",
      "i18n",
      "SQLite",
      "Drizzle",
      "Illustrator",
      "Photoshop",
    ],
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
