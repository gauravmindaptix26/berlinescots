"use client";

import { locales } from "../i18n/translations";
import { useTranslations } from "../i18n/LanguageProvider";

export default function Header() {
  const { locale, setLocale, t } = useTranslations();

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4">
      <div className="text-3xl font-semibold text-[var(--accent)]">
        <span style={{ fontFamily: "var(--font-script)" }}>
          Berlinescots.de
        </span>
      </div>
      <nav
        className="flex flex-wrap items-center justify-center gap-8 text-base font-semibold uppercase tracking-wide text-black"
        aria-label="Primary"
      >
        <a className="text-black" href="#">
          {t("nav.home")}
        </a>
        <div className="flex items-center gap-2 text-black">
          <span>{t("nav.services")}</span>
          <span
            aria-hidden="true"
            className="mt-0.5 inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-black/70"
          />
        </div>
        <a href="#">{t("nav.about")}</a>
        <a href="#">{t("nav.contact")}</a>
      </nav>
      <div className="flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="language">
          {t("nav.language")}
        </label>
        <select
          id="language"
          className="rounded-full border border-[var(--line)] bg-white px-6 py-2.5 text-base font-semibold text-black"
          value={locale}
          onChange={(event) => setLocale(event.target.value as (typeof locales)[number])}
        >
          <option value="en">English</option>
          <option value="en-US">English (US)</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </header>
  );
}
