"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../Header";
import FooterSection from "../FooterSection";

const ease = [0.16, 1, 0.3, 1] as const;

export default function EscortServicePage() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  useEffect(() => {
    if (!galleryRef.current) return;
    const update = () => {
      const el = galleryRef.current;
      if (!el) return;
      setDragWidth(Math.max(el.scrollWidth - el.offsetWidth, 0));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <Header tone="light" />
        <main className="space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-[40px] border border-black/10 bg-[#111014] px-10 py-14 text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0">
              <div className="absolute -left-40 top-12 h-80 w-80 rounded-full bg-[#2a1b12] blur-[140px] opacity-60" />
              <div className="absolute right-[-160px] -top-10 h-96 w-96 rounded-full bg-[#f2a3bf] blur-[160px] opacity-20" />
              <div className="absolute bottom-[-160px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#4a0e1b] blur-[140px] opacity-30" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#f2a3bf]" />
                  Escort Service Berlin
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  An elevated escort experience for modern Berlin
                </h1>
                <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
                  Discreet, refined, and cinematic — crafted for private evenings,
                  social engagements, and premium city nights.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-white/60">
                  {["Verified companions", "Discreet arrivals", "City-ready elegance"].map(
                    (tag) => (
                      <span key={tag} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f2a3bf]" />
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="group relative overflow-hidden rounded-full border border-[#f2a3bf]/50 bg-black px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
                    type="button"
                  >
                    <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#f2a3bf] via-[#f4b6cf] to-[#f6cfe0] opacity-55" />
                    </span>
                    <span className="relative">Request Availability</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3, ease }}
                    className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white/80"
                    type="button"
                  >
                    Speak to Concierge
                  </motion.button>
                </div>
              </div>
              <div className="relative h-[360px] sm:h-[420px]">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="absolute left-0 top-10 w-[56%] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/Frau im schwarzen Kleid.jpg"
                      alt="Escort portrait"
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease, delay: 0.05 }}
                  className="absolute right-0 top-0 w-[52%] overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/Frau auf Sessel.jpg"
                      alt="Escort style"
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.1 }}
                  className="absolute bottom-0 right-16 w-[48%] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_26px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/Dame am Pool.jpg"
                      alt="Evening ambiance"
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </motion.div>
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
                  Premium Experience
                </p>
                <h2 className="text-3xl font-semibold text-black">
                  Luxury service grid
                </h2>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Elegant, discreet, elite
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Private dinner", image: "/images/Frau bringt Mann Frühstück.jpg" },
                { title: "Event companion", image: "/images/Frauen in Limousine.jpeg" },
                { title: "Hotel lounge", image: "/images/Frau im Auto .jpg" },
                { title: "City night", image: "/images/Frau im schwarzen Kleid.jpg" },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[24px] border border-[#f2a3bf]/35 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition duration-500 group-hover:backdrop-blur-sm" />
                  </div>
                  <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease }}
                    className="relative flex min-h-[220px] items-end p-5"
                  >
                    <p className="text-base font-semibold text-white">
                      {card.title}
                    </p>
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
            className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          >
            <div className="grid gap-4">
              {[
                "/images/Frau auf Sessel.jpg",
                "/images/Frau im Auto .jpg",
                "/images/Frau im schwarzen Kleid.jpg",
              ].map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, ease, delay: index * 0.1 }}
                  className="relative aspect-[5/3] overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src={src}
                    alt="Editorial story"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Editorial Story
              </p>
              <h2 className="text-3xl font-semibold text-black">
                Discretion, confidence, and depth
              </h2>
              <p className="text-base text-black/65">
                A service crafted for those who value privacy and elevated
                companionship. Our concierge ensures seamless coordination with
                refined etiquette.
              </p>
              <div className="grid gap-4">
                {[
                  "Preference-led matching",
                  "Professional etiquette",
                  "Concierge-grade discretion",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-black/70"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#f2a3bf]" />
                    {item}
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
                  Immersive Gallery
                </p>
                <h2 className="text-3xl font-semibold text-black">
                  Interactive showcase
                </h2>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Drag to explore
              </span>
            </div>
            <div ref={galleryRef} className="overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{ left: -dragWidth, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="flex gap-6"
              >
                {[
                  "/images/Sexy Escort.png",
                  "/images/Dame am Pool.jpg",
                  "/images/Frau in Body.jpg",
                  "/images/Frauen in Limousine.jpeg",
                ].map((src) => (
                  <motion.div
                    key={src}
                    className="relative min-w-[280px] flex-1 overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={src}
                        alt="Gallery slide"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 70vw, 340px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "/images/Frau in Body.jpg",
                "/images/Dame am Pool.jpg",
                "/images/Frau im Auto .jpg",
              ].map((src) => (
                <motion.div
                  key={src}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)]"
                >
                  <Image
                    src={src}
                    alt="Detail"
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                Refined Details
              </p>
              <h2 className="text-3xl font-semibold text-black">
                Sensual yet sophisticated
              </h2>
              <p className="text-base text-black/65">
                Subtle gestures, refined styling, and graceful attention to
                detail create an experience that feels elegant, emotional, and
                exclusive.
              </p>
            </div>
          </motion.section>

          <motion.section
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-[36px] border border-black/10"
          >
            <motion.div style={{ y: ctaY }} className="absolute inset-0">
              <Image
                src="/images/Frauen in Limousine.jpeg"
                alt="Premium arrival"
                className="object-cover"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
            <div className="relative flex flex-col gap-6 px-10 py-16 text-white sm:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Final Invitation
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
                Elevate your evening with discreet luxury
              </h2>
              <p className="max-w-2xl text-base text-white/75">
                Our concierge team curates premium experiences with refined
                elegance and absolute discretion. Reserve your service now.
              </p>
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease }}
                className="group relative w-fit overflow-hidden rounded-full border border-[#f2a3bf]/60 bg-black/70 px-8 py-3 text-sm font-semibold text-white"
                type="button"
              >
                <span className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f2a3bf] via-[#f4b6cf] to-[#f6cfe0] opacity-60" />
                </span>
                <span className="relative">Secure Your Booking</span>
              </motion.button>
            </div>
          </motion.section>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
