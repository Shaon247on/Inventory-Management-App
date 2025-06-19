// components/LoadingPage.tsx
"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { spinnerVariants, textVariants } from "../animations/AnimatedCounter";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className="mb-4"
      >
        <Loader2 className="w-12 h-12 text-primary" />
      </motion.div>

      <motion.p
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-xl font-semibold text-muted-foreground"
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default LoadingPage;
