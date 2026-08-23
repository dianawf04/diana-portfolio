"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DURATION, EASE_OUT, REVEAL_VARIANTS } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
};

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const hidden =
    direction === "left"
      ? { opacity: 0, x: -32, filter: "blur(6px)" }
      : direction === "right"
      ? { opacity: 0, x: 32, filter: "blur(6px)" }
      : REVEAL_VARIANTS.hidden;

  const visible =
    direction === "up"
      ? REVEAL_VARIANTS.visible
      : { opacity: 1, x: 0, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration: DURATION.slow, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}