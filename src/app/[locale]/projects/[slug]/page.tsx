import { client, urlFor } from '@/lib/sanity/client';
import { projectBySlugQuery } from '@/lib/sanity/queries';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

async function getProject(slug: string) {
  return await client.fetch(projectBySlugQuery, { slug });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title?.[locale] || project.title?.de} | Bontera`,
    description: project.description?.[locale] || project.description?.de,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = await getProject(slug);
  const t = await getTranslations({ locale, namespace: 'projects' });

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        {project.mainImage ? (
          <Image
            src={urlFor(project.mainImage).width(1920).height(1080).url()}
            alt={project.title?.[locale] || project.title?.de}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('viewAll')}
            </Link>
            <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 mb-4 uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {project.title?.[locale] || project.title?.de}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description?.[locale] || project.description?.de}
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500 uppercase tracking-wider">{t('details.location')}</dt>
                    <dd className="mt-1 text-gray-900 font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500 uppercase tracking-wider">{t('details.year')}</dt>
                    <dd className="mt-1 text-gray-900 font-medium">{project.year}</dd>
                  </div>
                  {project.client && (
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-wider">{t('details.client')}</dt>
                      <dd className="mt-1 text-gray-900 font-medium">{project.client}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-10">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image: any, index: number) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={urlFor(image).width(800).height(600).url()}
                    alt={`${project.title?.[locale] || project.title?.de} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}