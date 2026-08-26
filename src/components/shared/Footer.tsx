"use client";

import { DATA } from "@/config/data";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

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

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Projek", href: "#proyek" },
  { label: "Hubungi Saya", href: "#kontak" },
];

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-brand-bg px-6 py-12 sm:py-14 lg:px-12 border-t border-brand-border/60 dark:border-brand-border/40">
      {/* Subtle Bottom Ambient Bloom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[180px] w-[520px] rounded-full bg-brand-accent/[0.03] dark:bg-brand-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-10">
        {/* Top Row: Identity, Navigation, Social Links */}
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 md:flex-row md:items-center">
          {/* Identity: Name & Role */}
          <div className="flex flex-col gap-0.5">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-brand-text">
              {DATA.name}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-wider text-brand-accent">
              {DATA.role}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative font-mono text-xs sm:text-[13px] text-brand-text-muted transition-colors duration-200 hover:text-brand-text"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-brand-border/80 bg-brand-surface/70 dark:bg-brand-surface/40 text-brand-text-muted shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent hover:shadow-[0_0_16px_rgba(91,127,166,0.18)] hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-brand-border/80 bg-brand-surface/70 dark:bg-brand-surface/40 text-brand-text-muted shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-surface hover:text-brand-accent hover:shadow-[0_0_16px_rgba(91,127,166,0.18)] hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href="#"
              onClick={scrollToTop}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-brand-border/80 bg-brand-surface/70 dark:bg-brand-surface/40 text-brand-text-muted shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-accent hover:text-white hover:shadow-[0_0_20px_rgba(91,127,166,0.3)] hover:-translate-y-0.5"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-border/60 to-transparent" />

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-brand-text-muted/80">
            &copy; 2026 {DATA.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}