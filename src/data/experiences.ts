import type { Experience } from "@/types/portfolio";

export const experiences: readonly Experience[] = [
  {
    id: "data-opportunity-engineer",
    company: "Data Opportunity",
    current: true,
    level: 4,
    role: {
      pt: "Software Engineer",
      en: "Software Engineer",
    },
    period: { start: "2026-03" },
    periodLabel: {
      pt: "Mar 2026 - Presente · Remoto",
      en: "Mar 2026 - Present · Remote",
    },
    description: {
      pt: "Engenharia de sistemas de extracao de dados em larga escala, com foco em performance, confiabilidade e integracao de APIs externas.",
      en: "Engineering large-scale data extraction systems with focus on performance, reliability and external API integration.",
    },
    highlights: [
      {
        pt: "Otimizei pipelines de scraping em ate 90%, reduzindo processos de aproximadamente 20min para 2min e de 3h para 20min.",
        en: "Optimized scraping pipelines by up to 90%, cutting runs from roughly 20min to 2min and from 3h to 20min.",
      },
      {
        pt: "Refinei um fluxo de 104.000 itens reduzindo requisicoes por item de aproximadamente 9 para 4, cortando uso de infraestrutura.",
        en: "Refined a 104,000-item workflow by reducing requests per item from roughly 9 to 4, cutting infrastructure usage.",
      },
      {
        pt: "Desenvolvi webhooks em FastAPI e integracoes com APIs externas para comunicacao entre servicos.",
        en: "Built FastAPI webhooks and integrated external APIs for service-to-service communication.",
      },
      {
        pt: "Criei rotinas de validacao e normalizacao para elevar consistencia e qualidade de ingestao.",
        en: "Created validation and normalization routines to raise data consistency and ingestion quality.",
      },
    ],
    stack: ["Python", "FastAPI", "Scrapy", "Postgres", "Redis", "Digital Ocean", "Docker"],
  },
  {
    id: "data-opportunity-intern",
    company: "Data Opportunity",
    level: 3,
    role: {
      pt: "Software Engineering Intern",
      en: "Software Engineering Intern",
    },
    period: { start: "2025-10", end: "2026-03" },
    periodLabel: {
      pt: "Out 2025 - Mar 2026 · Estagio",
      en: "Oct 2025 - Mar 2026 · Internship",
    },
    description: {
      pt: "Contribui com fluxos de extracao e processamento de dados, apoiando manutencao de pipelines e organizacao de rotinas.",
      en: "Contributed to data extraction and processing workflows, supporting pipeline maintenance and routine organization.",
    },
    highlights: [
      {
        pt: "Desenvolvimento e manutencao de workflows com Python e Scrapy.",
        en: "Developed and maintained workflows using Python and Scrapy.",
      },
      {
        pt: "Analise de requisicoes internas e implementacao de automacoes focadas em qualidade.",
        en: "Analyzed internal requests and implemented quality-focused automation.",
      },
      {
        pt: "Suporte na manutencao de pipelines e processos de extracao.",
        en: "Supported pipeline maintenance and extraction processes.",
      },
    ],
    stack: ["Python", "Scrapy", "SQL", "Git"],
  },
  {
    id: "ong-gabriel-volunteer",
    company: "ONG Gabriel",
    level: 2,
    role: {
      pt: "Volunteer Software Engineer",
      en: "Volunteer Software Engineer",
    },
    period: { start: "2025-09", end: "2025-12" },
    periodLabel: {
      pt: "Set 2025 - Dez 2025 · Remoto",
      en: "Sep 2025 - Dec 2025 · Remote",
    },
    description: {
      pt: "APIs REST, frontend SPA/SSR e infraestrutura containerizada para uma ONG.",
      en: "REST APIs, SPA/SSR frontend and containerized infrastructure for a non-profit.",
    },
    highlights: [
      {
        pt: "APIs REST e servicos backend em Django/DRF.",
        en: "REST APIs and backend services with Django/DRF.",
      },
      {
        pt: "Frontend SPA/SSR com TypeScript e Next.js integrando CMS dinamico.",
        en: "SPA/SSR frontend with TypeScript and Next.js, integrating dynamic CMS content.",
      },
      {
        pt: "Refatoracao de arquitetura para escalabilidade e manutencao.",
        en: "Refactored architecture for scalability and maintainability.",
      },
      {
        pt: "Stack containerizada com Docker, Compose e Traefik.",
        en: "Containerized stack with Docker, Compose and Traefik.",
      },
    ],
    stack: ["Django", "Next.js", "TypeScript", "Postgres", "Docker", "Traefik", "Hostinger"],
  },
  {
    id: "loja-sangue-latino-automation",
    company: "Loja Sangue Latino",
    level: 1,
    role: {
      pt: "Automation Developer",
      en: "Automation Developer",
    },
    period: { start: "2024-05", end: "2025-10" },
    periodLabel: {
      pt: "Mai 2024 - Out 2025 · Feira de Santana, BA",
      en: "May 2024 - Oct 2025 · Feira de Santana, BA",
    },
    description: {
      pt: "Workflows de automacao e pipelines de dados impactando logistica, atendimento e financas.",
      en: "Automation workflows and data pipelines impacting logistics, support and finance.",
    },
    highlights: [
      {
        pt: "Automacao de 90% do rastreio de envios integrando 4 transportadoras, eliminando 6h/dia de trabalho manual.",
        en: "Automated 90% of shipment tracking across 4 carriers, eliminating 6h/day of manual work.",
      },
      {
        pt: "ETLs de auditoria de notas fiscais e frete melhorando analise de custos.",
        en: "ETL workflows for invoice and freight auditing, improving cost analysis.",
      },
      {
        pt: "Sistemas de notificacao automatica por email e WhatsApp reduzindo suporte de transporte em mais de 50%.",
        en: "Automated email and WhatsApp notification systems cutting transport-related support by more than 50%.",
      },
      {
        pt: "Automacoes operacionais com Google Apps Script e planilhas integradas em tempo real.",
        en: "Operational automations with Google Apps Script and real-time integrated spreadsheets.",
      },
    ],
    stack: ["Python", "Selenium", "lxml", "Apps Script", "Office 365"],
  },
] as const;
