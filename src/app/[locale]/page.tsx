import type { Metadata } from "next";
import Home from "../page";
import { defaultLocale, Locale, locales } from "../../i18n/translations";

function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = getLocale(locale);

  if (safeLocale.startsWith("en")) {
    return {
      title: "EscortBerlin.de | Discreet German Luxury Companionship",
      description:
        "Premium companionship across Germany with discreet, professional coordination. Explore curated services, refined experiences, and concierge support.",
      alternates: {
        canonical: "/en",
        languages: {
          en: "/en",
          de: "/de",
        },
      },
    };
  }

  return {
    title: "EscortBerlin.de | Diskrete Luxusbegleitung in Deutschland",
    description:
      "Premium Begleitung in ganz Deutschland mit diskreter, professioneller Koordination. Entdecken Sie kuratierte Services, elegante Erlebnisse und Concierge‑Support.",
    alternates: {
      canonical: "/de",
      languages: {
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default function LocaleHome() {
  return <Home />;
}

