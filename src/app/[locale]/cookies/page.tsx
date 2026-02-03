import type { Metadata } from "next";
import Header from "../../../components/Header";
import FooterSection from "../../../components/FooterSection";
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
      title: "Cookie Settings | Berlinescots.de",
      description:
        "Manage cookie preferences for Berlinescots.de and learn how we use cookies for site functionality.",
      alternates: {
        canonical: "/en/cookies",
        languages: {
          en: "/en/cookies",
          de: "/de/cookies",
        },
      },
    };
  }
  return {
    title: "Cookie Einstellungen | Berlinescots.de",
    description:
      "Verwalten Sie Cookie‑Einstellungen für Berlinescots.de und erfahren Sie mehr über die Nutzung von Cookies.",
    alternates: {
      canonical: "/de/cookies",
      languages: {
        en: "/en/cookies",
        de: "/de/cookies",
      },
    },
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = getLocale(locale);
  const isEn = safeLocale.startsWith("en");

  return (
    <div className="min-h-screen bg-[#fff7fb] text-black">
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-12 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Header tone="light" />
        <main className="space-y-6 rounded-[32px] border border-[#f3c9d8] bg-white p-8 shadow-[0_24px_60px_rgba(214,105,149,0.18)] lg:p-12">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            {isEn ? "Cookie Settings" : "Cookie Einstellungen"}
          </h1>
          <p className="text-base text-black/70">
            {isEn
              ? "We use essential cookies to ensure secure and reliable site functionality. Optional cookies can be configured in your browser settings."
              : "Wir verwenden essenzielle Cookies, um eine sichere und zuverlässige Funktion der Website zu gewährleisten. Optionale Cookies können Sie in den Browser‑Einstellungen steuern."}
          </p>
          <p className="text-base text-black/70">
            {isEn
              ? "No unnecessary tracking is used. We prioritize privacy‑first experiences."
              : "Wir verwenden kein unnötiges Tracking. Privatsphäre hat Priorität."}
          </p>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
