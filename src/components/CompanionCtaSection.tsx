"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "../i18n/LanguageProvider";

export default function CompanionCtaSection() {
  const { t } = useTranslations();
  const pathname = usePathname();
  const localePrefix = useMemo(() => {
    if (pathname?.startsWith("/en")) return "/en";
    if (pathname?.startsWith("/de")) return "/de";
    return "/de";
  }, [pathname]);

  return (
    <section className="perf-section bg-[var(--shell)] py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-6 text-center sm:px-10 lg:px-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
            {t("cta.titleLine1")}
            <br />
            {t("cta.titleLine2")}
          </h2>
          <p className="text-sm text-black/70 sm:text-base">
            {t("cta.copy")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            className="rounded-full bg-[#CF1C72] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(207,28,114,0.35)]"
            href={`${localePrefix}/booking-guidelines`}
          >
            {t("cta.book")}
          </Link>
          <Link
            className="rounded-full border border-[var(--line)] bg-white px-6 py-2.5 text-sm font-semibold text-black/80"
            href={`${localePrefix}/contact`}
          >
            {t("cta.contact")}
          </Link>
        </div>
        <div className="w-full overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <div className="relative aspect-[16/9] w-full sm:aspect-[16/8]">
            <Image
              src="/images/Frauen in Limousine.jpeg"
              alt="Elegant companion under colorful lights"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
