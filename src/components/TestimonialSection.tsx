"use client";

import Image from "next/image";
import { useTranslations } from "../i18n/LanguageProvider";

export default function TestimonialSection() {
  const { t } = useTranslations();

  return (
    <section className="perf-section bg-black py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 rounded-[28px] border border-white/10 bg-black/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:p-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src="/images/Reiterstellung.webp"
              alt="Client experience in a premium lounge"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-1 text-lg text-white">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <blockquote className="text-2xl font-semibold leading-relaxed sm:text-3xl">
              “{t("testimonial.quote")}”
            </blockquote>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div>
                <p className="font-semibold text-white">
                  {t("testimonial.name")}
                </p>
                <p>{t("testimonial.role")}</p>
              </div>
              <span className="hidden h-6 w-px bg-white/20 sm:block" />
              <div className="text-white/60">Webflow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
