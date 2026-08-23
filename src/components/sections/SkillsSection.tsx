import { Reveal } from "@/components/animations/Reveal";
import { Code2, Database, Layout, Server, Terminal } from "lucide-react";

const SKILLS_DATA = [
  {
    title: "Backend Development",
    icon: Server,
    description: "Membangun logika server dan arsitektur sistem yang kokoh.",
    skills: ["PHP", "Laravel 12", "RESTful API", "Middleware", "Routing"],
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Merancang dan mengelola penyimpanan data yang efisien.",
    skills: ["MySQL", "Relational Database", "Query Optimization", "Migrations"],
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    description: "Menerjemahkan desain menjadi antarmuka yang responsif dan interaktif.",
    skills: ["Tailwind CSS", "Blade Views", "Next.js", "React", "HTML/CSS"],
  },
  {
    title: "Tools & Environment",
    icon: Terminal,
    description: "Peralatan yang digunakan sehari-hari untuk produktivitas kerja.",
    skills: ["Git & GitHub", "Windows 11", "VS Code", "Postman", "Laragon"],
  },
];

export function SkillsSection() {
  return (
    <section id="keahlian" className="relative py-24 px-6 lg:px-12 bg-brand-bg overflow-hidden">
      {/* Background grid + glow — posisi kiri-atas, beda dari Hero (kiri-atas juga tapi lebih redup) dan About (kanan-bawah) supaya tiap section punya nuansa sendiri tanpa berasa acak */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Eyebrow + Judul */}
        <Reveal>
          <div className="flex flex-col items-center md:items-start mb-16">
            <div className="inline-flex items-center gap-2 mb-4 rounded-md border border-brand-border bg-brand-surface/70 px-3 py-1.5 font-mono text-xs text-brand-text-muted backdrop-blur-sm">
              <Code2 className="h-3.5 w-3.5" />
              <span>keahlian --teknis</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text tracking-tight">
              Teknologi & <span className="text-brand-accent">Peralatan</span>
            </h2>
          </div>
        </Reveal>

        {/* Grid Kartu Keahlian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILLS_DATA.map((category, index) => (
            <Reveal key={category.title} delay={0.15 + index * 0.1}>
              <div className="group relative flex flex-col h-full rounded-2xl bg-brand-surface/40 border border-brand-border p-8 overflow-hidden transition-all duration-300 hover:border-brand-accent/40 hover:bg-brand-surface/80 hover:-translate-y-1">
                {/* Header Kartu */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand-bg">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-brand-text-muted mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* Daftar Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg bg-brand-bg border border-brand-border text-brand-text-muted transition-colors duration-300 group-hover:border-brand-accent/40 group-hover:text-brand-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner mark — konsisten dengan signature elemen di Hero & badge sertifikasi About */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="absolute right-4 top-4 text-brand-accent/30">
                  <path d="M1 1H6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 1V6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}