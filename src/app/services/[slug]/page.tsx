import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Header from "../../../components/Header";
import FooterSection from "../../../components/FooterSection";
import AttendantsSection from "../../../components/AttendantsSection";
import HighClassPage from "../../../components/services/HighClassPage";
import MittePage from "../../../components/services/MittePage";
import BusinessPage from "../../../components/services/BusinessPage";

const services = {
  "escort-agentur-berlin": {
    title: "Escort Agentur Berlin",
    description:
      "A refined agency experience with curated companions, discreet booking, and a premium concierge journey crafted around your preferences.",
    highlights: [
      "Curated profiles with clear standards and verification.",
      "Discreet scheduling and calm, respectful coordination.",
      "Dedicated concierge support from inquiry to follow-up.",
    ],
    tags: ["Curated selection", "Discreet bookings", "Personal concierge"],
    accent: "Agency curated",
  },
  "escort-service-berlin": {
    title: "Escort Service Berlin",
    description:
      "Reliable escort services designed for private evenings, social events, and premium city experiences with respectful, polished care.",
    highlights: [
      "Thoughtful matching guided by your preferences.",
      "Clear communication and professional etiquette.",
      "Citywide coverage with responsive coordination.",
    ],
    tags: ["Citywide availability", "Professional etiquette", "Fast response"],
    accent: "Citywide service",
  },
  "high-class-escort-berlin": {
    title: "High Class Escort Berlin",
    description:
      "An elevated selection for refined clients seeking premium companionship with impeccable presentation and discretion.",
    highlights: [
      "Elite profiles with premium standards.",
      "Ideal for galas, dinners, and VIP events.",
      "Polished, attentive, and discreet companions.",
    ],
    tags: ["Elite profiles", "VIP events", "Luxury experience"],
    accent: "High class",
  },
  "escort-berlin-mitte": {
    title: "Escort Berlin Mitte",
    description:
      "Local companions focused in Mitte for elegant city nights, business meetings, and upscale appointments.",
    highlights: [
      "Mitte-first availability and local knowledge.",
      "Convenient meeting points and tailored plans.",
      "Refined presence for social and business use.",
    ],
    tags: ["Mitte focused", "Local knowledge", "Flexible meetings"],
    accent: "Mitte focus",
  },
  "business-escort-berlin": {
    title: "Business Escort Berlin",
    description:
      "Professional companionship designed for corporate dinners, networking events, and executive travel in Berlin.",
    highlights: [
      "Business-ready presentation and etiquette.",
      "Confidentiality-first engagements.",
      "Adaptable scheduling for busy agendas.",
    ],
    tags: ["Corporate friendly", "Executive etiquette", "Confidential"],
    accent: "Business ready",
  },
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

type ServiceSlug = keyof typeof services;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string; locale?: string }>;
}) {
  const { slug, locale } = await params;
  const language = locale?.startsWith("en") ? "en" : "de";
  const localePrefix = language === "en" ? "/en" : "/de";
  const service = services[slug as ServiceSlug];
  const isServiceBerlin = slug === "escort-service-berlin";
  const isHighClass = slug === "high-class-escort-berlin";
  const isMitte = slug === "escort-berlin-mitte";
  const isBusiness = slug === "business-escort-berlin";

  if (!service) {
    notFound();
  }

  if (isHighClass) {
    return <HighClassPage />;
  }
  if (isMitte) {
    return <MittePage />;
  }
  if (isBusiness) {
    return <BusinessPage />;
  }

  return (
    <div className="min-h-screen bg-[var(--shell)]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-16 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Header />
        <main className="space-y-16">
          {isServiceBerlin ? (
            <section className="fade-in-up relative overflow-hidden rounded-[34px] border border-black/10 bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.14)] lg:p-12">
              <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[var(--accent-soft)] blur-3xl opacity-70" />
              <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#fbe3ef] blur-3xl opacity-60" />
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/55">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Citywide Service
                  </div>
                  <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
                    Escort Service Berlin
                  </h1>
                  <p className="max-w-2xl text-lg text-black/70 sm:text-xl">
                    Reliable escort services designed for private evenings,
                    social events, and premium city experiences with respectful,
                    polished care.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      className="rounded-full bg-gradient-to-r from-[#d21a73] via-[#c6206f] to-[#3b1d6e] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(207,31,109,0.35)] transition hover:-translate-y-0.5"
                      href={`${localePrefix}/booking-guidelines`}
                    >
                      Start Booking
                    </Link>
                    <Link
                      className="rounded-full border border-[var(--line)] bg-white px-7 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30"
                      href={`${localePrefix}/contact`}
                    >
                      Speak to Concierge
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-8 pt-4 text-sm font-semibold text-black/60">
                    <span>Encrypted Requests</span>
                    <span>24/7 Support</span>
                    <span>Verified Profiles</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                      <Image
                        src="/images/Sexy Escort.png"
                        alt="Escort in a refined setting"
                        className="rounded-[24px] object-cover"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 520px"
                      />
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                      <Image
                        src="/images/Paar.jpeg"
                        alt="Companion portrait"
                        className="rounded-[24px] object-cover"
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="fade-in-up grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  {service.accent}
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="max-w-2xl text-lg text-black/75 sm:text-xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    className="rounded-full bg-gradient-to-r from-[#d21a73] via-[#c6206f] to-[#3b1d6e] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(207,31,109,0.35)] transition hover:-translate-y-0.5"
                    href={`${localePrefix}/booking-guidelines`}
                  >
                    Start Booking
                  </Link>
                  <Link
                    className="rounded-full border border-[var(--line)] bg-white px-7 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30"
                    href={`${localePrefix}/contact`}
                  >
                    Speak to Concierge
                  </Link>
                </div>
                <div className="flex flex-wrap gap-8 pt-4 text-sm font-semibold text-black/60">
                  <span>Encrypted Requests</span>
                  <span>24/7 Support</span>
                  <span>Verified Profiles</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-2xl opacity-70" />
                <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                    <Image
                      src="/images/Frau in Body.jpg"
                      alt="Escort in a refined setting"
                      className="rounded-[24px] object-cover"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/images/Frau auf Sessel.jpg"
                      alt="Companion portrait"
                      className="rounded-[24px] object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          <section
            className="fade-in-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animationDelay: "0.1s" }}
          >
            {service.highlights.map((item) => (
              <div
                key={item}
                className="group rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)] transition group-hover:scale-105">
                  <div className="h-full w-full rounded-xl bg-white" />
                </div>
                <p className="text-base font-semibold text-black">{item}</p>
                <p className="mt-3 text-sm text-black/60">
                  Premium standards, personalized coordination, and graceful
                  experiences designed around you.
                </p>
              </div>
            ))}
          </section>

          {isServiceBerlin ? (
            <section
              className="fade-in-up grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
              style={{ animationDelay: "0.12s" }}
            >
              <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_22px_50px_rgba(0,0,0,0.1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Service Intelligence
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-black">
                  Modern coordination that feels effortless
                </h2>
                <p className="mt-4 text-base text-black/70">
                  For Escort Service Berlin, our concierge team blends private
                  communication, availability forecasting, and preference-aware
                  matching to create a smooth, premium experience.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Real-time availability signals",
                    "Discrete preference profiles",
                    "Priority response routing",
                    "Verified companion vetting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/5 bg-[var(--shell)] px-4 py-3 text-sm font-semibold text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    href={`${localePrefix}/booking-guidelines`}
                  >
                    Explore Service
                  </Link>
                  <span className="text-sm font-semibold text-black/60">
                    Avg response under 10 min
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_22px_50px_rgba(0,0,0,0.12)]">
                <div className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  Smart Matching
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/Frau im schwarzen Kleid.jpg"
                    alt="Escort service in Berlin"
                    className="object-cover transition duration-300 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>
            </section>
          ) : null}

          <section
            className="fade-in-up rounded-[30px] border border-black/5 bg-white p-8 shadow-[0_22px_50px_rgba(0,0,0,0.1)] lg:p-12"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Signature Experience
                </p>
                <h2 className="text-3xl font-semibold text-black sm:text-4xl">
                  A modern premium service flow built for comfort
                </h2>
                <p className="text-base text-black/70">
                  We blend discreet hospitality with smart coordination so your
                  experience feels effortless. Our concierge team uses
                  preference-matching, private communication, and real-time
                  availability checks to ensure a seamless visit.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Preference-guided matching",
                    "Private chat coordination",
                    "Elegant arrival planning",
                    "Aftercare follow-up",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/5 bg-[var(--shell)] px-4 py-3 text-sm font-semibold text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image
                  src="/images/Dame am Pool.jpg"
                  alt="Luxury ambiance"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/60 backdrop-blur">
                  Discreet + Premium
                </div>
              </div>
            </div>
          </section>

          {isServiceBerlin ? (
            <section
              className="fade-in-up grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
              style={{ animationDelay: "0.18s" }}
            >
              <div className="rounded-[26px] border border-black/5 bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Signature Moments
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-black">
                  Tailored service styles
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Evening elegance",
                      copy: "Premium dinner and city-night companionship.",
                    },
                    {
                      title: "Social engagements",
                      copy: "Discreet, polished presence for events.",
                    },
                    {
                      title: "Business ready",
                      copy: "Professional, confident, and refined.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/5 bg-[var(--shell)] p-4"
                    >
                      <p className="text-base font-semibold text-black">
                        {item.title}
                      </p>
                      <p className="text-sm text-black/60">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[26px] border border-black/5 bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl font-semibold text-black">
                  Service metrics
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Discretion rating", value: "98%" },
                    { label: "Repeat clients", value: "72%" },
                    { label: "Availability", value: "High" },
                    { label: "Response time", value: "<10 min" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-black/5 bg-[var(--shell)] px-4 py-5 text-sm font-semibold text-black/70"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-black">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                  Trusted by premium clientele in Berlin
                </div>
              </div>
            </section>
          ) : null}

          <section
            className="fade-in-up grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-[26px] border border-black/5 bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-black">
                Booking journey
              </h3>
              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Share your preferences",
                    copy: "Tell us the occasion, timing, and style you want.",
                  },
                  {
                    title: "Smart matching",
                    copy: "We curate a short, verified selection for you.",
                  },
                  {
                    title: "Confirm and enjoy",
                    copy: "Finalize the plan and enjoy a premium experience.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-black/5 bg-[var(--shell)] p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-semibold text-black/70 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-black">
                        {step.title}
                      </p>
                      <p className="text-sm text-black/60">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[26px] border border-black/5 bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-black">
                Availability snapshot
              </h3>
              <p className="mt-4 text-sm text-black/60">
                Live availability is updated by our concierge. Reach out for the
                latest options in Berlin.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Evenings", value: "High demand" },
                  { label: "Weekends", value: "Limited" },
                  { label: "Same-day", value: "By request" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-black/5 bg-[var(--shell)] px-4 py-3 text-sm font-semibold text-black/70"
                  >
                    <span>{item.label}</span>
                    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-black/50">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                className="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                href={`${localePrefix}/contact`}
              >
                Check Availability
              </Link>
            </div>
          </section>

          {isServiceBerlin ? (
            <section
              className="fade-in-up rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_22px_50px_rgba(0,0,0,0.1)] lg:p-12"
              style={{ animationDelay: "0.22s" }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                    Berlin Favorites
                  </p>
                  <h3 className="text-3xl font-semibold text-black">
                    Premium arrivals with iconic city energy
                  </h3>
                  <p className="text-base text-black/70">
                    From Mitte rooftops to sleek hotel lounges, we coordinate
                    discreet arrivals with premium styling and elegant timing.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Hotel concierge-ready",
                      "Event entry planning",
                      "Citywide coverage",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-[var(--shell)] px-4 py-2 text-sm font-semibold text-black/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/Frauen in Limousine.jpeg"
                    alt="Premium city arrival"
                    className="object-cover transition duration-300 hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>
            </section>
          ) : null}

          <section
            className="fade-in-up space-y-6"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Visual Gallery
                </p>
                <h3 className="text-3xl font-semibold text-black">
                  Modern, elegant, and discreet
                </h3>
              </div>
              <span className="text-sm font-semibold text-black/60">
                Premium moments in Berlin
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/images/Frauen in Limousine.jpeg",
                  alt: "Luxury arrival",
                },
                {
                  src: "/images/Frau im schwarzen Kleid.jpg",
                  alt: "Elegant styling",
                },
                {
                  src: "/images/Sexy Escort.png",
                  alt: "Premium portrait",
                },
              ].map((image) => (
                <div
                  key={image.src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover transition duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>

          <Suspense fallback={<div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-black/60">Loading profiles…</div>}>
            <AttendantsSection
              title="Profiles available now"
              subtitle="Verified attendants from our concierge"
            />
          </Suspense>

          <section
            className="fade-in-up rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_22px_50px_rgba(0,0,0,0.1)] lg:p-12"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-black">
                  Ready for a tailored premium experience?
                </h3>
                <p className="text-base text-black/70">
                  Share your preferred date, time, and style. Our concierge
                  team will respond quickly with a curated option.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="rounded-full bg-gradient-to-r from-[#d21a73] via-[#c6206f] to-[#3b1d6e] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(207,31,109,0.35)] transition hover:-translate-y-0.5"
                  href={`${localePrefix}/booking-guidelines`}
                >
                  Book a Session
                </Link>
                <Link
                  className="rounded-full border border-[var(--line)] bg-white px-7 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30"
                  href={`${localePrefix}/contact`}
                >
                  WhatsApp Concierge
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
