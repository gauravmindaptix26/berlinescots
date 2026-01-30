"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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

export default function MittePage() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });
  const discretion = useCountUp(96, statsInView);
  const response = useCountUp(14, statsInView);
  const repeat = useCountUp(74, statsInView);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <Header tone="light" />
        <main className="space-y-20">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-[40px] border border-black/10 bg-white p-10 shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
          >
            <div className="absolute inset-0">
              <div className="absolute -left-40 top-12 h-80 w-80 rounded-full bg-[#f8d3df] blur-[130px] opacity-70" />
              <div className="absolute right-[-180px] -top-10 h-96 w-96 rounded-full bg-[#f8e2ef] blur-[160px] opacity-60" />
              <div className="absolute bottom-[-160px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fde7f2] blur-[140px] opacity-60" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                  <span className="h-2 w-2 rounded-full bg-[#f2a3bf]" />
                  Mitte Edition
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
                  Escort Berlin Mitte
                </h1>
                <p className="max-w-2xl text-lg text-black/70 sm:text-xl">
                  Discreet companionship centered in Mitte — refined presence,
                  city-ready coordination, and elegant arrivals curated for
                  premium evenings.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Mitte-first availability",
                    "Discreet arrivals",
                    "City-night elegance",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="group relative overflow-hidden rounded-full border border-[#f2a3bf]/50 bg-black px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                    type="button"
                  >
                    <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#f2a3bf] via-[#f4b6cf] to-[#f6cfe0] opacity-55" />
                    </span>
                    <span className="relative">Request Mitte Escort</span>
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
                <div className="flex flex-wrap gap-8 pt-4 text-sm font-semibold text-black/60">
                  <span>Confidential</span>
                  <span>24/7 Support</span>
                  <span>VIP Ready</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/images/Frau im schwarzen Kleid.jpg"
                    alt="Mitte escort portrait"
                    className="rounded-[22px] object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                  <Image
                    src="/images/Frau auf Sessel.jpg"
                    alt="Mitte detail"
                    className="rounded-[22px] object-cover"
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
            className="space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Premium Services
                </p>
                <h2 className="text-3xl font-semibold text-black">
                  Curated Mitte experiences
                </h2>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Modern, discreet, and refined
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Evening elegance",
                  copy: "Refined dinner companionship with polished presence.",
                  image: "/images/Frau im schwarzen Kleid.jpg",
                },
                {
                  title: "Cultural nights",
                  copy: "Gallery openings, concerts, and elegant city moments.",
                  image: "/images/Dame am Pool.jpg",
                },
                {
                  title: "Executive escort",
                  copy: "Professional events with discreet, confident styling.",
                  image: "/images/Frau im Auto .jpg",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[26px] border border-[#f2a3bf]/40 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition duration-500 group-hover:backdrop-blur-sm" />
                  </div>
                  <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease }}
                    className="relative flex h-full min-h-[260px] flex-col justify-end p-6"
                  >
                    <p className="text-xl font-semibold text-white">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{card.copy}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="rounded-[30px] border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-black">
                Advanced features for refined evenings
              </h2>
              <p className="mt-4 text-base text-black/65">
                We combine private coordination, availability checks, and
                preference-led matching to create smooth, premium Mitte
                experiences.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Private preference profiles",
                  "Venue coordination in Mitte",
                  "Secure communication flow",
                  "Verified companion standards",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-[#fff5fa] px-4 py-3 text-sm font-semibold text-black/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Elite metrics
              </p>
              <div ref={statsRef} className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { label: "Discretion rating", value: `${discretion}%` },
                  { label: "Repeat clients", value: `${repeat}%` },
                  { label: "Avg response", value: `${response} min` },
                  { label: "Mitte availability", value: "High" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/10 bg-[#fff5fa] px-4 py-5"
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
            className="space-y-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Elite profiles
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Mitte showcase
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Curated for premium occasions
              </span>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-2 no-scrollbar">
              {[
                "/images/Sexy Escort.png",
                "/images/Dame am Pool.jpg",
                "/images/Frau in Body.jpg",
              ].map((src) => (
                <motion.div
                  key={src}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="group relative min-w-[280px] flex-1 overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={src}
                      alt="Elite profile"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 70vw, 340px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-semibold text-white/90 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span>Private Selection</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#f2a3bf]">
                      Mitte
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
            className="space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  Mitte Atmosphere
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  A sculpted city-night aesthetic
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Curated visuals for premium evenings
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)]"
                >
                  <Image
                    src="/images/Frau in Body.jpg"
                    alt="Mitte portrait"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)] sm:mt-8"
                >
                  <Image
                    src="/images/Dame am Pool.jpg"
                    alt="Mitte ambiance"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
                >
                  <Image
                    src="/images/Frauen in Limousine.jpeg"
                    alt="Mitte arrival"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 620px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                    Limited arrival slots
                  </div>
                </motion.div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Curated arrivals",
                      copy: "Discreet coordination with premium timing.",
                    },
                    {
                      title: "Gallery-ready",
                      copy: "Elegant presence for refined venues.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/10 bg-[#fff5fa] px-5 py-4 text-sm text-black/70"
                    >
                      <p className="text-base font-semibold text-black">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-black/60">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[32px] border border-black/10 bg-gradient-to-r from-[#fff1f7] via-[#fde6f1] to-[#fff7fa] p-10 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold text-black">
                  Plan a refined Mitte evening
                </h3>
                <p className="text-base text-black/65">
                  Share your preferred date, time, and setting. Our concierge
                  team will curate a premium experience.
                </p>
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease }}
                className="group relative overflow-hidden rounded-full border border-[#f2a3bf]/50 bg-black px-8 py-3 text-sm font-semibold text-white"
                type="button"
              >
                <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f2a3bf] via-[#f4b6cf] to-[#f6cfe0] opacity-55" />
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
