import type { Metadata } from "next";
import BlogPostPage from "../../../blog/[slug]/page";
import { blogPosts } from "../../../blog/posts";
import { defaultLocale, Locale, locales } from "../../../../i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["de", "en"].flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const safeLocale = getLocale(locale);
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | EscortBerlin.de`,
    description: post.excerpt,
    alternates: {
      canonical: `/${safeLocale.startsWith("en") ? "en" : "de"}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        de: `/de/blog/${slug}`,
      },
    },
  };
}

export default function LocaleBlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  return <BlogPostPage params={{ slug: params.slug }} />;
}
