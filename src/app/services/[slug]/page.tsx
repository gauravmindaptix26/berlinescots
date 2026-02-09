import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FooterSection from "../../../components/FooterSection";

const services = {
  "escort-agentur-berlin": {
    title: "Escort Agentur Berlin",
    description:
      "Curated companions with verified profiles, discreet coordination, and a premium concierge experience tailored to your preferences.",
    accent: "Agency curated",
  },
  "escort-service-berlin": {
    title: "Escort Service Berlin",
    description:
      "Reliable, discreet companionship for private evenings, events, and premium city experiences in Berlin.",
    accent: "Citywide service",
  },
  "high-class-escort-berlin": {
    title: "High Class Escort Berlin",
    description:
      "Elite profiles with refined presentation, premium etiquette, and discreet concierge care.",
    accent: "High class",
  },
  "escort-berlin-mitte": {
    title: "Escort Berlin Mitte",
    description:
      "Local companions based in Mitte with flexible scheduling and discreet, tailored meetings.",
    accent: "Mitte focus",
  },
  "business-escort-berlin": {
    title: "Business Escort Berlin",
    description:
      "Professional companions for corporate dinners, networking events, and executive travel in Berlin.",
    accent: "Business ready",
  },
} as const;

const profiles = [
  {
    name: "Alina",
    age: 24,
    area: "Berlin Mitte",
    tags: ["Dinner dates", "VIP events", "English"],
    src: "/images/Frau im schwarzen Kleid.jpg",
  },
  {
    name: "Sofia",
    age: 26,
    area: "Charlottenburg",
    tags: ["Discreet", "City nights", "German"],
    src: "/images/Frau in Body.jpg",
  },
  {
    name: "Mila",
    age: 23,
    area: "Prenzlauer Berg",
    tags: ["Luxury hotels", "Polished", "English"],
    src: "/images/Dame am Pool.jpg",
  },
  {
    name: "Lana",
    age: 28,
    area: "Kurfürstendamm",
    tags: ["Business events", "Refined", "German"],
    src: "/images/Frau auf Sessel.jpg",
  },
  {
    name: "Nora",
    age: 25,
    area: "Mitte",
    tags: ["Elegant", "Discreet", "French"],
    src: "/images/Sexy Escort.png",
  },
  {
    name: "Lea",
    age: 27,
    area: "Tiergarten",
    tags: ["Gala nights", "VIP", "English"],
    src: "/images/Frauen in Limousine.jpeg",
  },
] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

type ServiceSlug = keyof typeof services;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--shell)]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-12 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Header />
        <main className="space-y-16">
          <section className="fade-in-up space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/60">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {service.accent}
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-lg text-black/70 sm:text-xl">
                {service.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {profiles.slice(0, 6).map((profile) => (
                <article
                  key={profile.name}
                  className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={profile.src}
                      alt={`${profile.name} profile`}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-lg font-semibold">
                        {profile.name}, {profile.age}
                      </p>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                        {profile.area}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-black/70">
                      {profile.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-white px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm font-semibold text-black/70">
                      <span>Available on request</span>
                      <span className="text-[var(--accent)]">View</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-gradient-to-r from-[#d21a73] via-[#c6206f] to-[#3b1d6e] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(207,31,109,0.35)] transition hover:-translate-y-0.5"
                href="../../booking-guidelines"
              >
                Start Booking
              </Link>
              <Link
                className="rounded-full border border-[var(--line)] bg-white px-7 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30"
                href="../../contact"
              >
                Speak to Concierge
              </Link>
            </div>
          </section>

          <section className="fade-in-up grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Verified profiles",
                copy: "Every profile is curated for presentation, etiquette, and discretion.",
              },
              {
                title: "Discreet coordination",
                copy: "Private scheduling with respectful, professional communication.",
              },
              {
                title: "Premium experiences",
                copy: "Tailored arrangements for dinners, events, and city nights.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <p className="text-lg font-semibold text-black">{item.title}</p>
                <p className="mt-2 text-sm text-black/65">{item.copy}</p>
              </div>
            ))}
          </section>

          <section className="fade-in-up rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_22px_50px_rgba(0,0,0,0.1)]">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-black">
                  Booking journey
                </h2>
                <p className="text-base text-black/70">
                  Share your preferred date, time, and style. Our concierge team
                  will respond quickly with a curated selection.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Share your preferences",
                    "Receive curated options",
                    "Confirm discreetly",
                    "Enjoy your experience",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-black/10 bg-[var(--shell)] px-4 py-3 text-sm font-semibold text-black/70"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/Frau im Auto .jpg"
                  alt="Discreet booking"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
