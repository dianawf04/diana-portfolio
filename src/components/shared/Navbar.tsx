"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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

const emptySubscribe = () => () => {};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

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
      {/* Desktop Layout: Navigasi benar-benar di tengah, Action Area di kanan */}
      <div className="hidden md:flex w-full max-w-7xl items-center justify-between px-2 sm:px-4">
        
        {/* Left Spacer: Penyeimbang agar Navigasi Tengah benar-benar presisi di tengah horizontal */}
        <div className="flex-1 flex justify-start pointer-events-none" />

        {/* Center: Navigasi Utama (Beranda → Tentang → Keahlian → Projek) */}
        <nav
          aria-label="Navigasi Utama"
          className={`flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "border border-brand-border/90 bg-brand-surface/85 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
              : "border border-brand-border/70 bg-brand-surface/65 dark:bg-brand-surface/40 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 select-none whitespace-nowrap ${
                  isActive
                    ? "border border-brand-accent/35 bg-brand-accent/15 font-semibold text-brand-accent shadow-[0_0_14px_rgba(91,127,166,0.18)]"
                    : "border border-transparent text-brand-text-muted hover:bg-brand-surface/80 hover:text-brand-text"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Action Area (Theme Control & Contact terpisah) */}
        <div className="flex-1 flex items-center justify-end gap-3">
          
          {/* Theme Control Container: Icon Only [ ☀ | ☾ ] */}
          <div
            className={`flex items-center gap-1 rounded-full p-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "border border-brand-border/90 bg-brand-surface/85 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md"
                : "border border-brand-border/70 bg-brand-surface/65 dark:bg-brand-surface/40 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
            }`}
          >
            {/* Light Mode Button */}
            <button
              type="button"
              onClick={() => setTheme("light")}
              aria-label="Mode Terang"
              title="Mode Terang"
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 select-none ${
                mounted && resolvedTheme === "light"
                  ? "bg-brand-surface text-brand-accent border border-brand-border/90 shadow-[0_1px_6px_rgba(0,0,0,0.08)] font-semibold"
                  : "text-brand-text-muted hover:text-brand-text hover:bg-brand-surface/60"
              }`}
            >
              <Sun className="h-3.5 w-3.5 transition-transform duration-300 hover:rotate-45" />
            </button>

            {/* Dark Mode Button */}
            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-label="Mode Gelap"
              title="Mode Gelap"
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 select-none ${
                mounted && resolvedTheme === "dark"
                  ? "bg-brand-accent/20 text-brand-accent border border-brand-accent/35 shadow-[0_0_12px_rgba(91,127,166,0.25)] font-semibold"
                  : "text-brand-text-muted hover:text-brand-text hover:bg-brand-surface/60"
              }`}
            >
              <Moon className="h-3.5 w-3.5 transition-transform duration-300 hover:-rotate-12" />
            </button>
          </div>

          {/* Contact Button Container: Hubungi Saya (Kotak/CTA tersendiri) */}
          <Link
            href="#kontak"
            className={`group relative inline-flex items-center gap-1.5 rounded-full px-4.5 py-2 text-sm font-semibold text-brand-accent transition-all duration-500 select-none active:scale-95 whitespace-nowrap ${
              isScrolled
                ? "border border-brand-accent/40 bg-brand-accent/15 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_0_20px_rgba(91,127,166,0.2)] backdrop-blur-md hover:border-brand-accent/60 hover:bg-brand-accent hover:text-white"
                : "border border-brand-accent/35 bg-brand-accent/15 dark:bg-brand-accent/15 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-[0_0_16px_rgba(91,127,166,0.18)] backdrop-blur-md hover:border-brand-accent/60 hover:bg-brand-accent hover:text-white"
            }`}
          >
            <span>Hubungi Saya</span>
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

        </div>

      </div>

      {/* Mobile Navigation Header (md:hidden) */}
      <div className="relative flex md:hidden items-center justify-center">
        
        {/* Mobile Navigation Pill */}
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "border border-brand-border/90 bg-brand-surface/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
              : "border border-brand-border/70 bg-brand-surface/70 dark:bg-brand-surface/50 shadow-[0_4px_20px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
          }`}
        >
          {/* Active section title or Menu */}
          <span className="text-xs font-mono uppercase tracking-wider text-brand-text font-medium select-none">
            {NAV_ITEMS.find((item) => item.href === activeSection)?.name || (activeSection === "#kontak" ? "Kontak" : "Menu")}
          </span>

          {/* Hamburger button on the right */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border/70 bg-brand-surface/60 text-brand-text-muted transition-colors hover:text-brand-text"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Sheet */}
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
              className="absolute left-1/2 top-full mt-2.5 flex w-60 -translate-x-1/2 flex-col gap-2 rounded-2xl border border-brand-border/90 bg-brand-surface/95 p-2.5 shadow-[0_20px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md z-50"
            >
              {/* GRUP 1: Nav Links */}
              <div className="flex flex-col gap-1">
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
              </div>

              {/* Divider */}
              <div className="my-0.5 h-px bg-brand-border/60" />

              {/* GRUP 2: Theme Control (Glass Container with Icon Only [ ☀ | ☾ ]) */}
              <div className="flex items-center justify-between rounded-xl border border-brand-border/70 bg-brand-surface/60 p-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-text-muted font-medium pl-1.5">
                  Tema
                </span>
                <div className="flex items-center gap-1 rounded-full border border-brand-border/70 bg-brand-surface/80 p-0.5">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
                      mounted && resolvedTheme === "light"
                        ? "bg-brand-surface text-brand-accent border border-brand-border shadow-sm font-semibold"
                        : "text-brand-text-muted hover:text-brand-text"
                    }`}
                    aria-label="Mode Terang"
                  >
                    <Sun className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-brand-accent/20 text-brand-accent border border-brand-accent/35 font-semibold"
                        : "text-brand-text-muted hover:text-brand-text"
                    }`}
                    aria-label="Mode Gelap"
                  >
                    <Moon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* GRUP 3: Contact Button */}
              <Link
                href="#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-brand-accent/35 bg-brand-accent/15 px-3.5 py-2.5 text-sm font-semibold text-brand-accent shadow-[0_0_14px_rgba(91,127,166,0.15)] transition-all hover:bg-brand-accent hover:text-white active:scale-98"
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