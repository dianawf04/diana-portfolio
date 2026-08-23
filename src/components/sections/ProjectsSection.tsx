import { DATA } from "@/config/data";
import { FadeUp } from "@/components/animations/FadeUp";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";
// import Image from "next/image"; // Buka komentar ini nanti saat gambar sudah ada

// Komponen SVG kustom untuk GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export function ProjectsSection() {
  return (
    <section id="proyek" className="relative py-24 px-6 lg:px-12 bg-[#050505]">
      <div className="z-10 w-full max-w-7xl mx-auto">
        
        {/* Judul Bagian */}
        <FadeUp>
          <div className="flex flex-col items-center md:items-start mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/30 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
              <FolderGit2 className="h-4 w-4" /> Portofolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400">Unggulan</span>
            </h2>
          </div>
        </FadeUp>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DATA.projects.map((project, index) => (
            <FadeUp key={project.title} delay={0.2 + index * 0.1}>
              <div className="group relative flex flex-col justify-between h-full rounded-2xl bg-neutral-900/30 border border-neutral-800 p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/50 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] hover:bg-neutral-900/60">
                
                {/* Area Gambar Proyek */}
                <div className="relative w-full h-48 sm:h-60 rounded-xl overflow-hidden mb-6 bg-neutral-950 border border-neutral-800/50 group-hover:border-sky-500/30 transition-colors">
                  
                  {/* Placeholder Gambar (Hapus jika sudah pakai Image asli) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600">
                    <FolderGit2 className="h-12 w-12 mb-2 opacity-30 group-hover:text-sky-500/50 transition-colors" />
                    <span className="text-xs font-mono">Gambar: {project.image}</span>
                  </div>
                </div>

                {/* Konten Teks */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-neutral-500 whitespace-nowrap">
                      {project.dates}
                    </span>
                  </div>
                  
                  <p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:border-neutral-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Tautan */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/50">
                    {project.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href === "#" || link.href.includes("username") ? "#" : link.href}
                        target={link.href.includes("http") ? "_blank" : "_self"}
                        className="flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-sky-500/30"
                      >
                        {/* Menggunakan komponen GithubIcon yang baru dibuat */}
                        {link.icon === "github" ? (
                          <GithubIcon className="h-3.5 w-3.5" />
                        ) : (
                          <ExternalLink className="h-3.5 w-3.5" />
                        )}
                        {link.type}
                      </Link>
                    ))}
                  </div>
                </div>
                
              </div>
            </FadeUp>
          ))}
        </div>
        
      </div>
    </section>
  );
}