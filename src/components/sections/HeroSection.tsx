import { DATA } from "@/config/data";
import { HeroFadeUp } from "@/components/animations/HeroFadeUp";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const CornerMark = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M1 1H8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 1V8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-bg px-6 pb-16 pt-24 sm:px-8 lg:px-12">
      {/* 1. Atmospheric Ambient Lighting Layers (Harmonized with ContactSection) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[550px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[380px] -translate-x-1/2 rounded-full bg-brand-warm/[0.03] blur-[130px]" />

      {/* 2. Grid Background with Radial Vignette Masking (Consistent Continuous System) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* 3. Subtle Grain Texture for Velvet Matte Finish */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start text-left lg:col-span-7">
          <HeroFadeUp delay={0.1}>
            <div className="mb-6 flex items-center gap-2 rounded-md border border-brand-border bg-brand-surface/70 px-3 py-1.5 font-mono text-xs text-brand-text-muted backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-warm opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-warm" />
              </span>
              <span>status --available-for-work</span>
            </div>
          </HeroFadeUp>

          <HeroFadeUp delay={0.2}>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-brand-text sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
              <span>Saya </span>
              <span className="relative inline-block text-brand-accent">
                {DATA.name}
                <svg className="pointer-events-none absolute -bottom-1 left-0 h-2 w-full text-brand-accent" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M1 5.5C40 2 160 2 199 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" pathLength={1} className="animate-draw-underline" style={{ strokeDasharray: 1, strokeDashoffset: 1 }} />
                </svg>
              </span>
            </h1>
          </HeroFadeUp>

          <HeroFadeUp delay={0.3}>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[2px] w-10 rounded-full bg-brand-accent sm:w-12" />
              <h2 className="text-lg font-semibold text-brand-text/90 sm:text-2xl">{DATA.role}</h2>
            </div>
          </HeroFadeUp>

          <HeroFadeUp delay={0.4}>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-brand-text-muted sm:text-lg">{DATA.description}</p>
          </HeroFadeUp>

          <HeroFadeUp delay={0.5}>
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex h-12 items-center justify-center rounded-lg bg-brand-accent px-6 text-sm font-bold text-brand-bg transition-colors duration-300 hover:bg-brand-accent-hover">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Unduh CV
                </Link>
              </Magnetic>

              <Magnetic>
                <Link href="#proyek" className="group inline-flex h-12 items-center justify-center rounded-lg border border-brand-border bg-brand-surface/70 px-6 text-sm font-medium text-brand-text-muted backdrop-blur-sm transition-colors duration-300 hover:border-brand-accent/50 hover:text-brand-text">
                  Lihat Karya
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </HeroFadeUp>

          <HeroFadeUp delay={0.6}>
            <div className="flex w-full max-w-md items-center gap-4 border-t border-brand-border pt-6">
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-brand-text-muted">Temukan Saya Di</span>
              <div className="flex gap-3">
                <Link href={DATA.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-surface text-brand-text transition-colors duration-300 hover:border-brand-accent/50 hover:text-brand-accent">
                  <GithubIcon className="h-5 w-5" />
                </Link>
                <Link href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-surface text-brand-text transition-colors duration-300 hover:border-brand-accent/50 hover:text-brand-accent">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link href={DATA.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-surface text-brand-text transition-colors duration-300 hover:border-brand-accent/50 hover:text-brand-accent">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </HeroFadeUp>
        </div>

        {/* Right: Photo Area with Dedicated Focal Point Lighting & Atmosphere */}
        <div className="relative mt-8 w-full lg:col-span-5 lg:mt-0 lg:pl-6">
          <HeroFadeUp delay={0.4} direction="left">
            <div className="group relative">
              {/* 1. Dynamic Breathing Ambient Halo directly around the photo */}
              <div className="animate-ambient-pulse pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl bg-brand-accent/16 blur-[90px] transition-all duration-700 group-hover:bg-brand-accent/26 group-hover:blur-[110px]" />

              {/* 2. Top-Right Corner Light Bloom */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-56 w-56 rounded-full bg-brand-accent/20 blur-[70px] transition-all duration-700 group-hover:bg-brand-accent/30" />

              {/* 3. Bottom Warmth Light Accent */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-44 w-44 rounded-full bg-brand-warm/[0.05] blur-[60px]" />

              {/* 4. Photo Frame with Glassmorphism Elevation */}
              <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-surface/85 sm:h-[460px] lg:h-[580px] xl:h-[620px] shadow-[0_0_50px_-15px_rgba(91,127,166,0.22)] backdrop-blur-sm transition-all duration-500 hover:border-brand-accent/60 hover:shadow-[0_0_65px_-10px_rgba(91,127,166,0.35)]">
                <Image
                  src="/profile.jpeg"
                  alt={DATA.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent" />
                <CornerMark className="pointer-events-none absolute left-3 top-3 text-brand-accent/60 transition-colors group-hover:text-brand-accent" />
                <CornerMark className="pointer-events-none absolute right-3 top-3 -scale-x-100 text-brand-accent/60 transition-colors group-hover:text-brand-accent" />
                <CornerMark className="pointer-events-none absolute bottom-3 left-3 -scale-y-100 text-brand-accent/60 transition-colors group-hover:text-brand-accent" />
                <CornerMark className="pointer-events-none absolute bottom-3 right-3 -scale-x-100 -scale-y-100 text-brand-accent/60 transition-colors group-hover:text-brand-accent" />
              </div>
            </div>
          </HeroFadeUp>
        </div>
      </div>
    </section>
  );
}