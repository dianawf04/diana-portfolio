import { Reveal } from "@/components/animations/Reveal";
import { User, Terminal, Code, Cpu, BadgeCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Terminal,
    title: "Logika Server",
    desc: "Membangun arsitektur backend yang kokoh dan skalabel.",
  },
  {
    icon: Code,
    title: "UI Modern",
    desc: "Meracik tampilan antarmuka responsif dengan komponen utilitas CSS.",
  },
  {
    icon: Cpu,
    title: "Pemecah Masalah",
    desc: "Menganalisis sistem secara mendalam, dari optimalisasi database hingga penyelesaian masalah konektivitas server.",
    wide: true,
  },
];

export function AboutSection() {
  return (
    <section id="tentang" className="relative py-24 px-6 lg:px-12 bg-brand-bg overflow-hidden">
      {/* Background grid — konsisten dengan Hero, tapi glow-nya diposisikan beda (kanan bawah) supaya tiap section punya "titik cahaya" sendiri */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="pointer-events-none absolute -right-[10%] bottom-0 h-[380px] w-[380px] rounded-full bg-brand-accent/8 blur-[130px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Eyebrow + Judul */}
        <Reveal>
          <div className="flex flex-col items-center md:items-start mb-16">
            <div className="inline-flex items-center gap-2 mb-4 rounded-md border border-brand-border bg-brand-surface/70 px-3 py-1.5 font-mono text-xs text-brand-text-muted backdrop-blur-sm">
              <User className="h-3.5 w-3.5" />
              <span>tentang --saya</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight">
              Di Balik <span className="text-brand-accent">Kode</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Kolom Kiri: Paragraf Cerita + Sertifikasi */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="space-y-6 text-brand-text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  Halo! Saya adalah seorang pengembang web yang berfokus pada arsitektur
                  <span className="text-brand-text font-medium"> backend </span> dan manajemen basis data.
                  Bagi saya, menulis kode bukan hanya sekadar membuat aplikasi berjalan, tetapi tentang menyusun sistem yang terstruktur, aman, dan efisien dari balik layar.
                </p>
                <p>
                  Perjalanan saya banyak dihabiskan dengan mengeksplorasi ekosistem <span className="text-brand-accent font-medium">PHP dan Laravel</span>,
                  merancang relasi data di <span className="text-brand-accent font-medium">MySQL</span>, hingga memastikan antarmuka
                  pengguna tetap terlihat modern dan responsif menggunakan <span className="text-brand-accent font-medium">Tailwind CSS</span>.
                </p>
                <p>
                  Baru-baru ini, saya merancang dan mengembangkan sistem otomatisasi pemrosesan nilai dan transkrip akademik dari nol.
                  Pengalaman tersebut sangat mengasah insting saya dalam memecahkan masalah yang kompleks—mulai dari mendesain arsitektur aplikasi, menangani isu jaringan dan protokol server lokal, hingga meracik halaman verifikasi dokumen.
                </p>
                <p>
                  Saya selalu antusias menghadapi tantangan teknis baru dan percaya bahwa fondasi kode yang bersih adalah kunci dari aplikasi yang hebat.
                </p>
              </div>
            </Reveal>

            {/* Badge Sertifikasi */}
            <Reveal delay={0.3}>
              <div className="group relative mt-8 flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface/50 p-5 transition-colors duration-300 hover:border-brand-accent/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-transform duration-300 group-hover:scale-110">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-text">
                    Sertifikasi Junior Programming
                  </p>
                  <p className="font-mono text-xs text-brand-text-muted">
                    LSP TIK Indonesia
                  </p>
                </div>

                {/* Corner mark kecil — echo dari signature elemen di foto Hero */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="absolute right-3 top-3 text-brand-accent/40">
                  <path d="M1 1H6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 1V6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Reveal>
          </div>

          {/* Kolom Kanan: Kartu Sorotan — tiap kartu reveal satu-satu (stagger) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={0.25 + i * 0.12}
                  direction="left"
                  className={item.wide ? "sm:col-span-2" : ""}
                >
                  <div className="group h-full p-6 rounded-2xl bg-brand-surface/40 border border-brand-border transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-surface/80 hover:-translate-y-1">
                    <item.icon className="h-8 w-8 text-brand-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-brand-text font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-text-muted">{item.desc}</p>
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