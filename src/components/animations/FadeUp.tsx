"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string; // Ini juga sekaligus memperbaiki error TypeScript yang kamu alami sebelumnya!
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  return (
    <motion.div
      // 1. Posisi Awal (Sebelum di-scroll): Transparan dan agak ke bawah (y: 40)
      initial={{ opacity: 0, y: 40 }}
      
      // 2. Animasi saat elemen MASUK KE LAYAR (di-scroll)
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. Pengaturan viewport: 'once: true' agar animasi hanya jalan sekali, 'margin' agar tidak terlalu cepat muncul
      viewport={{ once: true, margin: "-50px" }}
      
      // 4. Durasi dan kehalusan animasi
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Kurva animasi mulus (ease-out)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}