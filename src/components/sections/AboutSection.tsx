import { Reveal } from "@/components/animations/Reveal";
import {
  User,
  Server,
  Database,
  Layers,
  Cpu,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const CornerMark = ({ className }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
    <path d="M1 1H6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 1V6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FOCUS_CARDS = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Membangun arsitektur server yang kokoh, terstruktur, dan skalabel dengan ekosistem PHP & Laravel 12.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Merancang skema relasional, optimasi query, dan integritas data yang efisien menggunakan MySQL.",
  },
  {
    icon: Layers,
    title: "Modern Frontend",
    desc: "Mengembangkan antarmuka pengguna yang bersih, responsif, dan dinamis dengan Tailwind CSS & React/Next.js.",
  },
  {
    icon: Cpu,
    title: "Sistem & Otomasi",
    desc: "Mengembangkan solusi end-to-end seperti sistem pengolahan nilai, verifikasi, dan otomasi transkrip PDF.",
  },
];

export function AboutSection() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-brand-bg px-6 py-28 lg:px-12">
      {/* 1. Atmospheric Ambient Lighting Layers (Subtle & Diagonally Balanced) */}
      <div className="animate-float-slow pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[620px] rounded-full bg-brand-accent/[0.05] dark:bg-brand-accent/8 blur-[150px]" />
      <div className="animate-float-reverse pointer-events-none absolute -right-20 bottom-1/4 h-[420px] w-[500px] rounded-full bg-brand-warm/[0.02] dark:bg-brand-warm/[0.035] blur-[140px]" />

      {/* 2. Grid Background with Radial Vignette Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* Subtle Background Technical Crosshairs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-30 dark:opacity-20 font-mono text-[10px] text-brand-accent/60">
        <span className="absolute left-[8%] top-[12%]">+</span>
        <span className="absolute right-[10%] bottom-[15%]">+</span>
      </div>

      {/* 3. Subtle Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.025] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Narrative Story & Junior Programming Card */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Section Header */}
            <Reveal>
              <div className="flex flex-col items-start">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/70 px-3.5 py-1.5 font-mono text-xs text-brand-text-muted shadow-[0_2px_10px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md">
                  <User className="h-3.5 w-3.5 text-brand-accent" />
                  <span className="font-semibold text-brand-text/90">tentang --saya</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl md:text-5xl">
                  Di Balik <span className="text-brand-accent">Kode & Arsitektur</span>
                </h2>
              </div>
            </Reveal>

            {/* Narrative Story with subtle vertical anchor line */}
            <Reveal delay={0.15}>
              <div className="relative border-l-2 border-brand-accent/20 pl-5 space-y-4 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(91,127,166,0.8)]" />
                <p>
                  Halo! Saya adalah seorang pengembang web yang berfokus pada arsitektur
                  <span className="font-medium text-brand-text"> backend </span> dan manajemen basis data.
                  Bagi saya, menulis kode bukan sekadar membuat aplikasi berjalan, melainkan menyusun sistem yang terstruktur, aman, dan efisien dari balik layar.
                </p>
                <p>
                  Perjalanan saya banyak dihabiskan mengeksplorasi ekosistem{" "}
                  <span className="font-medium text-brand-accent">PHP & Laravel</span>, merancang relasi data di{" "}
                  <span className="font-medium text-brand-accent">MySQL</span>, hingga memastikan antarmuka pengguna tetap modern dan responsif menggunakan{" "}
                  <span className="font-medium text-brand-accent">Tailwind CSS</span>.
                </p>
                <p>
                  Baru-baru ini, saya merancang dan mengembangkan sistem otomatisasi pemrosesan nilai serta transkrip akademik secara end-to-end, mengasah insting saya dalam menangani arsitektur data, penanganan protokol server lokal, dan otomasi dokumen.
                </p>
              </div>
            </Reveal>

            {/* Official Certification Card (Junior Programming) */}
            <Reveal delay={0.25}>
              <div className="group relative mt-2 flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-brand-border/90 bg-gradient-to-r from-brand-surface/95 via-brand-surface/80 to-brand-surface/60 dark:from-brand-surface/80 dark:via-brand-surface/60 dark:to-brand-surface/40 p-5 backdrop-blur-md shadow-[0_6px_24px_rgba(15,23,42,0.06)] dark:shadow-none transition-all duration-300 hover:border-brand-accent/50 hover:shadow-[0_10px_32px_-8px_rgba(67,110,155,0.2)] dark:hover:shadow-[0_0_30px_-10px_rgba(91,127,166,0.25)]">
                {/* Top specular highlight edge */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/10 text-brand-accent shadow-[0_0_15px_rgba(91,127,166,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-brand-text sm:text-base">
                        Sertifikasi Junior Programming
                      </p>
                      <span className="hidden items-center gap-1 rounded-full bg-brand-accent/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-accent sm:inline-flex">
                        <CheckCircle2 className="h-3 w-3" /> Terverifikasi
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-brand-text-muted">
                      LSP TIK Indonesia • Standar Kompetensi BNSP
                    </p>
                  </div>
                </div>

                <CornerMark className="absolute right-3.5 top-3.5 text-brand-accent/40 transition-colors group-hover:text-brand-accent" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Compact Cards in a 2x2 Grid */}
          <div className="lg:col-span-6 lg:pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {FOCUS_CARDS.map((card, i) => (
                <Reveal key={card.title} delay={0.2 + i * 0.1}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-brand-border/90 bg-gradient-to-b from-brand-surface/95 via-brand-surface/85 to-brand-surface/60 dark:from-brand-surface/85 dark:via-brand-surface/55 dark:to-brand-surface/30 p-5 sm:p-6 backdrop-blur-md shadow-[0_6px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_14px_32px_-8px_rgba(67,110,155,0.18)] dark:hover:shadow-[0_0_30px_-8px_rgba(91,127,166,0.22)]">
                    {/* Top specular highlight edge */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/35 to-transparent" />

                    {/* Subtle Inner Glow on Hover */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-accent/0 blur-2xl transition-all duration-500 group-hover:bg-brand-accent/15" />

                    <div>
                      {/* Top bar with Icon and Card Index */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/10 text-brand-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white shadow-[0_0_12px_rgba(91,127,166,0.15)]">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-brand-accent/60 group-hover:text-brand-accent transition-colors">
                          0{i + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-base font-bold text-brand-text transition-colors group-hover:text-brand-accent sm:text-lg">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs leading-relaxed text-brand-text-muted sm:text-sm">
                        {card.desc}
                      </p>
                    </div>

                    <CornerMark className="absolute right-3 top-3 text-brand-accent/25 transition-colors group-hover:text-brand-accent/70" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}