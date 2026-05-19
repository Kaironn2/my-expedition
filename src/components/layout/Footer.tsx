import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          &copy; {year} {profile.name}. {t("rights")}
        </p>
        <ul className="flex gap-4 font-mono text-xs uppercase tracking-wider">
          {profile.socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-text-muted hover:text-gold-300"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
