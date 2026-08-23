"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inisialisasi Lenis dengan konfigurasi agar pergerakannya sangat halus
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Menghubungkan Lenis dengan sistem requestAnimationFrame bawaan browser
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Membersihkan instansi Lenis saat komponen tidak digunakan agar memori tidak bocor
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}