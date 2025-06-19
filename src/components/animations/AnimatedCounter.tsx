import { Variants, TargetAndTransition } from "framer-motion";

// Spinner rotation animation
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 1,
    },
  },
};

// Blinking text animation
export const textVariants: Variants = {
  initial: { opacity: 0.2 },
  animate: {
    opacity: [0.2, 1, 0.2],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// Container fade in with stagger
export const containerVariants2: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// Container with delay before stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

// Item entrance animation
export const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

// Floating loop animation
export const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Glowing pulse animation
export const glowVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Popup animation
export const popUpDownVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
