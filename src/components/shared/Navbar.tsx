"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center px-6 pt-6 lg:px-12"
    >
      <div className="flex w-full max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-lg font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-transform group-hover:scale-105">
            ✨
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Diana<span className="text-sky-500">.</span>
          </span>
        </Link>

        {/* Menu Navigasi */}
        <nav className="hidden items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-2 shadow-[0_0_20px_rgba(14,165,233,0.08)] backdrop-blur-md lg:flex">
          <Link
            href="/"
            className="rounded-full bg-sky-600/20 px-5 py-2 text-sm font-medium text-white"
          >
            Beranda
          </Link>

          <Link
            href="#tentang"
            className="px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Tentang
          </Link>

          <Link
            href="#keahlian"
            className="px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Keahlian
          </Link>

          <Link
            href="#proyek"
            className="px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Projek
          </Link>
        </nav>

        {/* Tombol Hubungi Saya */}
        <Link
          href="#kontak"
          className="hidden items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/50 px-6 py-2.5 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all hover:border-sky-500/50 hover:bg-sky-950/30 hover:text-white sm:flex"
        >
          Hubungi Saya
          <span className="text-sky-500">↗</span>
        </Link>

      </div>
    </motion.header>
  );
}