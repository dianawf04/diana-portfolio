import { Reveal } from "@/components/animations/Reveal";
import { Code2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    num: "01",
    title: "Backend Development",
    subtitle: "Server Architecture & Logic",
    skills: ["PHP", "Laravel", "RESTful API", "Middleware", "Routing"],
  },
  {
    num: "02",
    title: "Database Management",
    subtitle: "Relational Modeling & Storage",
    skills: ["MySQL", "Relational Database", "Migrations"],
  },
  {
    num: "03",
    title: "Frontend & UI",
    subtitle: "Interactive & Responsive Interfaces",
    skills: ["Tailwind CSS", "Blade Views", "HTML/CSS", "React", "Next.js"],
  },
  {
    num: "04",
    title: "Tools & Environment",
    subtitle: "Workflow & Development Stack",
    skills: ["Git & GitHub", "VS Code", "Laragon"],
  },
];

export function SkillsSection() {
  return (
    <section id="keahlian" className="relative overflow-hidden bg-brand-bg px-6 py-28 lg:px-12">
      {/* 1. Atmospheric Ambient Lighting Layers (Harmonized with Hero, About & Contact) */}
      <div className="animate-float-slow pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-brand-accent/[0.05] dark:bg-brand-accent/8 blur-[150px]" />
      <div className="animate-float-reverse pointer-events-none absolute bottom-10 right-10 h-[300px] w-[420px] rounded-full bg-brand-warm/[0.02] dark:bg-brand-warm/[0.035] blur-[130px]" />

      {/* 2. Grid Background with Radial Vignette Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_95%)]" />

      {/* Subtle Background Technical Crosshairs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-30 dark:opacity-20 font-mono text-[10px] text-brand-accent/60">
        <span className="absolute right-[8%] top-[18%]">+</span>
        <span className="absolute left-[12%] bottom-[20%]">+</span>
      </div>

      {/* 3. Subtle Grain Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.025] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <Reveal>
          <div className="mb-20 flex flex-col items-center md:items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-border/90 bg-brand-surface/80 dark:bg-brand-surface/70 px-3.5 py-1.5 font-mono text-xs text-brand-text-muted shadow-[0_2px_10px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md">
              <Code2 className="h-3.5 w-3.5 text-brand-accent" />
              <span className="font-semibold text-brand-text/90">keahlian --teknis</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl md:text-5xl">
              Keahlian & <span className="text-brand-accent">Spesialisasi Teknis</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-brand-text-muted">
              Daftar teknologi, bahasa pemrograman, dan tools yang digunakan dalam merancang dan mengembangkan sistem web fungsional.
            </p>
          </div>
        </Reveal>

        {/* Editorial Rows Technical Showcase (NO CARDS) */}
        <div className="flex flex-col border-b border-brand-border/80">
          {SKILL_CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={0.15 + index * 0.1}>
              <div className="group relative border-t border-brand-border/80 py-10 sm:py-12 transition-all duration-500 hover:border-brand-accent/50">
                {/* Subtle Row Hover Atmosphere */}
                <div className="pointer-events-none absolute inset-0 -mx-4 rounded-2xl bg-brand-surface/0 transition-colors duration-500 group-hover:bg-brand-surface/60 dark:group-hover:bg-brand-surface/30 sm:-mx-6" />

                <div className="relative grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Left: Index & Category Title */}
                  <div className="flex flex-col lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent">
                        [ {category.num} ]
                      </span>
                      <span className="h-px w-8 bg-brand-border transition-all duration-500 group-hover:w-14 group-hover:bg-brand-accent/60" />
                    </div>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand-text transition-colors duration-300 group-hover:text-brand-accent sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-brand-text-muted">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Right: Technical Typography Tag Cluster */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:col-span-7 lg:pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="group/skill relative inline-flex items-center gap-2.5 rounded-full border border-brand-border/90 bg-brand-surface/75 dark:bg-brand-surface/40 px-4 py-2 font-mono text-xs sm:text-sm font-medium text-brand-text/90 shadow-[0_2px_8px_rgba(15,23,42,0.04)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-brand-accent/60 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-[0_0_20px_rgba(91,127,166,0.22)] hover:-translate-y-0.5 select-none"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent/50 transition-colors group-hover/skill:bg-brand-accent group-hover/skill:shadow-[0_0_8px_rgba(91,127,166,0.8)]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}