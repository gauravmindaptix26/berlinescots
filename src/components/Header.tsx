"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "../i18n/translations";
import { useTranslations } from "../i18n/LanguageProvider";

export default function Header({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const { locale, setLocale, t } = useTranslations();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();  
  const isDark = tone === "dark";
  const dropdownItemClasses = `block rounded-lg px-3 py-2 transition ${
    isDark ? "hover:bg-white/10 hover:underline" : "hover:bg-black/5 hover:underline"
  }`;
  const localePrefix = useMemo(() => {
    if (pathname?.startsWith("/en")) return "/en";
    if (pathname?.startsWith("/de")) return "/de";
    return "/de";
  }, [pathname]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`flex w-full flex-wrap items-center justify-between gap-4 ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div className="text-4xl font-semibold text-[var(--accent)]">
        <span style={{ fontFamily: "var(--font-script)" }}>
          EscortBerlin.de
        </span>
      </div>
      <nav
        className={`flex flex-wrap items-center justify-center gap-8 text-base font-semibold uppercase tracking-wide ${
          isDark ? "text-white/90" : "text-black"
        }`}
        aria-label="Primary"
      >
        <a className={isDark ? "text-white/90" : "text-black"} href={`${localePrefix}/`}>
          {t("nav.home")}
        </a>
        <div
          className={`group relative flex items-center gap-2 ${
            isDark ? "text-white/90" : "text-black"
          }`}
          ref={servicesRef}
        >
          <button
            className={`flex items-center gap-2 ${
              isDark ? "text-white/90" : "text-black"
            }`}
            type="button"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((open) => !open)}
          >
            <span
              className={`border-b-2 border-transparent transition ${
                isDark ? "group-hover:border-white" : "group-hover:border-black"
              }`}
            >
              {t("nav.services")}
            </span>
            <span
              aria-hidden="true"
              className={`mt-0.5 inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 ${
                isDark ? "border-white/70" : "border-black/70"
              }`}
            />
          </button>
          <div
            className={`absolute left-0 top-full z-20 mt-3 w-64 rounded-xl border p-3 text-sm font-semibold normal-case shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition duration-150 ${
              isDark
                ? "border-white/10 bg-[#151217] text-white"
                : "border-[var(--line)] bg-white text-black"
            } ${
              servicesOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <a
              className={dropdownItemClasses}
              href={`${localePrefix}/services/escort-agentur-berlin`}
              onClick={() => setServicesOpen(false)}
            >
              Escort Agentur Berlin
            </a>
            <a
              className={dropdownItemClasses}
              href={`${localePrefix}/services/escort-service-berlin`}
              onClick={() => setServicesOpen(false)}
            >
              Escort Service Berlin
            </a>
            <a
              className={dropdownItemClasses}
              href={`${localePrefix}/services/high-class-escort-berlin`}
              onClick={() => setServicesOpen(false)}
            >
              High Class Escort Berlin
            </a>
            <a
              className={dropdownItemClasses}
              href={`${localePrefix}/services/escort-berlin-mitte`}
              onClick={() => setServicesOpen(false)}
            >
              Escort Berlin Mitte
            </a>
            <a
              className={dropdownItemClasses}
              href={`${localePrefix}/services/business-escort-berlin`}
              onClick={() => setServicesOpen(false)}
            >
              Business Escort Berlin
            </a>
          </div>
        </div>
        <a href={`${localePrefix}/about`}>{t("nav.about")}</a>
        <a href={`${localePrefix}/contact`}>{t("nav.contact")}</a>
      </nav>
      <div className="flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="language">
          {t("nav.language")}
        </label>
        <select
          id="language"
          className={`rounded-full border px-6 py-2.5 text-base font-semibold ${
            isDark
              ? "border-white/20 bg-black/60 text-white"
              : "border-[var(--line)] bg-white text-black"
          }`}
          value={locale}
          onChange={(event) => {
            const next = event.target.value as (typeof locales)[number];
            setLocale(next);
            const nextBase =
              next.startsWith("en") ? "/en" : next.startsWith("de") ? "/de" : "/de";
            const path = pathname ?? "/";
            const stripped = path.replace(/^\/(en|de)(?=\/|$)/, "");
            router.push(`${nextBase}${stripped || "/"}`);
          }}
        >
          <option value="de">German</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
}
