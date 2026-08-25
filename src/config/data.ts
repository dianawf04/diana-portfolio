export const DATA = {
  name: "Diana Wahyuni Firnanda",
  initials: "DW",
  location: "Surabaya, Indonesia",

  role: "Web Developer",

  description:
    "Lulusan Informatika yang berfokus pada pengembangan website dan sistem informasi. Saya membangun aplikasi web yang fungsional, responsif, dan terstruktur dengan memperhatikan kebutuhan pengguna serta pengalaman pengguna yang baik.",

  // Kontak dan Sosial Media
  contact: {
    whatsapp: "0856-0700-4686",
    email: "dianawf04@gmail.com",
    github: "https://github.com/username-githubmu",
    linkedin: "https://linkedin.com/in/diana-wahyuni-firnanda",
    instagram: "https://www.instagram.com/dianawf_/",
  },

  // Daftar Keahlian / Tech Stack
  skills: [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],

  // Daftar Portofolio Proyek
  projects: [
    {
      title: "Sistem Pengolahan Nilai dengan Auto-Generate Transkrip Akademik",
      dates: "2025 - 2026",
      active: true,
      description:
        "Sistem informasi berbasis web untuk membantu pengolahan nilai siswa secara terintegrasi serta melakukan generate transkrip akademik secara otomatis dalam format PDF.",
      technologies: [
        "PHP",
        "Laravel 12",
        "MySQL",
        "Tailwind CSS",
        "Blade",
        "DOMPDF",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/username/repo-transkrip",
          icon: "github",
        },
      ],
      image: "/projects/transkrip-nilai.jpg",
    },

    {
      title: "Interactive Web Portfolio",
      dates: "Agustus 2026 - Sekarang",
      active: true,
      description:
        "Website portfolio personal yang menampilkan profil, keahlian, pengalaman, dan berbagai proyek dengan desain modern, responsif, serta animasi interaktif.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://diana-portfolio.vercel.app",
          icon: "globe",
        },
      ],
      image: "/projects/portfolio.jpg",
    },
  ],
};

// Mendefinisikan tipe data (TypeScript)
export type Project = typeof DATA.projects[0];