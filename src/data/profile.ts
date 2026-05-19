import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Jonathas Oliveira",
  role: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  },
  tagline: {
    pt: "Construo experiencias digitais rapidas, acessiveis e bem acabadas.",
    en: "I build fast, accessible, and polished digital experiences.",
  },
  bio: {
    pt: "Sou engenheiro de software com foco em interfaces modernas, arquitetura de frontend e produtos que precisam parecer simples mesmo quando resolvem problemas complexos.\n\nGosto de trabalhar perto do problema real: entender o usuario, reduzir atrito e entregar sistemas que seguem performando bem depois do primeiro release.",
    en: "I am a software engineer focused on modern interfaces, frontend architecture, and products that need to feel simple while solving complex problems.\n\nI like working close to the real problem: understanding the user, reducing friction, and shipping systems that keep performing well after the first release.",
  },
  location: "Brasil",
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/kaironn",
      icon: "github",
    },
    {
      id: "email",
      label: "fairytail9637@gmail.com",
      href: "mailto:fairytail9637@gmail.com",
      icon: "email",
    },
  ],
} as const;
