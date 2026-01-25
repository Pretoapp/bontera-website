// src/components/home/ProjectsCarousel.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - PREMIUM PROJECTS CAROUSEL
// Luxury animated carousel for featured projects showcase
// ═══════════════════════════════════════════════════════════════════════════

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  year: string;
  value: string;
  client: string;
  imageUrl: string;
  href: string;
};

type Props = {
  projects: Project[];
  locale: string;
  isRTL?: boolean;
  labels: {
    viewProject: string;
    projectValue: string;
    client: string;
    year: string;
  };
};

/* ═══════════════════════════════════════════════════════════════════════════
   CAROUSEL COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ProjectsCarousel({ projects, locale, isRTL = false, labels }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const totalProjects = projects.length;

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || totalProjects <= 1) return;

    const interval = setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % totalProjects);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [totalProjects]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [totalProjects]);

  if (totalProjects === 0) return null;

  const activeProject = projects[activeIndex];
  const nextIndex = (activeIndex + 1) % totalProjects;
  const prevIndex = (activeIndex - 1 + totalProjects) % totalProjects;

  return (
    <div className="relative">
      {/* Main Carousel Container */}
      <div className="grid lg:grid-cols-12 gap-0 lg:gap-8 items-stretch min-h-[600px] lg:min-h-[700px]">

        {/* Left Side - Project Info */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center order-2 lg:order-1 py-8 lg:py-0">
          <div className="relative">
            {/* Project Counter */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl lg:text-8xl font-light text-bontera-navy-200/30">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-bontera-navy-300 to-transparent" />
              <span className="text-sm text-bontera-grey-500 tracking-wider">
                / {String(totalProjects).padStart(2, "0")}
              </span>
            </div>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-bontera-navy-600 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              {activeProject.category}
            </span>

            {/* Project Title */}
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-bontera-grey-900 leading-tight mb-6 transition-all duration-500">
              {activeProject.title}
            </h3>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {activeProject.location && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <span className="text-xs text-bontera-grey-500 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-medium text-bontera-grey-900">{activeProject.location}</span>
                  </div>
                </div>
              )}
              {activeProject.year && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <div>
                    <span className="text-xs text-bontera-grey-500 uppercase tracking-wider block">{labels.year}</span>
                    <span className="text-sm font-medium text-bontera-grey-900">{activeProject.year}</span>
                  </div>
                </div>
              )}
              {activeProject.value && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-xs text-bontera-grey-500 uppercase tracking-wider block">{labels.projectValue}</span>
                    <span className="text-sm font-medium text-bontera-grey-900">{activeProject.value}</span>
                  </div>
                </div>
              )}
              {activeProject.client && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-bontera-navy-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <div>
                    <span className="text-xs text-bontera-grey-500 uppercase tracking-wider block">{labels.client}</span>
                    <span className="text-sm font-medium text-bontera-grey-900 truncate max-w-[150px]">{activeProject.client}</span>
                  </div>
                </div>
              )}
            </div>

            {/* View Project Button */}
            <Link
              href={activeProject.href}
              className="group inline-flex items-center gap-3 bg-bontera-navy-600 hover:bg-bontera-navy-700 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              {labels.viewProject}
              <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={goPrev}
                className="w-12 h-12 border border-bontera-grey-300 hover:border-bontera-navy-600 hover:bg-bontera-navy-600 hover:text-white flex items-center justify-center transition-all duration-300 text-bontera-grey-600"
                aria-label="Previous project"
              >
                <svg className={`w-5 h-5 ${isRTL ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-12 h-12 border border-bontera-grey-300 hover:border-bontera-navy-600 hover:bg-bontera-navy-600 hover:text-white flex items-center justify-center transition-all duration-300 text-bontera-grey-600"
                aria-label="Next project"
              >
                <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Progress Indicators */}
              <div className="flex items-center gap-2 ml-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-bontera-navy-600"
                        : "w-4 bg-bontera-grey-300 hover:bg-bontera-grey-400"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="lg:col-span-7 xl:col-span-8 relative order-1 lg:order-2">
          {/* Main Image */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-full min-h-[500px] overflow-hidden">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeIndex
                    ? "opacity-100 scale-100 z-10"
                    : index === (direction === "next" ? prevIndex : nextIndex)
                    ? "opacity-0 scale-105 z-0"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={index === 0}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden" />
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-bontera-navy-600 hidden lg:block" />
            <div className="absolute top-0 right-0 w-24 h-24 border-4 border-white/20 hidden lg:block" />
          </div>

          {/* Thumbnail Preview Strip */}
          <div className="absolute bottom-8 right-8 hidden lg:flex gap-3 z-20">
            {projects.slice(0, 4).map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? "ring-2 ring-white ring-offset-2 ring-offset-bontera-navy-900"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 h-1 bg-bontera-navy-600/20 w-full">
          <div
            className="h-full bg-bontera-navy-600 animate-progress"
            style={{ animationDuration: "5s" }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
