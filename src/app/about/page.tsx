"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";

const aboutImages = {
  hero: "/images/Frauen in Limousine.jpeg",
  philosophy: "/images/Frau auf Sessel.jpg",
  presence: "/images/Frauen in Limousine.jpeg",
  atelier: "/images/Dame am Pool.jpg",
  lounge: "/images/Frau in Body.jpg",
  skyline: "/images/Frau im Auto .jpg",
  suite: "/images/Junges Paar.jpeg",
};

const brandValues = [
  {
    title: "Discreet Excellence",
    description: "Private by design, refined in every detail.",
  },
  {
    title: "Curated Journeys",
    description: "Tailored experiences aligned with your rhythm.",
  },
  {
    title: "European Poise",
    description: "Elegant presence with impeccable etiquette.",
  },
  {
    title: "Trust-led Care",
    description: "Professional, calm, and confidently managed.",
  },
];

const auraGallery = [
  "/images/Frau in Dessous mit Schleife.jpeg",
  "/images/Dame am Pool.jpg",
  "/images/Frauen in Limousine.jpeg",
  "/images/Frau im Auto .jpg",
];

const germanySlides = [
  "/images/Frauen in Limousine.jpeg",
  "/images/Frau im Auto .jpg",
  "/images/Dame am Pool.jpg",
  "/images/Frau im schwarzen Kleid.jpg",
];

export default function AboutPage() {
  const [germanySlide, setGermanySlide] = useState(0);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGermanySlide((prev) => (prev + 1) % germanySlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff6fb] text-[#4a1f2e]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,120,170,0.35),_rgba(255,246,251,0))] blur-3xl gradient-shift" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(230,190,120,0.25),_rgba(255,246,251,0))] blur-3xl gradient-shift" />
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
          <Header tone="light" />
          <section className="relative overflow-hidden rounded-[36px] border border-[#f1c8d6] bg-white px-6 py-28 sm:px-12 lg:px-16">
            <div className="absolute inset-0">
              <Image
                src={aboutImages.hero}
                alt="Luxury evening ambiance"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="relative z-10 flex max-w-2xl flex-col gap-8">
              <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.35em] text-[#ffd28a] drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)]">
                About Our Service
              </p>
              <h1 className="fade-in-up text-4xl font-semibold tracking-tight text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
                Who We Are
              </h1>
              <p className="fade-in-up text-lg text-white/90 drop-shadow-[0_10px_22px_rgba(0,0,0,0.6)] sm:text-xl">
                EscortBerlin.de is a Germany-based luxury companionship studio
                delivering discreet, elegant, and impeccably curated experiences.
                We focus on privacy, professionalism, and a refined journey built
                around your comfort.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-white/90 sm:text-sm">
                {["Discreet", "High-End", "Professional", "Tailored"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/60 bg-black/25 px-4 py-2 uppercase tracking-[0.25em] backdrop-blur"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="perf-section mx-auto flex max-w-[1400px] flex-col gap-12 px-6 pb-24 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[36px] border border-[#f1c8d6] bg-white px-6 py-16 sm:px-12 lg:px-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,122,178,0.28),_rgba(255,255,255,0))] blur-3xl gradient-shift" />
              <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(230,190,120,0.22),_rgba(255,255,255,0))] blur-3xl gradient-shift" />
            </div>
            <div className="relative z-10 flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff7ab2]">
                Brand Experience
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#d93b7a] sm:text-5xl lg:text-6xl glow-pulse">
                The Experience We Define
              </h2>
              <p className="max-w-2xl text-lg text-[#6a2b45] sm:text-xl">
                Exclusive by nature, refined in execution, and guided by discreet
                confidence. We design experiences that feel cinematic yet effortlessly
                personal.
              </p>
              <div className="grid gap-4 pt-4 text-xs uppercase tracking-[0.3em] text-[#6a2b45] sm:grid-cols-2">
                <span className="rounded-full border border-[#f1c8d6] bg-white px-4 py-2 text-center">
                  Private Curations
                </span>
                <span className="rounded-full border border-[#f1c8d6] bg-white px-4 py-2 text-center">
                  Discreet Itineraries
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
              <Image
                src={aboutImages.atelier}
                alt="Luxury brand ambience"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
                <Image
                  src={aboutImages.lounge}
                  alt="Refined lounge"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 45vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
                <Image
                  src={aboutImages.skyline}
                  alt="City night"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 45vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perf-section bg-white py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e6be78]">
              Signature Values
            </p>
            <h2 className="text-3xl font-semibold text-[#d93b7a] sm:text-4xl">
              Quiet Luxury, Defined
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {brandValues.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="reveal group rounded-3xl border border-[#f1c8d6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-[#ff7ab2]/60 hover:shadow-[0_35px_70px_rgba(220,150,180,0.35)]"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f1c8d6] bg-white text-[#ff7ab2] shadow-[0_0_25px_rgba(255,122,178,0.2)] group-hover:shadow-[0_0_35px_rgba(255,122,178,0.4)]">
                  <span className="h-4 w-4 rounded-full border border-[#ff7ab2] transition duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-[#4a1f2e]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#6a2b45]">{item.description}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#ff7ab2]/50 to-transparent opacity-70" />
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {auraGallery.map((src) => (
              <div
                key={src}
                className="relative min-h-[180px] overflow-hidden rounded-3xl border border-[#f1c8d6]"
              >
                <Image
                  src={src}
                  alt="Luxury detail"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22vw, 90vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="perf-section bg-[#fff6fb] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16">
          <div className="flex flex-col justify-center gap-4" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff7ab2]">
              Germany Presence
            </p>
            <h2 className="text-3xl font-semibold text-[#d93b7a] sm:text-4xl">
              Rooted in Germany
            </h2>
            <p className="text-[#6a2b45]">
              Inspired by European culture and premium standards, our presence
              reflects quality, discretion, and refined hospitality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#6a2b45] sm:text-sm">
              {["Berlin", "Munich", "Hamburg", "Frankfurt"].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-[#f1c8d6] bg-white px-4 py-2 uppercase tracking-[0.25em]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
            <Image
              key={germanySlide}
              src={germanySlides[germanySlide]}
              alt="Germany presence"
              fill
              className="object-cover fade-in"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority={germanySlide === 0}
            />
            <div className="absolute inset-0 bg-transparent" />
            <div className="absolute inset-0 bg-transparent" />
          </div>
        </div>
      </section>

      <section className="perf-section bg-white py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff7ab2]">
              Atelier Sessions
            </p>
            <h2 className="text-3xl font-semibold text-[#d93b7a] sm:text-4xl">
              Designed Like a Private Gallery
            </h2>
            <p className="max-w-2xl text-[#6a2b45]">
              A curated sequence of luxury moments, combining ambience, timing,
              and discretion into a seamless experience.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[#f1c8d6]">
              <Image
                src={aboutImages.suite}
                alt="Private suite experience"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 90vw"
              />
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#f1c8d6] bg-white/80 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#e6be78]">
                  Signature Atmosphere
                </p>
                <p className="mt-2 text-sm text-[#6a2b45]">
                  Soft lighting, refined styling, and a calm, luxurious pace.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
                <Image
                  src={aboutImages.atelier}
                  alt="Luxury atelier"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-[#f1c8d6]">
                <Image
                  src={aboutImages.lounge}
                  alt="Refined details"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

