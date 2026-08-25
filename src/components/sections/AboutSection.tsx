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
      {/* 1. Atmospheric Ambient Lighting Layers (Harmonized with ContactSection) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[380px] -translate-x-1/2 rounded-full bg-brand-warm/[0.03] blur-[130px]" />

      {/* 2. Grid Background with Radial Vignette Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* 3. Subtle Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-screen"
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
                <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-surface/70 px-3 py-1.5 font-mono text-xs text-brand-text-muted backdrop-blur-sm">
                  <User className="h-3.5 w-3.5 text-brand-accent" />
                  <span>tentang --saya</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl md:text-5xl">
                  Di Balik <span className="text-brand-accent">Kode & Arsitektur</span>
                </h2>
              </div>
            </Reveal>

            {/* Narrative Story */}
            <Reveal delay={0.15}>
              <div className="space-y-4 text-base leading-relaxed text-brand-text-muted sm:text-lg">
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
              <div className="group relative mt-2 flex items-center justify-between gap-4 rounded-2xl border border-brand-border bg-gradient-to-r from-brand-surface/80 via-brand-surface/60 to-brand-surface/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-brand-accent/50 hover:shadow-[0_0_30px_-10px_rgba(91,127,166,0.25)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent shadow-[0_0_15px_rgba(91,127,166,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-brand-bg">
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

                <CornerMark className="absolute right-3.5 top-3.5 text-brand-accent/30 transition-colors group-hover:text-brand-accent/70" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Compact Cards in a 2x2 Grid */}
          <div className="lg:col-span-6 lg:pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {FOCUS_CARDS.map((card, i) => (
                <Reveal key={card.title} delay={0.2 + i * 0.1}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-b from-brand-surface/85 via-brand-surface/55 to-brand-surface/30 p-5 sm:p-6 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_0_30px_-8px_rgba(91,127,166,0.22)]">
                    {/* Subtle Inner Glow on Hover */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-accent/0 blur-2xl transition-all duration-500 group-hover:bg-brand-accent/15" />

                    <div>
                      {/* Icon */}
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 text-brand-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-brand-bg shadow-[0_0_12px_rgba(91,127,166,0.15)]">
                        <card.icon className="h-5 w-5" />
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

                    <CornerMark className="absolute right-3 top-3 text-brand-accent/20 transition-colors group-hover:text-brand-accent/60" />
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