export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.8,
  intro: 1.4,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.15,
} as const;

// Reveal defaults shared by the Reveal wrapper
export const REVEAL_VARIANTS = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;