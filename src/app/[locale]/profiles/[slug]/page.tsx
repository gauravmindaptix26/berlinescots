import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../../components/Header";
import FooterSection from "../../../../components/FooterSection";
import { fetchInternalAttendantProfile } from "../../../../lib/attendantProfile";

type InfoCardProps = {
  label: string;
  value: string;
  iconPath: string;
};

function splitValues(raw: string) {
  if (!raw || raw === "On request") return [];
  return raw
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function InfoCard({ label, value, iconPath }: InfoCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[var(--accent-soft)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d={iconPath} />
          </svg>
        </span>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
          {label}
        </h3>
      </div>
      <p className="text-[19px] leading-tight text-white">{value}</p>
    </section>
  );
}

export default async function InternalProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const localePrefix = locale.startsWith("en") ? "/en" : "/de";
  const profile = await fetchInternalAttendantProfile(slug);

  if (!profile) {
    notFound();
  }

  const languageItems = splitValues(profile.languages);
  const abilityItems = splitValues(profile.canDoForYou);
  const outfitItems = splitValues(profile.toysAndOutfits);
  const meetingItems = splitValues(profile.meetingLocations);
  const pricingItems = splitValues(profile.honorarium);
  const travelItems = splitValues(profile.travelCosts);

  return (
    <div className="min-h-screen bg-transparent text-black">
      <div className="mx-auto flex min-h-screen max-w-[1240px] flex-col gap-10 px-6 pb-16 pt-10 sm:px-10 lg:px-14">
        <Header tone="light" />

        <main className="overflow-hidden rounded-[34px] border border-[var(--accent-soft)]/20 bg-[linear-gradient(145deg,#090909_0%,#07090f_48%,#080808_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.45),0_16px_50px_rgba(207,31,109,0.22)]">
          <div className="relative grid min-h-[520px] gap-0 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative flex items-center justify-center border-b border-white/10 bg-[radial-gradient(circle_at_35%_40%,rgba(207,31,109,0.2)_0%,rgba(0,0,0,0.92)_62%)] p-8 lg:border-b-0 lg:border-r lg:border-r-white/10">
              {profile.image ? (
                <div className="relative h-[460px] w-full max-w-[380px] overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </div>
              ) : (
                <div className="flex h-[460px] w-full max-w-[380px] items-center justify-center rounded-[24px] border border-white/10 text-white/45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-20 w-20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
                  </svg>
                </div>
              )}
            </div>

            <div className="relative p-8 lg:p-10">
              <p className="inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                Available - Berlin
              </p>
              <h1 className="mt-6 text-5xl leading-[0.95] text-white sm:text-6xl">{profile.name}</h1>
              <p className="mt-5 text-sm uppercase tracking-[0.35em] text-white/45">Premium profile</p>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[var(--accent)]/70 to-transparent" />

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="border-l border-white/15 pl-3">
                  <p className="text-3xl text-[var(--accent-soft)]">{profile.age}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Age</p>
                </div>
                <div className="border-l border-white/15 pl-3">
                  <p className="text-3xl text-[var(--accent-soft)]">{profile.height.replace(" cm", "")}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">cm</p>
                </div>
                <div className="border-l border-white/15 pl-3">
                  <p className="text-3xl text-[var(--accent-soft)]">{profile.cupSize}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Cup</p>
                </div>
                <div className="border-l border-white/15 pl-3">
                  <p className="text-3xl text-[var(--accent-soft)]">{profile.origin}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Origin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.85fr]">
            <section className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="Age" value={profile.age} iconPath="M7 4h10M8 2v4M16 2v4M5 9h14M6 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
              <InfoCard label="Height" value={profile.height} iconPath="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
              <InfoCard label="Cup Size" value={profile.cupSize} iconPath="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
              <InfoCard label="Origin" value={profile.origin} iconPath="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
              <InfoCard label="Sexual Orientation" value={profile.sexualOrientation} iconPath="M12 4v16M4 12h16" />
              <InfoCard label="Languages" value={profile.languages} iconPath="M4 5h16M4 12h16M4 19h16" />

              <section className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 sm:col-span-2">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">What I can do for you</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {(abilityItems.length ? abilityItems : ["On request"]).map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-[var(--accent)]/35 bg-[var(--accent)]/8 px-3 py-1.5 text-xs uppercase tracking-[0.09em] text-white/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 sm:col-span-2">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">My toys & outfits</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {(outfitItems.length ? outfitItems : ["On request"]).map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </section>

            <aside className="space-y-5">
              <section className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">Honorarium / Price</h3>
                <div className="mt-4 space-y-2.5">
                  {(pricingItems.length ? pricingItems : ["On request"]).map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/10 pb-2 text-sm text-white/85 last:border-b-0">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">Meeting locations</h3>
                <div className="mt-4 space-y-2.5">
                  {(meetingItems.length ? meetingItems : ["On request"]).map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base text-white/90">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">Travel costs</h3>
                <p className="mt-4 text-base leading-relaxed text-white/75">{(travelItems.length ? travelItems : ["On request"]).join(" - ")}</p>
              </section>

              <div className="pt-2">
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 border border-[var(--accent-soft)]/45 bg-[linear-gradient(120deg,var(--accent)_0%,#f06ba8_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(207,31,109,0.36)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M7 4h10M7 2v4M17 2v4M5 8h14M6 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  Book now
                </a>
                <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-white/45">Check availability - 100% discreet</p>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
