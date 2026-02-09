import type { Metadata } from "next";
import ContactPage from "../../contact/page";
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
      title: "Contact EscortBerlin.de | Discreet Premium Concierge",
      description:
        "Contact EscortBerlin.de for discreet, premium communication. Choose your preferred channel and connect with our concierge team.",
      alternates: {
        canonical: "/en/contact",
        languages: {
          en: "/en/contact",
          de: "/de/contact",
        },
      },
    };
  }

  return {
    title: "Kontakt EscortBerlin.de | Diskreter Premium‑Concierge",
    description:
      "Kontaktieren Sie EscortBerlin.de für diskrete, hochwertige Kommunikation. Wählen Sie Ihren bevorzugten Kanal und sprechen Sie mit unserem Concierge.",
    alternates: {
      canonical: "/de/contact",
      languages: {
        en: "/en/contact",
        de: "/de/contact",
      },
    },
  };
}

export default function LocaleContactPage() {
  return <ContactPage />;
}

