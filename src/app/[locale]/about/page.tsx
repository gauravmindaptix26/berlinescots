import type { Metadata } from "next";
import AboutPage from "../../about/page";
import { defaultLocale, Locale, locales } from "../../../i18n/translations";

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
      title: "About EscortBerlin.de | Discreet Luxury Companionship",
      description:
        "Discover EscortBerlin.de: a Germany‑based luxury companionship studio focused on discretion, refinement, and premium concierge care.",
      alternates: {
        canonical: "/en/about",
        languages: {
          en: "/en/about",
          de: "/de/about",
        },
      },
    };
  }

  return {
    title: "Über EscortBerlin.de | Diskrete Luxusbegleitung",
    description:
      "Erfahren Sie mehr über EscortBerlin.de: eine deutsche Luxusbegleitung mit Fokus auf Diskretion, Stil und professionellem Concierge‑Service.",
    alternates: {
      canonical: "/de/about",
      languages: {
        en: "/en/about",
        de: "/de/about",
      },
    },
  };
}

export default function LocaleAboutPage() {
  return <AboutPage />;
}

