"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type AttendantMedia = {
  xs?: string;
  lg?: string;
  blurThumbnail?: string | null;
};

type AttendantLocation = {
  name: string;
};

type Attendant = {
  id?: string;
  slug?: string;
  name: string;
  age?: number;
  distance?: string;
  short_biopic?: string;
  visits?: string[];
  defaultMedia?: AttendantMedia;
  locations?: AttendantLocation[];
};

type AttendantResponse = {
  meta: {
    totalPages: number;
  };
  items: Attendant[];
};

type AttendantsSectionProps = {
  title?: string;
  subtitle?: string;
  limit?: number;
};

export default function AttendantsSection({
  title = "Featured profiles",
  subtitle = "Curated companions available now",
  limit = 35,
}: AttendantsSectionProps) {
  const pathname = usePathname() ?? "";
  const searchParams = useSearchParams();
  const router = useRouter();
  const language = pathname.startsWith("/en") ? "en" : "de";
  const localePrefix = language === "en" ? "/en" : "/de";
  const currentPage = Math.max(
    1,
    Number(searchParams?.get("page") ?? "1") || 1
  );

  const [data, setData] = useState<AttendantResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(
      `/api/attendants?page=${currentPage}&limit=${limit}&language=${language}`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => {
        if (!active) return;
        setData(payload);
      })
      .catch(() => {
        if (!active) return;
        setData(null);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [currentPage, language, limit]);

  const totalPages = data?.meta.totalPages ?? 1;
  const items = data?.items ?? [];

  const buildPageHref = useMemo(() => {
    return (page: number) => {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      params.set("page", String(page));
      const query = params.toString();
      return `${pathname}${query ? `?${query}` : ""}`;
    };
  }, [pathname, searchParams]);

  return (
    <section className="fade-in-up space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">
            {subtitle}
          </p>
          <h3 className="text-4xl font-semibold text-black sm:text-5xl">
            {title}
          </h3>
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-black/60">
          Loading profiles…
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-black/60">
          No profiles available right now.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((profile) => {
            const image =
              profile.defaultMedia?.lg || profile.defaultMedia?.xs || "";
            const blur = profile.defaultMedia?.blurThumbnail ?? undefined;
            const location = profile.locations?.[0]?.name ?? "Berlin";
            const distance = profile.distance
              ? `Distance ${profile.distance} km`
              : null;
            const slugValue = profile.slug;
            const idValue = profile.id;
            const profileUrl = slugValue
              ? `${localePrefix}/profiles/${encodeURIComponent(slugValue)}`
              : null;
            return (
              <article
                key={`${profile.name}-${profile.id ?? profile.slug ?? "card"}`}
                className={`group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.16)] ${
                  profileUrl ? "cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (!profileUrl) return;
                  router.push(profileUrl);
                }}
                onKeyDown={(event) => {
                  if (!profileUrl) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(profileUrl);
                  }
                }}
                role={profileUrl ? "button" : undefined}
                tabIndex={profileUrl ? 0 : undefined}
              >
                <div className="relative aspect-[4/5]">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${profile.name} profile`}
                      className="object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      placeholder={blur ? "blur" : "empty"}
                      blurDataURL={blur}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[var(--shell)] text-sm text-black/50">
                      No image available
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                    <p className="text-lg font-semibold">
                      {profile.name}
                      {profile.age ? `, ${profile.age}` : ""}
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                      {location}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-black/70">
                    {distance ? (
                      <span className="rounded-full border border-black/10 bg-white px-3 py-1">
                        {distance}
                      </span>
                    ) : null}
                    {profile.visits?.length
                      ? profile.visits.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-black/10 bg-white px-3 py-1"
                          >
                            {tag.replace(/_/g, " ")}
                          </span>
                        ))
                      : null}
                  </div>
                  <p className="text-sm text-black/60 line-clamp-2">
                    {profile.short_biopic || "Available on request"}
                  </p>
                  <div className="flex items-center justify-between text-sm font-semibold text-black/70">
                    <span>Available on request</span>
                    <Link
                      className="rounded-full bg-[#CF1C72] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(207,28,114,0.32)] transition hover:-translate-y-0.5"
                      href={`${localePrefix}/contact?attendant=${encodeURIComponent(
                        profile.name
                      )}${slugValue ? `&slug=${slugValue}` : ""}${
                        idValue ? `&id=${idValue}` : ""
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-black/70 transition hover:border-black/30 disabled:pointer-events-none disabled:opacity-50"
            href={buildPageHref(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage <= 1}
          >
            Prev
          </Link>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;
            return (
              <Link
                key={page}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-black bg-black !text-white"
                    : "border-black/10 bg-white text-black/70 hover:border-black/30"
                }`}
                href={buildPageHref(page)}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </Link>
            );
          })}
          <Link
            className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-black/70 transition hover:border-black/30 disabled:pointer-events-none disabled:opacity-50"
            href={buildPageHref(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage >= totalPages}
          >
            Next
          </Link>
        </div>
      ) : null}
    </section>
  );
}
