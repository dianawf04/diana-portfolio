"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Mail, Send, MapPin, Clock } from "lucide-react";
import { DATA } from "@/config/data";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const waLink = `https://wa.me/${DATA.contact.whatsapp.replace(/\D/g, "")}`;

export function ContactSection() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-brand-bg px-6 py-24 lg:px-12"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-brand-accent/6 blur-[130px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-brand-border bg-brand-surface/70 px-3 py-1.5 font-mono text-xs text-brand-text-muted backdrop-blur-sm">
              <span>hubungi --saya</span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-brand-text md:text-5xl">
              Mari Bangun Sesuatu yang{" "}
              <span className="text-brand-accent">Luar Biasa</span> Bersama
            </h2>

            <p className="text-base text-brand-text-muted md:text-lg">
              Punya ide proyek, pertanyaan, atau ingin bekerja sama? Kirimkan
              pesan Anda di bawah ini dan saya akan merespons secepatnya!
            </p>
          </div>
        </Reveal>

        {/* Main Content */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Email */}
            <Reveal delay={0.15}>
              <a
                href={`mailto:${DATA.contact.email}`}
                className="group flex w-full items-center gap-6 rounded-2xl border border-brand-border bg-brand-surface/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:bg-brand-surface/80"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand-bg">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-medium text-brand-text-muted">
                    Email Langsung
                  </p>

                  <p className="break-all text-sm font-bold text-brand-text sm:text-base">
                    {DATA.contact.email}
                  </p>
                </div>
              </a>
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay={0.22}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-6 rounded-2xl border border-brand-border bg-brand-surface/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:bg-brand-surface/80"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand-bg">
                  <WhatsappIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-brand-text-muted">
                    WhatsApp
                  </p>

                  <p className="text-sm font-bold text-brand-text sm:text-base">
                    {DATA.contact.whatsapp}
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.25}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-full flex-col gap-6 rounded-3xl border border-brand-border bg-brand-surface/50 p-8 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-brand-text-muted"
                    >
                      Nama Anda
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Contoh: John Doe"
                      className="w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3.5 text-sm text-brand-text placeholder-brand-text-muted/60 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-brand-text-muted"
                    >
                      Alamat Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3.5 text-sm text-brand-text placeholder-brand-text-muted/60 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-brand-text-muted"
                  >
                    Subjek Pesan
                  </label>

                  <input
                    type="text"
                    id="subject"
                    placeholder="Pengembangan Web / Pertanyaan Proyek"
                    className="w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3.5 text-sm text-brand-text placeholder-brand-text-muted/60 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-1 flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-brand-text-muted"
                  >
                    Pesan Anda
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Ceritakan lebih banyak tentang tujuan dan tenggat waktu proyek Anda..."
                    className="min-h-[150px] h-full w-full resize-none rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3.5 text-sm text-brand-text placeholder-brand-text-muted/60 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent py-4 text-sm font-bold text-brand-bg transition-all hover:bg-brand-accent-hover hover:shadow-[0_0_20px_rgba(91,127,166,0.35)] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}