"use client";

import { useTranslations } from "../i18n/LanguageProvider";

const faqs = [
  {
    questionKey: "faq.q1",
    answerKey: "faq.a1",
  },
  {
    questionKey: "faq.q2",
    answerKey: "faq.a2",
  },
  {
    questionKey: "faq.q3",
    answerKey: "faq.a3",
  },
  {
    questionKey: "faq.q4",
    answerKey: "faq.a4",
  },
  {
    questionKey: "faq.q5",
    answerKey: "faq.a5",
  },
];

export default function FaqSection() {
  const { t } = useTranslations();

  return (
    <section className="perf-section bg-[var(--shell)] py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-6 text-center sm:px-10 lg:px-16">
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold text-black sm:text-5xl">
            {t("faq.title")}
          </h2>
          <p className="text-base text-black sm:text-lg">
            {t("faq.subtitle")}
          </p>
        </div>
        <div className="w-full max-w-3xl space-y-10 text-left">
          {faqs.map((item) => (
            <div key={item.questionKey} className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t(item.questionKey)}
              </h3>
              <p className="text-base leading-relaxed text-black sm:text-lg">
                {t(item.answerKey)}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-8">
          <h3 className="text-3xl font-semibold text-black sm:text-4xl">
            {t("faq.helpTitle")}
          </h3>
          <p className="text-base text-black sm:text-lg">
            {t("faq.helpCopy")}
          </p>
          <button
            className="rounded-full border border-[var(--line)] bg-white px-6 py-2.5 text-sm font-semibold text-black/80"
            type="button"
          >
            {t("hero.contact")}
          </button>
        </div>
      </div>
    </section>
  );
}
