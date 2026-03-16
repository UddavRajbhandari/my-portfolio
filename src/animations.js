// ─── Shared animation variants ────────────────────────────────────────────────
// Import these in any component that needs animations

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 }
  }
}

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.0 }
  }
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// Viewport settings
export const viewport     = { once: true, amount: 0.05 }
export const viewportMid  = { once: true, amount: 0.08 }