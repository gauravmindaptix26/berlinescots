"use client";

import { useTranslations } from "../i18n/LanguageProvider";

export default function FooterSection() {
  const { t, locale } = useTranslations();
  const localePrefix = locale.startsWith("en") ? "/en" : "/de";
  const isEn = locale.startsWith("en");

  const footerColumns = [
    {
      title: isEn ? "Services" : "Services",
      items: [
        {
          label: isEn ? "Escort Agency Berlin" : "Escort Agentur Berlin",
          href: `${localePrefix}/services/escort-agentur-berlin`,
        },
        {
          label: isEn ? "Escort Service Berlin" : "Escort Service Berlin",
          href: `${localePrefix}/services/escort-service-berlin`,
        },
        {
          label: isEn ? "High Class Escort Berlin" : "High Class Escort Berlin",
          href: `${localePrefix}/services/high-class-escort-berlin`,
        },
        {
          label: isEn ? "Escort Berlin Mitte" : "Escort Berlin Mitte",
          href: `${localePrefix}/services/escort-berlin-mitte`,
        },
        {
          label: isEn ? "Business Escort Berlin" : "Business Escort Berlin",
          href: `${localePrefix}/services/business-escort-berlin`,
        },
      ],
    },
    {
      title: isEn ? "Company" : "Unternehmen",
      items: [
        { label: isEn ? "About" : "Über uns", href: `${localePrefix}/about` },
        {
          label: isEn ? "Contact" : "Kontakt",
          href: `${localePrefix}/contact`,
        },
        {
          label: isEn ? "Booking Guidelines" : "Buchungsrichtlinien",
          href: `${localePrefix}/booking-guidelines`,
        },
      ],
    },
    {
      title: isEn ? "Legal" : "Rechtliches",
      items: [
        { label: t("footer.legal1"), href: `${localePrefix}/privacy` },
        { label: t("footer.legal2"), href: `${localePrefix}/terms` },
        { label: t("footer.legal3"), href: `${localePrefix}/cookies` },
      ],
    },
  ];

  const legalLinks = [
    { label: t("footer.legal1"), href: `${localePrefix}/privacy` },
    { label: t("footer.legal2"), href: `${localePrefix}/terms` },
    { label: t("footer.legal3"), href: `${localePrefix}/cookies` },
    { label: t("footer.legal4"), href: `${localePrefix}/booking-guidelines` },
  ];

  return (
    <footer className="perf-section bg-black py-16 text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.6fr_3.4fr]">
          <div className="text-2xl font-semibold text-[var(--accent)]">
            <span style={{ fontFamily: "var(--font-script)" }}>
              EscortBerlin.de
            </span>
            <p className="mt-3 text-sm font-normal text-white/80">
              {isEn
                ? "Discreet, premium companionship curated for Berlin."
                : "Diskrete Premium-Begleitung, kuratiert für Berlin."}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4 text-sm">
                <p className="text-lg font-semibold text-white">
                  {column.title}
                </p>
                <ul className="space-y-3 text-base text-white">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a className="cursor-pointer" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white">
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <a key={item.label} className="cursor-pointer" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-white/70">© 2025 EscortBerlin.de</div>
        </div>
      </div>
    </footer>
  );
}
