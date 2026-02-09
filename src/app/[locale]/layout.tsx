import { ReactNode } from "react";
import Script from "next/script";
import {
  defaultLocale,
  Locale,
  locales,
} from "../../i18n/translations";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const isEn = safeLocale.startsWith("en");
  const orgName = "EscortBerlin.de";
  const siteUrl = `https://escortberlin.de/${safeLocale}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: orgName,
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: isEn ? "Customer Support" : "Kundenservice",
      availableLanguage: isEn ? ["English", "German"] : ["Deutsch", "Englisch"],
    },
  };

  return (
    <>
      {children}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

