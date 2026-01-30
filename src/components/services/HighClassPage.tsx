"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Header from "../Header";
import FooterSection from "../FooterSection";

const ease = [0.16, 1, 0.3, 1];

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }

    let startTime: number | null = null;
    let raf = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        raf = window.requestAnimationFrame(step);
      }
    };

    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [duration, start, target]);

  return value;
}

export default function HighClassPage() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });
  const discretion = useCountUp(98, statsInView);
  const repeat = useCountUp(86, statsInView);
  const response = useCountUp(12, statsInView);

  const detailRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: detailProgress } = useScroll({
    target: detailRef,
    offset: ["start end", "end start"],
  });
  const detailY = useTransform(detailProgress, [0, 1], ["-6%", "6%"]);

  const [activeSlide, setActiveSlide] = useState(0);
  const demandSlides = [
    {
      src: "/images/Frauen in Limousine.jpeg",
      title: "Night arrival",
      note: "Signature arrival with discreet coordination.",
    },
    {
      src: "/images/Dame am Pool.jpg",
      title: "Private retreat",
      note: "Elegant evenings with premium privacy.",
    },
    {
      src: "/images/Frau im Auto .jpg",
      title: "City drive",
      note: "Berlin nights with refined styling.",
    },
    {
      src: "/images/Frau im schwarzen Kleid.jpg",
      title: "Black-tie moments",
      note: "Formal events with polished presence.",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % demandSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [demandSlides.length]);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <Header tone="light" />
        <main className="space-y-20">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#f2e6d8] blur-[120px] opacity-70" />
              <div className="absolute right-[-160px] -top-10 h-80 w-80 rounded-full bg-[#f5d7a1] blur-[150px] opacity-35" />
              <div className="absolute bottom-[-140px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f3d0d4] blur-[120px] opacity-45" />
            </div>
            <div className="relative grid gap-10 py-6 lg:grid-cols-[0.22fr_0.98fr_0.8fr] lg:items-center">
              <div className="hidden lg:flex">
                <div className="flex h-full flex-col items-center gap-6 text-xs uppercase tracking-[0.45em] text-black/40">
                  <span className="h-10 w-[1px] bg-black/10" />
                  <span className="rotate-180 [writing-mode:vertical-rl]">
                    Exclusive Berlin
                  </span>
                  <span className="h-10 w-[1px] bg-black/10" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                  <span className="h-2 w-2 rounded-full bg-[#c59c52]" />
                  High Class Collection
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
                  High Class Escort Berlin
                </h1>
                <p className="max-w-2xl text-lg text-black/70 sm:text-xl">
                  A discreet, high-end escort experience curated for refined
                  clientele in Berlin. Elegant presence, premium coordination,
                  and an exclusive atmosphere.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-black/55">
                  {[
                    "Gold-standard etiquette",
                    "Discreet luxury",
                    "Elite city styling",
                  ].map((tag) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c59c52]" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="group relative overflow-hidden rounded-full border border-[#c59c52]/50 bg-black px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                    type="button"
                  >
                    <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#d6b06b] via-[#c0764a] to-[#7a1f2c] opacity-45" />
                    </span>
                    <span className="relative">Request Availability</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-black/70"
                    type="button"
                  >
                    Speak to Concierge
                  </motion.button>
                </div>
                <div className="flex flex-wrap gap-8 pt-4 text-sm font-semibold text-black/55">
                  <span>Confidential</span>
                  <span>24/7 Support</span>
                  <span>VIP Ready</span>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-white/70 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/Frau im schwarzen Kleid.jpg"
                    alt="Luxury escort portrait"
                    className="rounded-[22px] object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-white/70 p-3 shadow-[0_26px_70px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/images/Frau in Body.jpg"
                    alt="High class detail"
                    className="rounded-[26px] object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-8 border-t border-black/10 pt-12"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  High Demand
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Most requested experiences
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Updated weekly by concierge
              </span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-base text-black/70">
                  These are the most requested experiences among premium
                  clientele in Berlin. Each arrangement is tailored for privacy
                  and refined presence, coordinated by our concierge team.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "City-night arrivals",
                    "Private dinner companion",
                    "Luxury hotel evenings",
                    "Executive event escort",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-black/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#c59c52]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {demandSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                        activeSlide === index
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-black/60 hover:border-black/30"
                      }`}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
                <motion.div
                  className="flex"
                  animate={{ x: `-${activeSlide * 100}%` }}
                  transition={{ duration: 0.8, ease }}
                >
                  {demandSlides.map((slide) => (
                    <div key={slide.title} className="min-w-full p-3 sm:p-4">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          className="object-cover"
                          fill
                          sizes="(max-width: 1024px) 100vw, 620px"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm font-semibold text-black/70">
                        <span>{slide.title}</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#c59c52]">
                          Demand
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-black/60">{slide.note}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="rounded-[28px] bg-white/70 p-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-black">
                Advanced features for a refined experience
              </h2>
              <p className="mt-4 text-base text-black/65">
                We align discreet communication, real-time availability, and
                preference-led matching to provide an elegant, premium escort
                experience in Berlin.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Private preference profiles",
                  "High-end venue coordination",
                  "Secure communication flow",
                  "Verified companion standards",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] bg-white/70 p-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Elite metrics
              </p>
              <div ref={statsRef} className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { label: "Discretion rating", value: `${discretion}%` },
                  { label: "Repeat clients", value: `${repeat}%` },
                  { label: "Avg response", value: `${response} min` },
                  { label: "VIP availability", value: "High" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-5"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-black">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Elite profiles
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Showcase of refined companionship
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Curated for premium occasions
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/images/Sexy Escort.png",
                  label: "Private Selection",
                },
                {
                  src: "/images/Frau auf Sessel.jpg",
                  label: "City Elegance",
                },
                {
                  src: "/images/Dame am Pool.jpg",
                  label: "After-hours",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={card.src}
                      alt="Elite profile"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    <span>{card.label}</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#c59c52]">
                      VIP
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-8 border-t border-black/10 pt-12"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Refined Details
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Sensual, understated, and composed
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Exclusivity in every detail
              </span>
            </div>
            <div
              ref={detailRef}
              className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div className="relative">
                <motion.div
                  style={{ y: detailY }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
                >
                  <Image
                    src="/images/Frau in Body.jpg"
                    alt="Refined detail"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, ease, delay: 0.08 }}
                  className="absolute -right-10 top-12 hidden w-[46%] overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] lg:block"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/Frau im schwarzen Kleid.jpg"
                      alt="Elegant silhouette"
                      className="object-cover transition duration-500 hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease, delay: 0.12 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
                >
                  <Image
                    src="/images/Dame am Pool.jpg"
                    alt="Soft atmosphere"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </motion.div>
                <p className="text-base text-black/65">
                  Soft lighting, refined presence, and a calm, confident rhythm
                  create the emotional depth that defines our high-class
                  experience.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6 border-t border-black/10 pt-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Signature Promise
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Discreet, elegant, and tailored to you
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Trusted by premium clientele
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Confidentiality first",
                  copy: "Your privacy is protected with discreet coordination and secure communication.",
                },
                {
                  title: "Curated excellence",
                  copy: "Every companion is carefully selected for presentation, etiquette, and presence.",
                },
                {
                  title: "Seamless experience",
                  copy: "From first inquiry to final farewell, our service feels effortless.",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="h-[2px] w-10 bg-[#c59c52]" />
                  <p className="text-lg font-semibold text-black">{item.title}</p>
                  <p className="text-sm text-black/60">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="grid gap-8 lg:grid-cols-3"
          >
            {[
              {
                title: "Premium Services",
                copy: "Discreet meetings, elegant dinners, and refined city evenings.",
              },
              {
                title: "Elite Presentation",
                copy: "Impeccable styling, poised presence, and refined etiquette.",
              },
              {
                title: "Private Concierge",
                copy: "A confidential, high-touch booking journey from start to finish.",
              },
            ].map((card) => (
              <div key={card.title} style={{ perspective: 1200 }}>
                <motion.div
                  whileHover={{ rotateX: -6, rotateY: 6, y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="h-full rounded-[24px] bg-transparent p-2"
                >
                  <div className="mb-5 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#d6b06b] via-[#c0764a] to-[#7a1f2c]" />
                  <p className="text-xl font-semibold text-black">{card.title}</p>
                  <p className="mt-3 text-sm text-black/65">{card.copy}</p>
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-black/10 via-black/25 to-transparent" />
                </motion.div>
              </div>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[32px] bg-gradient-to-r from-[#fff7ee] via-[#f8f1e6] to-[#f6e5e7] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold text-black">
                  Ready for a discreet, premium evening?
                </h3>
                <p className="text-base text-black/65">
                  Share your preferences and we will curate an exclusive
                  experience in Berlin.
                </p>
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease }}
                className="group relative overflow-hidden rounded-full border border-[#c59c52]/50 bg-black px-8 py-3 text-sm font-semibold text-white"
                type="button"
              >
                <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d6b06b] via-[#c0764a] to-[#7a1f2c] opacity-45" />
                </span>
                <span className="relative">Request a VIP Session</span>
              </motion.button>
            </div>
          </motion.section>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
