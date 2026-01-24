import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity/client';

type Project = {
  _id: string;
  title?: string;
  slug?: { current?: string } | string;
  category?: string;
  description?: string;
  location?: string;
  year?: number;
  mainImage?: any;
};

type Props = {
  locale: string;
  translations: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewAll: string;
  };
  projects: Project[];
};

function getSlug(slug: Project['slug']) {
  return typeof slug === 'string' ? slug : slug?.current;
}

function imgUrl(image: any, w = 1600, h = 1000) {
  if (!image) return null;
  try {
    return urlFor(image).width(w).height(h).fit('crop').url();
  } catch {
    return null;
  }
}

export default function ProjectsShowcase({ locale, translations, projects }: Props) {
  const items = Array.isArray(projects) ? projects : [];
  const featured = items[0];
  const list = items.slice(0, 5);

  const featuredHref = featured ? `/${locale}/projects/${getSlug(featured.slug) ?? ''}` : `/${locale}/projects`;
  const featuredImg = featured?.mainImage ? imgUrl(featured.mainImage, 1800, 1200) : null;

  return (
    <section className="relative py-20 lg:py-28 bg-bontera-grey-50 overflow-hidden">
      {/* soft background accents (GREY ONLY) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full blur-3xl bg-bontera-grey-200/60" />
        <div className="absolute -bottom-28 right-1/4 w-[460px] h-[460px] rounded-full blur-3xl bg-bontera-grey-300/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* header */}
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-bontera-grey-600">
              {translations.subtitle}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
  <span className="relative inline-block overflow-hidden text-white bg-gradient-to-b from-bontera-navy-800 to-bontera-navy-900 px-5 py-3 sm:px-6 sm:py-3.5 rounded-[22px] ring-1 ring-bontera-grey-200/70 shadow-[0_18px_55px_rgba(15,23,42,0.14)] antialiased">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_18%_22%,rgba(255,255,255,0.14),transparent_55%)]"
    />
    <span className="relative">{translations.title}</span>
  </span>
</h2>


            {/* grey divider */}
            <div className="mt-5 h-[3px] w-14 rounded-full bg-bontera-navy-600" />

          </div>

          <Link
            href={`/${locale}/projects`}
            className="hidden sm:inline-flex items-center gap-3 rounded-xl bg-bontera-grey-900 px-6 py-3 text-white font-semibold shadow-sm hover:bg-bontera-grey-800 transition-colors"
          >
            {translations.viewAll}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* left big card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-bontera-grey-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[560px]">
                {featuredImg ? (
                  <Image
                    src={featuredImg}
                    alt={featured?.title ?? 'Featured project'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-bontera-grey-200 to-bontera-grey-300" />
                )}

                {/* overlay (GREY ONLY) */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
                  <div className="absolute inset-0 bg-bontera-grey-900/10" />
                </div>

                {/* text */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white">
                      {translations.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-2xl">
                    {featured?.title ?? translations.title}
                  </h3>

                  <p className="mt-4 text-white/85 leading-relaxed max-w-md drop-shadow-lg">
                    {featured?.description ??
                      'A curated selection of work that reflects our standards in planning, execution, and finish.'}
                  </p>

                  <div className="mt-7 flex items-center gap-4 text-sm text-white/75">
                    {featured?.location ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {featured.location}
                      </span>
                    ) : null}
                    {featured?.year ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {featured.year}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-8">
                    <Link
                      href={featuredHref}
                      className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-bontera-grey-900 hover:bg-bontera-grey-50 transition-colors shadow-lg shadow-black/20"
                    >
                      {translations.viewProject}
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right cards grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {list.map((p) => {
                const slug = getSlug(p.slug);
                const href = slug ? `/${locale}/projects/${slug}` : `/${locale}/projects`;

                return (
                  <Link
                    key={p._id}
                    href={href}
                    className="group rounded-[1.75rem] bg-white border border-bontera-grey-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-bontera-grey-600">
                          {(p.category ?? 'Project').toString()}
                        </p>

                        <h4 className="mt-3 text-lg font-bold text-bontera-grey-900 line-clamp-2">
                          {p.title ?? 'Untitled'}
                        </h4>

                        <p className="mt-3 text-sm text-bontera-grey-600 line-clamp-2">
                          {p.location ? p.location : p.description ? p.description : 'View details and scope.'}
                        </p>
                      </div>

                      <div className="shrink-0 w-10 h-10 rounded-2xl bg-bontera-grey-100 flex items-center justify-center text-bontera-grey-900 group-hover:bg-bontera-grey-200 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-bontera-grey-500">{p.year ? p.year : ''}</span>
                      <span className="font-semibold text-bontera-grey-900 group-hover:text-bontera-grey-800 transition-colors">
                        {translations.viewProject}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* bottom CTA (mobile) */}
            <div className="mt-8 sm:hidden">
              <Link
                href={`/${locale}/projects`}
                className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-bontera-grey-900 px-6 py-4 text-white font-semibold shadow-sm hover:bg-bontera-grey-800 transition-colors"
              >
                {translations.viewAll}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
