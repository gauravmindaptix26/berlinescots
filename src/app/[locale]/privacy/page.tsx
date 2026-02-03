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
      title: "Privacy Policy | Berlinescots.de",
      description:
        "Read how Berlinescots.de protects your privacy and handles confidential information with care.",
      alternates: {
        canonical: "/en/privacy",
        languages: {
          en: "/en/privacy",
          de: "/de/privacy",
        },
      },
    };
  }
  return {
    title: "Datenschutz | Berlinescots.de",
    description:
      "Erfahren Sie, wie Berlinescots.de Ihre Privatsphäre schützt und Informationen diskret behandelt.",
    alternates: {
      canonical: "/de/privacy",
      languages: {
        en: "/en/privacy",
        de: "/de/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
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
            {isEn ? "Privacy Policy" : "Datenschutzerklärung"}
          </h1>
          <p className="text-base text-black/70">
            {isEn
              ? "Your privacy is treated with the highest level of discretion. We only collect information necessary to handle inquiries and provide premium concierge support."
              : "Ihre Privatsphäre hat höchste Priorität. Wir erfassen nur Informationen, die zur Bearbeitung von Anfragen und zur Bereitstellung unseres Concierge‑Services notwendig sind."}
          </p>
          <p className="text-base text-black/70">
            {isEn
              ? "We do not sell or share personal data with third parties. Any communication is handled securely and confidentially."
              : "Wir verkaufen oder teilen keine personenbezogenen Daten mit Dritten. Jede Kommunikation wird sicher und vertraulich behandelt."}
          </p>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
