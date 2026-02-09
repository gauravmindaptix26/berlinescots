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
      title: "Booking Guidelines | EscortBerlin.de",
      description:
        "Read the booking guidelines for EscortBerlin.de to ensure a discreet and professional inquiry.",
      alternates: {
        canonical: "/en/booking-guidelines",
        languages: {
          en: "/en/booking-guidelines",
          de: "/de/booking-guidelines",
        },
      },
    };
  }
  return {
    title: "Buchungsrichtlinien | EscortBerlin.de",
    description:
      "Lesen Sie die Buchungsrichtlinien von EscortBerlin.de für eine diskrete und professionelle Anfrage.",
    alternates: {
      canonical: "/de/booking-guidelines",
      languages: {
        en: "/en/booking-guidelines",
        de: "/de/booking-guidelines",
      },
    },
  };
}

export default async function BookingGuidelinesPage({
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
            {isEn ? "Booking Guidelines" : "Buchungsrichtlinien"}
          </h1>
          <p className="text-base text-black/70">
            {isEn
              ? "Please provide clear details about your preferred time, location, and style. Our team will confirm availability and respond with a refined proposal."
              : "Bitte geben Sie klare Angaben zu Zeit, Ort und gewünschtem Stil an. Unser Team bestätigt die Verfügbarkeit und antwortet mit einem maßgeschneiderten Vorschlag."}
          </p>
          <p className="text-base text-black/70">
            {isEn
              ? "All requests are handled confidentially and with professional discretion."
              : "Alle Anfragen werden vertraulich und mit professioneller Diskretion behandelt."}
          </p>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}

