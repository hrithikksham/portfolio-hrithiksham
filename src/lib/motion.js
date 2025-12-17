// Global Motion Tokens
export const EASE = [0.22, 1, 0.36, 1]; // cubic-bezier(0.22, 1, 0.36, 1)

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: custom * 0.1 }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const revealText = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%",
    transition: { duration: 0.8, ease: EASE }
  }
};

export const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: EASE }
  }
};