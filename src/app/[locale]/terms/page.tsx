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
      title: "Terms of Service | Berlinescots.de",
      description:
        "Review the terms of service for using Berlinescots.de and our premium concierge communications.",
      alternates: {
        canonical: "/en/terms",
        languages: {
          en: "/en/terms",
          de: "/de/terms",
        },
      },
    };
  }
  return {
    title: "Nutzungsbedingungen | Berlinescots.de",
    description:
      "Lesen Sie die Nutzungsbedingungen für die Nutzung von Berlinescots.de und unseren Concierge‑Service.",
    alternates: {
      canonical: "/de/terms",
      languages: {
        en: "/en/terms",
        de: "/de/terms",
      },
    },
  };
}

export default async function TermsPage({
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
            {isEn ? "Terms of Service" : "Nutzungsbedingungen"}
          </h1>
          <p className="text-base text-black/70">
            {isEn
              ? "By using this site, you agree to engage with our concierge in a respectful and professional manner. All communications must be lawful and discreet."
              : "Durch die Nutzung dieser Website stimmen Sie einer respektvollen und professionellen Kommunikation mit unserem Concierge zu. Alle Anfragen müssen rechtmäßig und diskret erfolgen."}
          </p>
          <p className="text-base text-black/70">
            {isEn
              ? "We reserve the right to decline requests that do not align with our standards of professionalism and discretion."
              : "Wir behalten uns das Recht vor, Anfragen abzulehnen, die nicht unseren Standards an Professionalität und Diskretion entsprechen."}
          </p>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
