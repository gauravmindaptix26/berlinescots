"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useTranslations();
  const pathname = usePathname();
  const localePrefix = useMemo(() => {
    if (pathname?.startsWith("/en")) return "/en";
    if (pathname?.startsWith("/de")) return "/de";
    return "/de";
  }, [pathname]);

  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.25fr]">
      <div className="max-w-xl space-y-8">
        <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
          {t("hero.titleLine1")}
          <br />
          {t("hero.titleLine2")}
        </h1>
        <p className="text-lg leading-relaxed text-black sm:text-xl">
          {t("hero.copy")}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            className="rounded-full bg-gradient-to-r from-[#d21a73] via-[#c6206f] to-[#3b1d6e] px-7 py-3 text-base font-semibold text-white shadow-[0_10px_25px_rgba(207,31,109,0.35)]"
            href={`${localePrefix}/services/escort-service-berlin`}
          >
            {t("hero.browse")}
          </Link>
          <Link
            className="rounded-full border border-[var(--line)] bg-white px-7 py-3 text-base font-semibold text-black/80"
            href={`${localePrefix}/contact`}
          >
            {t("hero.contact")}
          </Link>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
          <Image
            src="/images/Frau in Body.jpg"
            alt="Escort in a softly lit room"
            className="rounded-[24px] object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/Dekolleté.jpg"
            alt="Escort posing in pink lighting"
            className="rounded-[22px] object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>
      </div>
    </section>
  );
}
