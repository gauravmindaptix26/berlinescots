import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FooterSection from "../../../components/FooterSection";
import { blogPosts } from "../posts";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | EscortBerlin.de`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--shell)]">
      <div className="mx-auto flex min-h-screen max-w-[900px] flex-col gap-12 px-6 pb-16 pt-10 sm:px-10">
        <Header />
        <main className="space-y-10">
          <Link
            href=".."
            className="text-sm font-semibold text-black/60 hover:text-black"
          >
            ← Back to blog
          </Link>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
              {post.date} • {post.readingTime}
            </p>
            <h1 className="text-4xl font-semibold text-black sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-base text-black/70 sm:text-lg">{post.excerpt}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[26px]">
            <Image
              src={post.cover}
              alt={post.title}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-black/80">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[24px] border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
              Ready to book?
            </p>
            <p className="mt-2 text-base text-black/70">
              Share your preferred date and occasion. Our concierge team will
              respond quickly with curated options.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="../../booking-guidelines"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                Booking Guidelines
              </Link>
              <Link
                href="../../contact"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </main>
      </div>
      <FooterSection />
    </div>
  );
}
