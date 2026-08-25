"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroFadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export function HeroFadeUp({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: HeroFadeUpProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: 30, filter: "blur(4px)" }
      : direction === "right"
      ? { opacity: 0, x: -30, filter: "blur(4px)" }
      : { opacity: 0, y: 30, filter: "blur(4px)" };

  const animate =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0, filter: "blur(0px)" }
      : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}