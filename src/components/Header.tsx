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
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const switchLocale = (next: (typeof locales)[number]) => {
    setLocale(next);
    const nextBase = next.startsWith("en")
      ? "/en"
      : next.startsWith("de")
        ? "/de"
        : "/de";
    const path = pathname ?? "/";
    const stripped = path.replace(/^\/(en|de)(?=\/|$)/, "");
    router.push(`${nextBase}${stripped || "/"}`);
  };

  return (
    <header
      className={`flex w-full flex-wrap items-center justify-between gap-3 sm:gap-4 ${
        isDark ? "text-white" : "text-black"
      }`}
    >
        <a
          href={`${localePrefix}/`}
          className="text-3xl font-semibold !text-[var(--accent)] sm:text-4xl"
          aria-label="EscortBerlin.de home"
        >
          <span style={{ fontFamily: "var(--font-script)" }}>
            EscortBerlin.de
          </span>
        </a>
      <button
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] md:hidden ${
          isDark
            ? "border-white/20 text-white/90"
            : "border-[var(--line)] text-black"
        }`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        Menu
        <span
          aria-hidden="true"
          className={`inline-block h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 ${
            isDark ? "border-white/80" : "border-black/70"
          }`}
        />
      </button>
      <nav
        className={`hidden flex-wrap items-center justify-center gap-8 text-base font-semibold uppercase tracking-wide md:flex ${
          isDark ? "text-white/90" : "text-black"
        }`}
        aria-label="Primary"
      >
        <a
          className={`${isDark ? "text-white/90" : "text-black"} cursor-pointer`}
          href={`${localePrefix}/`}
        >
          {t("nav.home")}
        </a>
        <div
          className={`group relative flex items-center gap-2 ${
            isDark ? "text-white/90" : "text-black"
          }`}
          ref={servicesRef}
        >
          <button
            className={`flex cursor-pointer items-center gap-2 ${
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
        <a className="cursor-pointer" href={`${localePrefix}/about`}>
          {t("nav.about")}
        </a>
        <a className="cursor-pointer" href={`${localePrefix}/contact`}>
          {t("nav.contact")}
        </a>
      </nav>
      <div
        className={`w-full rounded-2xl border p-5 text-base font-semibold uppercase tracking-wide md:hidden ${
          isDark
            ? "border-white/15 bg-black/80 text-white"
            : "border-[var(--line)] bg-white text-black"
        } ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-4">
          <a
            className="cursor-pointer"
            href={`${localePrefix}/`}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.home")}
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/services/escort-agentur-berlin`}
            onClick={() => setMobileOpen(false)}
          >
            Escort Agentur Berlin
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/services/escort-service-berlin`}
            onClick={() => setMobileOpen(false)}
          >
            Escort Service Berlin
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/services/high-class-escort-berlin`}
            onClick={() => setMobileOpen(false)}
          >
            High Class Escort Berlin
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/services/escort-berlin-mitte`}
            onClick={() => setMobileOpen(false)}
          >
            Escort Berlin Mitte
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/services/business-escort-berlin`}
            onClick={() => setMobileOpen(false)}
          >
            Business Escort Berlin
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/about`}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.about")}
          </a>
          <a
            className="cursor-pointer"
            href={`${localePrefix}/contact`}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="sr-only">{t("nav.language")}</span>
        {(
          [
            {
              key: "de",
              label: "Deutsch",
              flag: "🇩🇪",
              visible: true,
            },
            {
              key: "en",
              label: "English",
              flag: "🇬🇧",
              visible: false,
            },
          ] as const
        )
          .filter((item) => item.visible)
          .map((item) => (
            <button
              key={item.key}
              type="button"
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                isDark
                  ? "border-white/20 bg-black/60 text-white"
                  : "border-[var(--line)] bg-white text-black"
              } ${locale.startsWith(item.key) ? "shadow-[0_0_0_2px_var(--accent)]" : ""}`}
              aria-label={item.label}
              aria-pressed={locale.startsWith(item.key)}
              onClick={() => switchLocale(item.key)}
            >
              <span aria-hidden="true">{item.flag}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
      </div>
    </header>
  );
}
