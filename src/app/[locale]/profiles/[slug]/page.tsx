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
    <section className="rounded-2xl border border-[var(--accent-soft)]/20 bg-white/80 p-5 shadow-[0_8px_26px_rgba(207,31,109,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(207,31,109,0.16)]">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#F55C9C]/45 bg-[#F55C9C]/10">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[#F55C9C]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d={iconPath} />
          </svg>
        </span>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DF3D85]">
          {label}
        </h3>
      </div>
      <p className="text-[19px] leading-tight text-[#2d1a26]">{value}</p>
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fc_0%,#fff2f9_38%,#fff7fb_100%)] text-[#2d1a26]">
      <div className="mx-auto flex min-h-screen max-w-[1240px] flex-col gap-10 px-6 pb-16 pt-10 sm:px-10 lg:px-14">
        <Header tone="light" />

        <main className="overflow-hidden rounded-[34px] border border-[var(--accent-soft)]/20 bg-[linear-gradient(160deg,#fffafd_0%,#fff6fb_48%,#fffbfe_100%)] shadow-[0_24px_70px_rgba(207,31,109,0.12)]">
          <div className="relative grid min-h-[420px] gap-0 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative flex items-center justify-center border-b border-[var(--accent-soft)]/15 bg-[radial-gradient(circle_at_28%_35%,rgba(207,31,109,0.18)_0%,rgba(255,240,248,0.95)_56%,rgba(255,255,255,0.98)_100%)] p-8 lg:border-b-0 lg:border-r lg:border-r-[var(--accent-soft)]/15">
              {profile.image ? (
                <div className="relative h-[500px] w-full max-w-[390px] overflow-hidden rounded-[24px] border border-[var(--accent-soft)]/20 bg-transparent shadow-[0_18px_40px_rgba(207,31,109,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_54px_rgba(207,31,109,0.2)]">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f0d20]/12 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="flex h-[500px] w-full max-w-[390px] items-center justify-center rounded-[24px] border border-[var(--accent-soft)]/20 bg-white/60 text-[var(--accent-soft)]/60">
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

            <div className="relative flex flex-col items-center justify-center bg-white/65 p-8 text-center lg:p-10">
              <p className="inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/[0.08] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Available - Berlin
              </p>
              <h1 className="mt-6 text-5xl leading-[0.95] text-[#2d1a26] sm:text-6xl">{profile.name}</h1>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[var(--accent)]/70 to-transparent" />

              <div className="mt-8 grid w-full max-w-[640px] grid-cols-3 overflow-hidden rounded-2xl border border-[var(--accent-soft)]/20 bg-white/55 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(207,31,109,0.14)]">
                <div className="flex min-h-[104px] flex-col items-center justify-center px-4 py-4 text-center transition duration-300 hover:bg-[var(--accent)]/[0.06] sm:border-r sm:border-[var(--accent)]/25">
                  <p className="text-3xl text-[var(--accent)]">{profile.age}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a5b73]">Age</p>
                </div>
                <div className="flex min-h-[104px] flex-col items-center justify-center px-4 py-4 text-center transition duration-300 hover:bg-[var(--accent)]/[0.06] sm:border-r sm:border-[var(--accent)]/25">
                  <p className="text-3xl text-[var(--accent)]">{profile.height.replace(" cm", "")}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a5b73]">cm</p>
                </div>
                <div className="flex min-h-[104px] flex-col items-center justify-center px-4 py-4 text-center transition duration-300 hover:bg-[var(--accent)]/[0.06]">
                  <p className="text-3xl text-[var(--accent)]">{profile.cupSize}</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a5b73]">Cup</p>
                </div>
                <div className="col-span-3 flex min-h-[92px] flex-col items-center justify-center border-t border-[var(--accent)]/25 px-4 py-4 text-center transition duration-300 hover:bg-[var(--accent)]/[0.06]">
                  {profile.origin.trim().toLowerCase().includes("on request") ? (
                    <p className="mx-auto text-[26px] leading-[1.05] text-[var(--accent)]">
                      <span className="whitespace-nowrap">On request</span>
                    </p>
                  ) : (
                    <p className="mx-auto max-w-[360px] break-words text-[26px] leading-[1.05] text-[var(--accent)]">
                      {profile.origin}
                    </p>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a5b73]">Origin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-[var(--accent-soft)]/15 bg-white/40 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.85fr]">
            <section className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="Age" value={profile.age} iconPath="M7 4h10M8 2v4M16 2v4M5 9h14M6 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
              <InfoCard label="Height" value={profile.height} iconPath="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
              <InfoCard label="Cup Size" value={profile.cupSize} iconPath="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
              <InfoCard label="Origin" value={profile.origin} iconPath="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
              <InfoCard label="Sexual Orientation" value={profile.sexualOrientation} iconPath="M12 4v16M4 12h16" />
              <InfoCard label="Languages" value={profile.languages} iconPath="M4 5h16M4 12h16M4 19h16" />

              <section className="rounded-2xl border border-[var(--accent-soft)]/20 bg-white/80 p-5 shadow-[0_8px_26px_rgba(207,31,109,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(207,31,109,0.16)] sm:col-span-2">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DF3D85]">What I can do for you</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {(abilityItems.length ? abilityItems : ["On request"]).map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-3 py-1.5 text-xs uppercase tracking-[0.09em] text-[#5c2f45] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent)]/[0.14]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-[var(--accent-soft)]/20 bg-white/80 p-5 shadow-[0_8px_26px_rgba(207,31,109,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(207,31,109,0.16)] sm:col-span-2">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DF3D85]">My toys & outfits</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {(outfitItems.length ? outfitItems : ["On request"]).map((item) => (
                    <span key={item} className="rounded-full border border-[var(--accent-soft)]/25 bg-white px-3 py-1.5 text-sm text-[#5c2f45] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.06]">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </section>

            <aside className="space-y-5">
              <section className="rounded-2xl border border-[var(--accent-soft)]/25 bg-[linear-gradient(140deg,#ff6bac_0%,#f45b9b_45%,#de3f84_100%)] p-5 text-white shadow-[0_16px_38px_rgba(207,31,109,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(207,31,109,0.36)]">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">Honorarium / Price</h3>
                <div className="mt-4 space-y-2.5">
                  {(pricingItems.length ? pricingItems : ["On request"]).map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/25 pb-2 text-sm text-white/95 last:border-b-0">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-[var(--accent-soft)]/20 bg-white/80 p-5 shadow-[0_8px_26px_rgba(207,31,109,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(207,31,109,0.16)]">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DF3D85]">Meeting locations</h3>
                <div className="mt-4 space-y-2.5">
                  {(meetingItems.length ? meetingItems : ["On request"]).map((item) => (
                    <div key={item} className="rounded-md border border-[var(--accent-soft)]/22 bg-white px-3 py-2 text-base text-[#4a2338] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.06]">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-[var(--accent-soft)]/20 bg-white/80 p-5 shadow-[0_8px_26px_rgba(207,31,109,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(207,31,109,0.16)]">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#DF3D85]">Travel costs</h3>
                <p className="mt-4 text-base leading-relaxed text-[#5b3045]">{(travelItems.length ? travelItems : ["On request"]).join(" - ")}</p>
              </section>

              <div className="pt-2">
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 border border-[var(--accent-soft)]/45 bg-[linear-gradient(120deg,var(--accent)_0%,#f06ba8_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] !text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(207,31,109,0.36)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M7 4h10M7 2v4M17 2v4M5 8h14M6 22h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                  </svg>
                  Book now
                </a>
                <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[#8a5b73]">Check availability - 100% discreet</p>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
