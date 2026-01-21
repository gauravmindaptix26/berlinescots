"use client";

import { useTranslations } from "../i18n/LanguageProvider";

export default function FooterSection() {
  const { t } = useTranslations();

  const footerColumns = [
    {
      title: t("footer.col1"),
      items: [
        t("footer.col1.item1"),
        t("footer.col1.item2"),
        t("footer.col1.item3"),
        t("footer.col1.item4"),
        t("footer.col1.item5"),
      ],
    },
    {
      title: t("footer.col2"),
      items: [
        t("footer.col2.item1"),
        t("footer.col2.item2"),
        t("footer.col2.item3"),
        t("footer.col2.item4"),
        t("footer.col2.item5"),
      ],
    },
    {
      title: t("footer.col3"),
      horizontal: true,
      items: [
        t("footer.col3.item1"),
        t("footer.col3.item2"),
        t("footer.col3.item3"),
        t("footer.col3.item4"),
        t("footer.col3.item5"),
      ],
    },
    {
      title: t("footer.col4"),
      items: [
        t("footer.col4.item1"),
        t("footer.col4.item2"),
        t("footer.col4.item3"),
        t("footer.col4.item4"),
        t("footer.col4.item5"),
      ],
    },
    {
      title: t("footer.col5"),
      items: [
        t("footer.col5.item1"),
        t("footer.col5.item2"),
        t("footer.col5.item3"),
        t("footer.col5.item4"),
        t("footer.col5.item5"),
      ],
    },
  ];

  const legalLinks = [
    t("footer.legal1"),
    t("footer.legal2"),
    t("footer.legal3"),
    t("footer.legal4"),
  ];

  return (
    <footer className="perf-section bg-black py-16 text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xl font-semibold text-white">
              {t("footer.stayTitle")}
            </p>
            <p className="text-base text-white">{t("footer.stayCopy")}</p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
            <input
              className="h-12 flex-1 rounded-full border border-white/20 bg-black px-4 text-sm text-white placeholder:text-white/50 sm:w-80"
              placeholder={t("footer.email")}
              type="email"
              aria-label="Email address"
            />
            <button
              className="h-12 rounded-full border border-white/20 bg-black px-6 text-sm font-semibold text-white"
              type="button"
            >
              {t("footer.subscribe")}
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-sm text-white">{t("footer.privacyNote")}</p>
        </div>
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.6fr_3.4fr]">
          <div className="text-2xl font-semibold text-[var(--accent)]">
            <span style={{ fontFamily: "var(--font-script)" }}>
              Berlinescots.de
            </span>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4 text-sm">
                <p className="text-lg font-semibold text-white">
                  {column.title}
                </p>
                <ul
                  className={
                    column.horizontal
                      ? "flex flex-wrap gap-x-6 gap-y-2 text-base text-white"
                      : "space-y-3 text-base text-white"
                  }
                >
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white">
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="flex items-center gap-5 text-white">
            <span className="text-base font-semibold">FB</span>
            <span className="text-base font-semibold">IG</span>
            <span className="text-base font-semibold">X</span>
            <span className="text-base font-semibold">IN</span>
            <span className="text-base font-semibold">YT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
