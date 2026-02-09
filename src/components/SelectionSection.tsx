"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "../i18n/LanguageProvider";

const cards = [
  {
    id: "card-1",
    titleKey: "selection.card1",
    statusKey: "selection.available",
    price: "EUR 150",
    src: "/images/Dame am Pool.jpg",
  },
  {
    id: "card-2",
    titleKey: "selection.card2",
    statusKey: "selection.available",
    price: "EUR 180",
    src: "/images/Frau in Dessous mit Schleife.jpeg",
  },
  {
    id: "card-3",
    titleKey: "selection.card3",
    statusKey: "selection.available",
    price: "EUR 160",
    src: "/images/Frau in Dessous mit Mann.jpg",
  },
  {
    id: "card-4",
    titleKey: "selection.card4",
    statusKey: "selection.available",
    price: "EUR 170",
    src: "/images/Sexy Escort.png",
  },
];

export default function SelectionSection() {
  const { t } = useTranslations();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stride, setStride] = useState(0);
  const pathname = usePathname();
  const localePrefix = useMemo(() => {
    if (pathname?.startsWith("/en")) return "/en";
    if (pathname?.startsWith("/de")) return "/de";
    return "/de";
  }, [pathname]);

  const updateStride = useCallback(() => {
    const container = scrollerRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLElement>("[data-card='true']");
    if (!firstCard) return;
    const gapValue =
      Number.parseFloat(getComputedStyle(container).columnGap || "0") || 0;
    setStride(firstCard.getBoundingClientRect().width + gapValue);
  }, []);

  useEffect(() => {
    updateStride();
    window.addEventListener("resize", updateStride);
    return () => window.removeEventListener("resize", updateStride);
  }, [updateStride]);

  const handleScroll = () => {
    if (!scrollerRef.current || !stride) return;
    const nextIndex = Math.round(scrollerRef.current.scrollLeft / stride);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollerRef.current;
    if (!container || !stride) return;
    const boundedIndex = Math.max(0, Math.min(index, cards.length - 1));
    container.scrollTo({
      left: stride * boundedIndex,
      behavior: "smooth",
    });
    setActiveIndex(boundedIndex);
  };

  return (
    <section className="perf-section w-full bg-black py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-base font-bold uppercase tracking-[0.2em] text-white">
              {t("selection.label")}
            </span>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {t("selection.titleLine1")}
              <br />
              {t("selection.titleLine2")}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white sm:text-lg">
              {t("selection.copy")}
            </p>
          </div>
          <Link
            className="rounded-full border border-white/30 px-6 py-2 text-sm font-semibold text-white"
            href={`${localePrefix}/services/escort-service-berlin`}
          >
            {t("selection.viewAll")}
          </Link>
        </div>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-2"
        >
          {cards.map((card) => (
            <article
              key={card.id}
              data-card="true"
              className="min-w-[260px] shrink-0 space-y-4 rounded-[24px] bg-black sm:min-w-[300px] lg:min-w-[320px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
                <Image
                  src={card.src}
                  alt={t(card.titleKey)}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 80vw, 320px"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {t(card.titleKey)}
                </h3>
                <p className="text-xs font-semibold text-white/70">
                  {t(card.statusKey)}
                </p>
                <p className="text-xl font-semibold text-white">{card.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {cards.map((card, index) => (
              <button
                key={card.id}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-white"
              type="button"
              aria-label="Previous"
              onClick={() => scrollToIndex(activeIndex - 1)}
            >
              &lt;
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-white"
              type="button"
              aria-label="Next"
              onClick={() => scrollToIndex(activeIndex + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
