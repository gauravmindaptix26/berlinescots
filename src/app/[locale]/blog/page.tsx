import type { Metadata } from "next";
import BlogIndex from "../../blog/page";
import { defaultLocale, Locale, locales } from "../../../i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["de", "en"].map((locale) => ({ locale }));
}

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
  const isEn = safeLocale.startsWith("en");
  return {
    title: isEn ? "Blog | EscortBerlin.de" : "Blog | EscortBerlin.de",
    description: isEn
      ? "Insights and guides on discreet companionship and premium coordination in Berlin."
      : "Einblicke und Guides zu diskreter Begleitung und Premium‑Koordination in Berlin.",
    alternates: {
      canonical: `/${isEn ? "en" : "de"}/blog`,
      languages: {
        en: "/en/blog",
        de: "/de/blog",
      },
    },
  };
}

export default async function LocaleBlogPage() {
  return <BlogIndex />;
}
