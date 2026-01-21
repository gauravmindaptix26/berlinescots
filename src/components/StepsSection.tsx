"use client";

import Image from "next/image";
import { useTranslations } from "../i18n/LanguageProvider";

const steps = [
  {
    id: "choose-city",
    titleKey: "steps.card1.title",
    copyKey: "steps.card1.copy",
  },
  {
    id: "book-ease",
    titleKey: "steps.card2.title",
    copyKey: "steps.card2.copy",
  },
  {
    id: "short-heading-1",
    titleKey: "steps.card3.title",
    copyKey: "steps.card3.copy",
  },
  {
    id: "short-heading-2",
    titleKey: "steps.card4.title",
    copyKey: "steps.card4.copy",
  },
];

export default function StepsSection() {
  const { t } = useTranslations();

  return (
    <section className="perf-section bg-black py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] lg:grid-cols-[1.05fr_1fr] lg:p-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4 text-white">
              <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
                {t("steps.topLeft")}
              </p>
            </div>
            <div className="space-y-4 text-white">
              <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
                {t("steps.topRight")}
              </p>
            </div>
            {steps.map((step) => (
              <div key={step.id} className="space-y-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/15">
                  <span className="block h-4 w-4 rounded-sm border-2 border-white" />
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  {t(step.titleKey)}
                </h3>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
                  {t(step.copyKey)}
                </p>
              </div>
            ))}
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px]">
            <Image
              src="/images/4.png"
              alt="Companion posing under colored lighting"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
