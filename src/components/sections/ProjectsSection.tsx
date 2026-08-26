"use client";

import { useState } from "react";
import { DATA } from "@/config/data";
import { Reveal } from "@/components/animations/Reveal";
import {
  FolderGit2,
  Globe,
  ArrowUpRight,
  Lock,
  Terminal,
  FileCode2,
  Calendar,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CornerMark = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M1 1H7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 1V7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CATEGORIES = ["Semua", "Sistem Informasi", "Website & Frontend"] as const;

function getProjectCategory(title: string, technologies: string[]): string {
  if (
    technologies.includes("Laravel 12") ||
    technologies.includes("PHP") ||
    technologies.includes("MySQL") ||
    title.toLowerCase().includes("transkrip") ||
    title.toLowerCase().includes("sistem")
  ) {
    return "Sistem Informasi";
  }
  return "Website & Frontend";
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredProjects = DATA.projects.filter((project) => {
    if (activeCategory === "Semua") return true;
    const cat = getProjectCategory(project.title, project.technologies);
    return cat === activeCategory;
  });

  return (
    <section id="proyek" className="relative overflow-hidden bg-brand-bg px-6 py-28 lg:px-12">
      {/* 1. Atmospheric Ambient Lighting Layers */}
      <div className="animate-float-slow pointer-events-none absolute left-1/4 top-1/3 h-[520px] w-[680px] -translate-x-1/2 rounded-full bg-brand-accent/[0.05] dark:bg-brand-accent/8 blur-[150px]" />
      <div className="animate-float-reverse pointer-events-none absolute right-1/4 bottom-10 h-[380px] w-[500px] rounded-full bg-brand-warm/[0.02] dark:bg-brand-warm/[0.035] blur-[140px]" />

      {/* 2. Grid Background with Radial Vignette Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* Subtle Background Technical Crosshairs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-30 dark:opacity-20 font-mono text-[10px] text-brand-accent/60">
        <span className="absolute left-[6%] top-[10%]">+</span>
        <span className="absolute right-[8%] top-[25%]">+</span>
        <span className="absolute left-[10%] bottom-[15%]">+</span>
      </div>

      {/* 3. Subtle Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.025] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header Section: Label -> Heading -> Description -> Category Filter */}
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            {/* Label Kecil */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/70 px-3.5 py-1.5 font-mono text-xs text-brand-text-muted shadow-[0_2px_10px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md">
              <FolderGit2 className="h-3.5 w-3.5 text-brand-accent" />
              <span className="font-semibold text-brand-text/90">portofolio --proyek</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl md:text-5xl">
              Karya & <span className="text-brand-accent">Proyek Pilihan</span>
            </h2>

            {/* Deskripsi */}
            <p className="mt-3 max-w-2xl text-base text-brand-text-muted">
              Koleksi aplikasi web dan sistem informasi yang dirancang dengan fokus pada skalabilitas, performa, dan pengalaman pengguna.
            </p>

            {/* Filter Kategori Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative rounded-xl px-4 py-2 text-xs font-semibold font-mono tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-brand-accent text-white shadow-[0_0_24px_rgba(67,110,155,0.35)] dark:shadow-[0_0_24px_rgba(91,127,166,0.3)] -translate-y-0.5"
                        : "border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/60 text-brand-text-muted hover:border-brand-accent/50 hover:text-brand-text shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Project Grid: 3 Kolom di Desktop, 2 Tablet, 1 Mobile */}
        <motion.div layout className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const category = getProjectCategory(project.title, project.technologies);

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-brand-border/90 bg-gradient-to-b from-brand-surface/95 via-brand-surface/85 to-brand-surface/60 dark:from-brand-surface/85 dark:via-brand-surface/55 dark:to-brand-surface/30 p-5 sm:p-6 backdrop-blur-md shadow-[0_6px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-[0_18px_38px_-10px_rgba(67,110,155,0.2)] dark:hover:shadow-[0_0_35px_-10px_rgba(91,127,166,0.25)]"
                >
                  {/* Top specular highlight edge */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/35 to-transparent" />

                  {/* Subtle Inner Glow on Hover */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-accent/0 blur-3xl transition-all duration-500 group-hover:bg-brand-accent/15" />

                  {/* 1. Image / Visual Preview Container */}
                  <div className="relative mb-5 h-44 sm:h-48 w-full overflow-hidden rounded-xl border border-brand-border/80 bg-gradient-to-br from-brand-bg via-brand-surface/95 to-brand-surface/70 dark:from-brand-bg dark:via-brand-surface/90 dark:to-brand-surface/60 shadow-[0_2px_12px_rgba(15,23,42,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                    {/* Window Titlebar */}
                    <div className="flex h-8 items-center justify-between border-b border-brand-border/80 bg-brand-surface/95 dark:bg-brand-surface/85 px-3 backdrop-blur-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400/80" />
                        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      </div>

                      <div className="flex items-center gap-1.5 rounded-md border border-brand-border/70 bg-brand-bg/80 dark:bg-brand-bg/60 px-2 py-0.5 font-mono text-[9px] text-brand-text-muted">
                        <Lock className="h-2 w-2 text-brand-accent" />
                        <span className="max-w-[110px] truncate sm:max-w-[140px]">
                          {category === "Sistem Informasi" ? "system/transcripts" : "portfolio.app"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-warm animate-pulse" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-text-muted">
                          {project.active ? "Live" : "Archive"}
                        </span>
                      </div>
                    </div>

                    {/* Visual Graphic Content */}
                    <div className="relative flex h-[calc(100%-2rem)] w-full items-center justify-center overflow-hidden p-4">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-accent)_0%,transparent_70%)] opacity-10" />

                      <div className="flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:scale-105">
                        <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/10 text-brand-accent shadow-[0_0_16px_rgba(91,127,166,0.15)] group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                          {category === "Sistem Informasi" ? (
                            <Terminal className="h-5 w-5" />
                          ) : (
                            <FileCode2 className="h-5 w-5" />
                          )}
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-brand-text line-clamp-1 px-2">
                          {project.title}
                        </span>
                      </div>

                      <CornerMark className="absolute right-2 top-2 text-brand-accent/25" />
                      <CornerMark className="absolute left-2 bottom-2 -scale-y-100 text-brand-accent/25" />
                    </div>
                  </div>

                  {/* 2. Category Badge & Date */}
                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-brand-accent font-semibold">
                      <Layers className="h-3 w-3" />
                      {category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-brand-text-muted">
                      <Calendar className="h-3 w-3" />
                      {project.dates}
                    </span>
                  </div>

                  {/* 3. Title */}
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-brand-text transition-colors group-hover:text-brand-accent line-clamp-2">
                    {project.title}
                  </h3>

                  {/* 4. Description */}
                  <p className="mb-5 flex-1 text-xs sm:text-sm leading-relaxed text-brand-text-muted line-clamp-3">
                    {project.description}
                  </p>

                  {/* 5. Tech Stack Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-brand-border/90 bg-brand-bg/90 dark:bg-brand-bg/80 px-2 py-0.5 font-mono text-[10px] font-medium text-brand-text-muted transition-colors group-hover:border-brand-accent/40 group-hover:text-brand-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 6. Footer: Links / Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-brand-border/80 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      {project.links.map((link, i) => {
                        const isGithub =
                          link.icon === "github" ||
                          link.type.toLowerCase().includes("source") ||
                          link.type.toLowerCase().includes("code");
                        const isExternal = link.href.startsWith("http");

                        return (
                          <Link
                            key={i}
                            href={link.href}
                            target={isExternal ? "_blank" : "_self"}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={`group/link inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                              isGithub
                                ? "border border-brand-border/90 bg-brand-surface dark:bg-brand-bg/80 text-brand-text shadow-[0_2px_6px_rgba(15,23,42,0.04)] dark:shadow-none hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent"
                                : "border border-brand-accent/30 bg-brand-accent/15 text-brand-accent shadow-[0_0_12px_rgba(91,127,166,0.15)] hover:bg-brand-accent hover:text-white"
                            }`}
                          >
                            {isGithub ? (
                              <GithubIcon className="h-3.5 w-3.5 transition-transform group-hover/link:scale-110" />
                            ) : (
                              <Globe className="h-3.5 w-3.5 transition-transform group-hover/link:scale-110" />
                            )}
                            <span>{link.type}</span>
                            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <CornerMark className="absolute right-3 top-3 text-brand-accent/25 transition-colors group-hover:text-brand-accent/70" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}