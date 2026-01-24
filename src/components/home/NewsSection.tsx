import Link from "next/link";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { getTranslations } from "next-intl/server";
import { urlFor } from "@/lib/sanity/image";

export type NewsItem = {
  _id: string;
  title: string;
  slug?: string | { current?: string };
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  mainImage?: SanityImageSource | null;
};

function getSlug(slug: NewsItem["slug"]) {
  return typeof slug === "string" ? slug : slug?.current;
}

function NewsCard({
  item,
  locale,
  seeMoreLabel,
}: {
  item: NewsItem;
  locale: string;
  seeMoreLabel: string;
}) {
  const slug = getSlug(item.slug);

  const imageSrc = item.mainImage
    ? urlFor(item.mainImage).width(900).height(700).quality(85).url()
    : null;

  return (
    <article className="card-bontera overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 260px"
            />
          ) : (
            <div className="h-full w-full bg-bontera-grey-100" />
          )}
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-bontera-grey-900">
            {item.title}
          </h3>

          {/* Grey divider (replaces divider-bontera / navy) */}
         <div className="mt-5 h-[3px] w-14 rounded-full bg-bontera-navy-600" />


          {item.excerpt ? (
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-bontera-grey-600">
              {item.excerpt}
            </p>
          ) : null}

          <div className="mt-6">
            <Link
              href={slug ? `/${locale}/news/${slug}` : `/${locale}/news`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 hover:text-bontera-navy-700 transition-colors"

            >
              {seeMoreLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function NewsSection({
  locale,
  items,
}: {
  locale: string;
  items: NewsItem[];
}) {
  const t = await getTranslations({ locale, namespace: "newsSection" });
  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
  <span className="relative inline-block overflow-hidden text-white bg-gradient-to-b from-bontera-navy-800 to-bontera-navy-900 px-5 py-3 md:px-6 md:py-3.5 rounded-[22px] ring-1 ring-bontera-grey-200/70 shadow-[0_18px_55px_rgba(15,23,42,0.14)] antialiased">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_18%_22%,rgba(255,255,255,0.14),transparent_55%)]"
    />
    <span className="relative">{t("title")}</span>
  </span>
</h2>


          {/* Grey divider (center) */}
         <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-bontera-navy-600" />

        </div>

        {hasItems ? (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <NewsCard
                key={item._id}
                item={item}
                locale={locale}
                seeMoreLabel={t("seeMore")}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl card-bontera p-6 text-center text-bontera-grey-600">
            {t("empty")}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 rounded-full bg-bontera-navy-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(17,24,39,0.14)] hover:bg-bontera-navy-700 transition-colors"

          >
            {t("discoverAll")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
