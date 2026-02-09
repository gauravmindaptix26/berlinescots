import type { Metadata } from "next";
import ServicePage from "../../../services/[slug]/page";
import { defaultLocale, Locale, locales } from "../../../../i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = [
    "escort-agentur-berlin",
    "escort-service-berlin",
    "high-class-escort-berlin",
    "escort-berlin-mitte",
    "business-escort-berlin",
  ];
  const locales = ["de", "en"];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

const serviceMeta = {
  "escort-agentur-berlin": {
    en: {
      title: "Escort Agency Berlin | EscortBerlin.de",
      description:
        "A refined escort agency experience in Berlin with curated companions, discreet booking, and premium concierge care.",
    },
    de: {
      title: "Escort Agentur Berlin | EscortBerlin.de",
      description:
        "Eine exklusive Escort‑Agentur in Berlin mit kuratierter Auswahl, diskreter Buchung und Premium‑Concierge‑Service.",
    },
  },
  "escort-service-berlin": {
    en: {
      title: "Escort Service Berlin | EscortBerlin.de",
      description:
        "Reliable escort service in Berlin for private evenings, events, and premium city experiences with polished discretion.",
    },
    de: {
      title: "Escort Service Berlin | EscortBerlin.de",
      description:
        "Zuverlässiger Escort Service in Berlin für private Abende, Events und Premium‑Stadterlebnisse mit stilvoller Diskretion.",
    },
  },
  "high-class-escort-berlin": {
    en: {
      title: "High Class Escort Berlin | EscortBerlin.de",
      description:
        "High‑class companionship in Berlin with refined presentation, elite profiles, and discreet concierge coordination.",
    },
    de: {
      title: "High Class Escort Berlin | EscortBerlin.de",
      description:
        "High‑Class Begleitung in Berlin mit eleganter Präsentation, Elite‑Profilen und diskreter Concierge‑Koordination.",
    },
  },
  "escort-berlin-mitte": {
    en: {
      title: "Escort Berlin Mitte | EscortBerlin.de",
      description:
        "Local escort companions in Berlin Mitte with refined availability, discreet meetings, and tailored plans.",
    },
    de: {
      title: "Escort Berlin Mitte | EscortBerlin.de",
      description:
        "Lokale Escort‑Begleitung in Berlin Mitte mit diskreter Verfügbarkeit und maßgeschneiderten Arrangements.",
    },
  },
  "business-escort-berlin": {
    en: {
      title: "Business Escort Berlin | EscortBerlin.de",
      description:
        "Professional business escort in Berlin for corporate dinners, events, and executive travel with discretion.",
    },
    de: {
      title: "Business Escort Berlin | EscortBerlin.de",
      description:
        "Professioneller Business Escort in Berlin für Dinner, Events und Executive‑Reisen mit maximaler Diskretion.",
    },
  },
} as const;

function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: keyof typeof serviceMeta }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = getLocale(locale);
  const meta = serviceMeta[slug];
  if (!meta) return {};
  const chosen = safeLocale.startsWith("en") ? meta.en : meta.de;
  return {
    title: chosen.title,
    description: chosen.description,
    alternates: {
      canonical: `/${safeLocale.startsWith("en") ? "en" : "de"}/services/${slug}`,
      languages: {
        en: `/en/services/${slug}`,
        de: `/de/services/${slug}`,
      },
    },
  };
}

export default async function LocaleServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  return <ServicePage {...props} />;
}

