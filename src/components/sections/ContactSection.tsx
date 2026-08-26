"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Mail, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { DATA } from "@/config/data";

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

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-brand-bg px-6 py-32 lg:px-12 lg:py-40"
    >
      {/* 1. Singular Strong Focal Ambient Glow */}
      <div className="animate-float-slow pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/[0.07] dark:bg-brand-accent/14 blur-[160px]" />
      <div className="animate-float-reverse pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[440px] -translate-x-1/2 rounded-full bg-brand-warm/[0.02] dark:bg-brand-warm/[0.035] blur-[140px]" />

      {/* 2. Grid Background with Radial Vignette Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* Subtle Background Technical Crosshairs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-30 dark:opacity-20 font-mono text-[10px] text-brand-accent/60">
        <span className="absolute left-[15%] top-[20%]">+</span>
        <span className="absolute right-[15%] top-[20%]">+</span>
        <span className="absolute left-[15%] bottom-[20%]">+</span>
        <span className="absolute right-[15%] bottom-[20%]">+</span>
      </div>

      {/* 3. Subtle Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.025] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Eyebrow */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/70 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-brand-text-muted shadow-[0_2px_10px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span className="uppercase text-brand-text/90">TERBUKA UNTUK PELUANG</span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2 className="text-4xl font-extrabold tracking-tight text-brand-text sm:text-5xl md:text-6xl lg:text-7xl">
            Mari <span className="text-brand-accent">Terhubung.</span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-text-muted sm:text-lg md:text-xl">
            Saya terbuka untuk peluang kerja dan kolaborasi mengenai pengembangan website maupun sistem informasi.
          </p>
        </Reveal>

        {/* Primary CTA: Email Action */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Direct Gmail Compose Button */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-accent px-8 py-4 font-mono text-sm font-bold text-white shadow-[0_0_30px_rgba(67,110,155,0.28)] dark:shadow-[0_0_30px_rgba(91,127,166,0.32)] transition-all duration-300 hover:bg-brand-accent-hover hover:shadow-[0_0_45px_rgba(67,110,155,0.4)] dark:hover:shadow-[0_0_45px_rgba(91,127,166,0.48)] hover:scale-[1.02] active:scale-[0.98] sm:text-base"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              <span>Kirim Email</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
            </a>

            {/* Quick Copy Email Pill */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="group inline-flex items-center gap-2 rounded-2xl border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/60 px-5 py-4 font-mono text-xs font-medium text-brand-text shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent sm:text-sm"
              title="Salin alamat email"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600 dark:text-green-400" />
                  <span className="text-emerald-600 dark:text-green-400 font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-brand-accent transition-transform group-hover:scale-110" />
                  <span>{DATA.contact.email}</span>
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.3}>
          <div className="my-14 h-px w-24 bg-gradient-to-r from-transparent via-brand-border/80 to-transparent sm:w-32" />
        </Reveal>

        {/* Social / Professional Links */}
        <Reveal delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-brand-border/90 bg-brand-surface/75 dark:bg-brand-surface/40 px-5 py-3 font-mono text-xs font-medium text-brand-text/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent hover:shadow-[0_0_20px_rgba(91,127,166,0.18)] hover:-translate-y-0.5"
            >
              <LinkedinIcon className="h-4 w-4 text-brand-accent transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub */}
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-brand-border/90 bg-brand-surface/75 dark:bg-brand-surface/40 px-5 py-3 font-mono text-xs font-medium text-brand-text/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent hover:shadow-[0_0_20px_rgba(91,127,166,0.18)] hover:-translate-y-0.5"
            >
              <GithubIcon className="h-4 w-4 text-brand-accent transition-transform group-hover:scale-110" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}