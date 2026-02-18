"use client";

import { useTranslations } from "../i18n/LanguageProvider";

export default function FooterSection() {
  const { locale } = useTranslations();
  const localePrefix = locale.startsWith("en") ? "/en" : "/de";

  return (
    <footer className="perf-section relative overflow-hidden border-t border-[var(--accent)]/30 bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-120px] h-[300px] w-[300px] rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute right-[-140px] top-[-90px] h-[280px] w-[280px] rounded-full bg-[var(--accent-soft)]/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-7 sm:px-10 lg:px-12">
        <div className="grid gap-7 border-b border-white/10 pb-6 md:grid-cols-[1.25fr_52px_0.8fr_0.8fr]">
          <div>
            <a
              href={`${localePrefix}/`}
              className="inline-block text-3xl font-semibold !text-[var(--accent)] sm:text-4xl"
              aria-label="EscortBerlin.de home"
            >
              <span style={{ fontFamily: "var(--font-script)" }}>
                EscortBerlin.de
              </span>
            </a>
            <p className="mt-3 max-w-[420px] text-sm text-white/70">
              Discreet premium companionship in Berlin
            </p>
          </div>

          <div className="hidden items-start justify-center md:flex">
            <div className="relative flex h-full min-h-[150px] flex-col items-center">
              <span className="h-[58px] w-px bg-gradient-to-b from-transparent via-[var(--accent)]/70 to-transparent" />
              <span className="my-3 h-2.5 w-2.5 rotate-45 border border-[var(--accent-soft)]/80 bg-transparent" />
              <span className="h-[58px] w-px bg-gradient-to-b from-transparent via-[var(--accent)]/70 to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent-soft)]">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/`}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/services/escort-agentur-berlin`}
                >
                  Escort Agency
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/about`}
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/contact`}
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent-soft)]">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/privacy`}
                >
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/terms`}
                >
                  Terms &amp; Conditions
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-block w-fit text-[16px] uppercase tracking-[0.12em] text-white/85 transition-colors duration-300 hover:text-[var(--accent-soft)] sm:text-[17px]"
                  href={`${localePrefix}/cookies`}
                >
                  Cookie Settings
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-5 flex flex-col gap-3 text-sm text-white/65 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] tracking-[0.2em] text-[var(--accent-soft)]">© 2025 ESCORTBERLIN.DE</p>
            <p className="mt-1 text-[16px] text-white/60">
              Discreet premium companionship in Berlin
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-soft)]/80">
            <span>Privacy</span>
            <span className="text-[var(--accent)]">•</span>
            <span>Terms</span>
            <span className="text-[var(--accent)]">•</span>
            <span>Cookies</span>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-9 right-0 hidden select-none text-[210px] font-semibold uppercase leading-none text-[var(--accent)]/12 md:block"
            style={{ fontFamily: "var(--font-script)" }}
          >
            EB
          </div>
        </div>
      </div>
    </footer>
  );
}
