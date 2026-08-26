"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = ["loading", "preparing", "ready"];

const emptySubscribe = () => () => {};

function getSessionIntroSeen(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem("intro-seen"));
}

export function IntroLoader({ children }: { children: React.ReactNode }) {
  const isAlreadySeen = useSyncExternalStore(
    emptySubscribe,
    getSessionIntroSeen,
    () => false
  );
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) {
      return;
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1));
    }, 420);

    const exitTimer = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "1");
      setVisible(false);
    }, 1500);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  if (isAlreadySeen || !visible) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-brand-text-muted">
              <span className="text-brand-accent">$</span>
              <span key={lineIndex}>{BOOT_LINES[lineIndex]}</span>
              <span className="h-4 w-[2px] animate-pulse bg-brand-accent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}