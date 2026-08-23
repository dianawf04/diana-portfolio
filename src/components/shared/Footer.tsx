"use client";

import { DATA } from "@/config/data";
import { ArrowUp } from "lucide-react"; // Menghapus import Instagram dari sini
import Link from "next/link";

// Komponen SVG kustom untuk GitHub, LinkedIn, dan Instagram
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// Komponen SVG kustom BARU untuk Instagram
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-16 pb-8 px-6 lg:px-12 overflow-hidden border-t border-neutral-800/50">
      
      {/* Efek Glow Tipis Biru di Belakang Footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Bagian Atas: Logo, Menu Navigasi, Sosial Media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-6">
          
          {/* 1. Logo & Deskripsi Singkat */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-105">
                ✨
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Diana<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Mengembangkan arsitektur backend yang solid dan aplikasi web modern yang dirancang untuk performa tinggi.
            </p>
          </div>

          {/* 2. Menu Navigasi (Tengah) */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="#" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Beranda</Link>
            <Link href="#tentang" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Tentang</Link>
            <Link href="#layanan" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Layanan</Link>
            <Link href="#keahlian" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Keahlian</Link>
            <Link href="#proyek" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Proyek</Link>
            <Link href="#kontak" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Kontak</Link>
          </nav>

          {/* 3. Sosial Media & Tombol Ke Atas (Kanan) */}
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon, href: "#" },
              { icon: LinkedinIcon, href: "#" },
              { icon: InstagramIcon, href: "#" }, // Menggunakan InstagramIcon kustom
            ].map((social, index) => (
              <Link 
                key={index}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-400 transition-all hover:bg-blue-950/40 hover:text-blue-400 hover:border-blue-900"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
            
            {/* Tombol Scroll to Top Bercahaya Biru */}
            <a 
              href="#" 
              onClick={scrollToTop}
              className="flex h-11 w-11 ml-2 items-center justify-center rounded-xl bg-blue-600 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Garis Pemisah */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

        {/* Bagian Bawah: Hak Cipta & Tech Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} {DATA.name}. Portfolio
          </p>
          <p className="text-center sm:text-right">
            Dibuat dengan Next.js, Tailwind CSS, PHP & Laravel 12.
          </p>
        </div>
        
      </div>
    </footer>
  );
}