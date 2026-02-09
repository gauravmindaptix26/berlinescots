"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";

const contactImages = {
  hero: "/images/Frau bringt Mann Frühstück.jpg",
  form: "/images/Frau im schwarzen Kleid.jpg",
  city: "/images/Frauen in Limousine.jpeg",
  lounge: "/images/Frau auf Sessel.jpg",
};

const contactMethodSlides = [
  {
    title: "Email",
    description: "Discreet communication with concierge-level response.",
    image: "/images/Frau im Auto .jpg",
  },
  {
    title: "Phone / WhatsApp",
    description: "Private call support with minimal wait times.",
    image: "/images/Frauen in Limousine.jpeg",
  },
  {
    title: "Secure Inquiry",
    description: "Confidential requests handled with care.",
    image: "/images/Frau im schwarzen Kleid.jpg",
  },
  {
    title: "Private Support",
    description: "Dedicated assistance for returning clients.",
    image: "/images/Frau auf Sessel.jpg",
  },
];

const trustItems = [
  {
    title: "Confidential Communication",
    description: "Every detail stays private and protected.",
  },
  {
    title: "Discreet Handling",
    description: "Professional protocols at every step.",
  },
  {
    title: "Trusted Professionals",
    description: "Experienced, verified, and respectful.",
  },
  {
    title: "Respectful Experience",
    description: "Calm, premium, and comfortable service.",
  },
];

const cityHighlights = ["Berlin", "Munich", "Hamburg", "Frankfurt"];

const gallerySlides = [
  {
    image: "/images/Frau im Auto .jpg",
    title: "Discreet Encounters",
    description: "A calm, elegant ambiance curated for privacy-first moments.",
  },
  {
    image: "/images/Frauen in Limousine.jpeg",
    title: "Refined Lifestyle",
    description: "Luxury settings designed to feel relaxed and exclusive.",
  },
  {
    image: "/images/Frau auf Sessel.jpg",
    title: "Premium Arrival",
    description: "Sophisticated arrivals with attentive concierge care.",
  },
  {
    image: "/images/Frau im schwarzen Kleid.jpg",
    title: "Quiet Confidence",
    description: "Graceful, composed experiences with professional etiquette.",
  },
];

export default function ContactPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMethod, setActiveMethod] = useState(0);
  const contactEmail = "contact@escortberlin.de";

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
      setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff7fb] text-black">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,170,205,0.35),_rgba(255,247,251,0))] blur-3xl gradient-shift" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(255,210,230,0.35),_rgba(255,247,251,0))] blur-3xl gradient-shift" />
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
          <Header tone="light" />
          <section className="relative overflow-hidden rounded-[36px] border border-[#f3c9d8] bg-white px-6 py-20 sm:px-12 lg:px-16">
            <div className="absolute inset-0">
              <Image
                src={contactImages.hero}
                alt="Elegant contact ambiance"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="relative z-10 max-w-2xl p-2 sm:p-4">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#d96995]">
                <span className="rounded-full border border-white/60 bg-white/10 px-4 py-2 backdrop-blur">
                  Private Concierge
                </span>
                <span className="rounded-full border border-white/60 bg-white/10 px-4 py-2 backdrop-blur">
                  24/7 Discreet Support
                </span>
              </div>
              <p className="fade-in-up text-sm font-semibold uppercase tracking-[0.35em] text-black drop-shadow-[0_6px_14px_rgba(255,255,255,0.35)]">
                Contact Us
              </p>
              <h1 className="fade-in-up mt-3 text-4xl font-semibold tracking-tight text-black drop-shadow-[0_10px_26px_rgba(255,255,255,0.45)] sm:text-5xl lg:text-6xl">
                Let&apos;s Connect
              </h1>
              <p className="fade-in-up mt-4 text-xl text-black/80 drop-shadow-[0_8px_18px_rgba(255,255,255,0.4)] sm:text-2xl">
                Reach out with confidence. Our concierge team offers discreet,
                premium communication designed for comfort and clarity.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-black/70 sm:text-sm">
                {["Discreet", "High-End", "Professional"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-black/20 bg-white/30 px-4 py-2 uppercase tracking-[0.25em] backdrop-blur"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="perf-section bg-white py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d96995]">
              Contact Methods
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Select Your Preferred Channel
            </h2>
            <p className="max-w-2xl text-black/70">
              Choose the communication style that feels most discreet and
              comfortable. Each option is designed for privacy and clarity.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {contactMethodSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveMethod(index)}
                  className={`flex items-center gap-5 rounded-3xl border p-5 text-left transition ${
                    index === activeMethod
                      ? "border-[#d96995] bg-[#fff2f8] shadow-[0_25px_60px_rgba(214,105,149,0.22)]"
                      : "border-[#f3c9d8] bg-white hover:border-[#d96995]"
                  }`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f3c9d8] bg-white text-sm font-semibold text-[#d96995]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-black/70">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#f3c9d8]">
                <Image
                  src={contactMethodSlides[activeMethod].image}
                  alt={contactMethodSlides[activeMethod].title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {contactMethodSlides.map((item, index) => (
                  <button
                    key={`${item.title}-thumb`}
                    type="button"
                    onClick={() => setActiveMethod(index)}
                    className={`relative min-h-[120px] overflow-hidden rounded-2xl border transition ${
                      index === activeMethod
                        ? "border-[#d96995]"
                        : "border-[#f3c9d8]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 18vw, 45vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perf-section bg-[#fff2f8] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16">
          <div className="flex flex-col gap-6" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d96995]">
              Secure Contact
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Share Your Request
            </h2>
            <p className="text-black/70">
              A calm, discreet form designed for privacy-first communication. We
              reply quickly and professionally.
            </p>
            <form
              className="mt-4 grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);
                const name = String(data.get("name") ?? "");
                const email = String(data.get("email") ?? "");
                const preferred = String(data.get("preferred") ?? "");
                const message = String(data.get("message") ?? "");
                const subject = encodeURIComponent(
                  `Website inquiry${name ? ` - ${name}` : ""}`
                );
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nPreferred: ${preferred}\n\n${message}`
                );
                window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
              }}
            >
              <input
                className="h-12 rounded-2xl border border-[#f3c9d8] bg-white px-4 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#f0a7c1]"
                placeholder="Your name"
                type="text"
                name="name"
              />
              <input
                className="h-12 rounded-2xl border border-[#f3c9d8] bg-white px-4 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#f0a7c1]"
                placeholder="Email address"
                type="email"
                name="email"
              />
              <select
                className="h-12 rounded-2xl border border-[#f3c9d8] bg-white px-4 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#f0a7c1]"
                name="preferred"
                defaultValue=""
              >
                <option value="" disabled>
                  Preferred contact method
                </option>
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
                <option>Secure Inquiry</option>
              </select>
              <textarea
                className="min-h-[140px] rounded-2xl border border-[#f3c9d8] bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#f0a7c1]"
                placeholder="Message"
                name="message"
              />
              <button
                className="mt-2 h-12 rounded-full bg-[#d96995] text-sm font-semibold text-white shadow-[0_16px_35px_rgba(214,105,149,0.35)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(214,105,149,0.45)]"
                type="submit"
              >
                Send Secure Request
              </button>
            </form>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#f3c9d8]">
            <Image
              src={contactImages.form}
              alt="Luxury contact lounge"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="perf-section bg-white py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d96995]">
              Experience Gallery
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A Curated Visual Journey
            </h2>
            <p className="max-w-2xl text-black/70">
              A refined sequence of moments that reflects calm luxury, privacy,
              and premium presentation.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-[#f3c9d8] bg-[#fff7fb] p-6">
              <div className="flex flex-col gap-5">
                {gallerySlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      index === activeSlide
                        ? "border-[#d96995] bg-white shadow-[0_20px_45px_rgba(214,105,149,0.2)]"
                        : "border-[#f3c9d8] bg-white/70 hover:border-[#d96995]"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#d96995]">
                      {slide.title}
                    </p>
                    <p className="mt-2 text-sm text-black/70">
                      {slide.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-[#f3c9d8] bg-[#fff7fb] p-4 sm:p-6">
              <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#f3c9d8] bg-white">
                <Image
                  src={gallerySlides[activeSlide].image}
                  alt={gallerySlides[activeSlide].title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority={activeSlide === 0}
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                  {gallerySlides.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeSlide
                          ? "bg-[#d96995]"
                          : "bg-[#f3c9d8]"
                      }`}
                      aria-label={`Show slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide(
                        (activeSlide - 1 + gallerySlides.length) %
                          gallerySlides.length
                      )
                    }
                    className="rounded-full border border-[#f3c9d8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 transition hover:border-[#d96995] hover:text-black"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((activeSlide + 1) % gallerySlides.length)
                    }
                    className="rounded-full border border-[#f3c9d8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 transition hover:border-[#d96995] hover:text-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perf-section bg-[#fff2f8] py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d96995]">
              Location &amp; Availability
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Germany-Focused Presence
            </h2>
            <p className="max-w-2xl text-black/70">
              We operate across Germany with a calm, professional presence and a
              premium standard of care.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-[#f3c9d8]">
              <Image
                src={contactImages.city}
                alt="Germany luxury presence"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 90vw"
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#f3c9d8] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d96995]">
                  Availability
                </p>
                <p className="mt-3 text-sm text-black/70">
                  Flexible schedules with discrete planning for premium clients.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-black/70">
                  {cityHighlights.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-[#f3c9d8] bg-[#fff7fb] px-4 py-2 uppercase tracking-[0.25em]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-[#f3c9d8]">
                <Image
                  src={contactImages.lounge}
                  alt="Luxury lifestyle"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
