"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "../i18n/LanguageProvider";

const items = [
  {
    id: "excellence-1",
    titleKey: "excellence.card1.title",
    copyKey: "excellence.card1.copy",
    src: "/images/Frauen in Limousine.jpeg",
    alt: "Handpicked companion",
  },
  {
    id: "excellence-2",
    titleKey: "excellence.card2.title",
    copyKey: "excellence.card2.copy",
    src: "/images/Junges Paar.jpeg",
    alt: "Elegant companion in a lounge",
  },
  {
    id: "excellence-3",
    titleKey: "excellence.card3.title",
    copyKey: "excellence.card3.copy",
    src: "/images/Frau im Auto .jpg",
    alt: "Companion on a bed",
  },
];

export default function ExcellenceSection() {
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
    const boundedIndex = Math.max(0, Math.min(index, items.length - 1));
    container.scrollTo({
      left: stride * boundedIndex,
      behavior: "smooth",
    });
    setActiveIndex(boundedIndex);
  };

  return (
    <section className="perf-section bg-[var(--shell)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-6 text-center sm:px-10 lg:px-16">
        <div className="space-y-4">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-black">
            {t("excellence.label")}
          </span>
          <h2 className="text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
            {t("excellence.title")}
          </h2>
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-black sm:text-lg">
            {t("excellence.copy")}
          </p>
        </div>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="no-scrollbar flex w-full gap-8 overflow-x-auto scroll-smooth pb-6 pt-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
        >
          {items.map((item, index) => (
            <article
              key={item.id}
              data-card="true"
              className="fade-in-up flex min-w-[260px] flex-col gap-5 text-center sm:min-w-[300px] lg:min-w-0"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-black">
                  {t(item.titleKey)}
                </h3>
                <p className="text-base font-medium leading-relaxed text-black sm:text-lg">
                  {t(item.copyKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-6 lg:hidden">
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-black" : "bg-black/30"
                }`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-xl text-black"
              type="button"
              aria-label="Previous"
              onClick={() => scrollToIndex(activeIndex - 1)}
            >
              &lt;
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-xl text-black"
              type="button"
              aria-label="Next"
              onClick={() => scrollToIndex(activeIndex + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-base font-semibold">
          <Link
            className="rounded-full border border-black/15 bg-white px-7 py-3 text-black shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            href={`${localePrefix}/services/escort-service-berlin`}
          >
            {t("excellence.explore")}
          </Link>
          <Link
            className="flex items-center gap-2 text-black/80"
            href={`${localePrefix}/about`}
          >
            {t("excellence.learn")}
            <span aria-hidden="true" className="text-lg">
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
