import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | EscortBerlin.de",
  description:
    "Insights and guides on discreet companionship, premium coordination, and refined experiences in Berlin.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[var(--shell)]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-12 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Header />
        <main className="space-y-12">
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
              Blog
            </p>
            <h1 className="text-4xl font-semibold text-black sm:text-5xl">
              EscortBerlin.de Insights
            </h1>
            <p className="max-w-2xl text-base text-black/70 sm:text-lg">
              Discretion, premium coordination, and refined experiences. Explore
              guides and updates from our concierge team.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-black">
                    {post.title}
                  </h2>
                  <p className="text-sm text-black/65">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                    href={`./${post.slug}`}
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
