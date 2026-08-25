"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#keahlian" },
  { name: "Projek", href: "#proyek" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      const sections = ["kontak", "proyek", "keahlian", "tentang"];
      const scrollPosition = currentScrollY + 160;

      if (currentScrollY < 100) {
        setActiveSection("/");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionId}`);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`fixed left-0 right-0 top-0 z-[100] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "px-4 pt-3 sm:pt-3.5" : "px-4 pt-5 sm:pt-6"
      }`}
    >
      <div className="relative flex items-center justify-center">
        
        {/* Desktop & Tablet Navigation Pill (Centered Glass Dock) */}
        <nav
          aria-label="Navigasi Utama"
          className={`hidden sm:flex items-center gap-1 sm:gap-1.5 rounded-full p-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "border border-brand-border/90 bg-brand-surface/80 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-md"
              : "border border-brand-border/60 bg-brand-surface/40 shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.04)] backdrop-blur-md"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 select-none ${
                  isActive
                    ? "border border-brand-accent/35 bg-brand-accent/15 font-semibold text-brand-accent shadow-[0_0_14px_rgba(91,127,166,0.22)]"
                    : "border border-transparent text-brand-text-muted hover:bg-brand-surface/80 hover:text-brand-text"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Subtle Vertical Divider */}
          <div className="mx-1 h-4 w-px bg-brand-border/80" />

          {/* Tombol Hubungi Saya (Translucent Glass CTA) */}
          <Link
            href="#kontak"
            className="group relative inline-flex items-center gap-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/15 px-4 py-2 text-sm font-medium text-brand-accent shadow-[0_0_14px_rgba(91,127,166,0.15)] transition-all duration-300 select-none hover:border-brand-accent/50 hover:bg-brand-accent hover:text-brand-bg"
          >
            <span>Hubungi Saya</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </nav>

        {/* Mobile Navigation Pill (sm:hidden) */}
        <div
          className={`flex sm:hidden items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "border border-brand-border/90 bg-brand-surface/85 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
              : "border border-brand-border/60 bg-brand-surface/50 shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-brand-text">
            {NAV_ITEMS.find((item) => item.href === activeSection)?.name || (activeSection === "#kontak" ? "Kontak" : "Menu")}
          </span>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
            className="flex h-7 w-7 items-center justify-center rounded-full text-brand-text-muted transition-colors hover:text-brand-text"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Sheet (sm:hidden) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-1/2 top-full mt-2.5 flex w-56 -translate-x-1/2 flex-col gap-1 rounded-2xl border border-brand-border/90 bg-brand-surface/95 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-md z-50"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border border-brand-accent/35 bg-brand-accent/15 font-semibold text-brand-accent"
                        : "border border-transparent text-brand-text-muted hover:bg-brand-surface/80 hover:text-brand-text"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(91,127,166,0.8)]" />
                    )}
                  </Link>
                );
              })}

              <div className="my-1 h-px bg-brand-border/60" />

              <Link
                href="#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-brand-accent/30 bg-brand-accent/15 px-3.5 py-2.5 text-sm font-medium text-brand-accent shadow-[0_0_14px_rgba(91,127,166,0.15)] transition-all hover:bg-brand-accent hover:text-brand-bg"
              >
                <span>Hubungi Saya</span>
                <span className="text-xs">↗</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}