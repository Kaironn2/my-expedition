export type Locale = "pt" | "en";

export type LocalizedString = Readonly<Record<Locale, string>>;

export interface ContactLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?: "github" | "linkedin" | "email" | "twitter" | "website";
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
  readonly role: LocalizedString;
  readonly period: ExperiencePeriod;
  readonly description: LocalizedString;
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
  readonly summary: LocalizedString;
  readonly stack: readonly string[];
  readonly repoUrl?: string;
  readonly liveUrl?: string;
  readonly highlight: boolean;
}
