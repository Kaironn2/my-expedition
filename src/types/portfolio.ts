export type Locale = "pt" | "en";

export type LocalizedString = Readonly<Record<Locale, string>>;

export interface ContactLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?:
    | "github"
    | "linkedin"
    | "email"
    | "twitter"
    | "instagram"
    | "nexus"
    | "steam"
    | "website";
}

export interface Profile {
  readonly name: string;
  readonly role: LocalizedString;
  readonly tagline: LocalizedString;
  readonly bio: LocalizedString;
  readonly location: string;
  readonly socials: readonly ContactLink[];
}

export interface ExperiencePeriod {
  readonly start: string;
  readonly end?: string;
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly current?: boolean;
  readonly level: number;
  readonly role: LocalizedString;
  readonly period: ExperiencePeriod;
  readonly periodLabel: LocalizedString;
  readonly description: LocalizedString;
  readonly highlights: readonly LocalizedString[];
  readonly stack: readonly string[];
}

export interface Certification {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
  readonly issuedAt: string;
  readonly credentialUrl?: string;
  readonly logoUrl?: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly category: LocalizedString;
  readonly level: LocalizedString;
  readonly slot: LocalizedString;
  readonly summary: LocalizedString;
  readonly highlights: readonly LocalizedString[];
  readonly stack: readonly string[];
  readonly status: LocalizedString;
  readonly year: string;
  readonly repoUrl?: string;
  readonly liveUrl?: string;
  readonly imageUrl?: string;
  readonly imageAlt: LocalizedString;
  readonly highlight: boolean;
}
