"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

interface PreloaderProps {
  /** Duration of the loading animation in seconds */
  duration?: number;
  /** Callback fired when the loader has fully finished and is about to disappear */
  onComplete?: () => void;
}

export default function PercentageLoader({ duration = 1.5, onComplete }: PreloaderProps) {
  const { dict } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while the loader is active
    document.body.style.overflow = "hidden";

    let start: number;
    let animationFrame: number;

    const animateProgress = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressValue = Math.min((elapsed / (duration * 1000)) * 100, 100);
      
      // Cubic ease-out calculation for that premium, natural feel
      const normalized = progressValue / 100;
      const easedProgress = (1 - Math.pow(1 - normalized, 3)) * 100;
      
      setProgress(easedProgress);

      if (progressValue < 100) {
        animationFrame = requestAnimationFrame(animateProgress);
      } else {
        // Pause briefly at 100% before revealing the website
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
          if (onComplete) {
            // Wait for the exit animation to mostly finish before triggering complete
            setTimeout(onComplete, 800);
          }
        }, 400); 
      }
    };

    animationFrame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = "auto";
    };
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          {/* Inner elements container - slides down and fades out slightly before the background lifts */}
          <motion.div 
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm px-6 flex flex-col gap-4"
          >
            {/* Top text and percentage */}
            <div className="flex justify-between items-end w-full overflow-hidden">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-[10px] sm:text-xs tracking-[0.3em] text-zinc-400 font-medium uppercase"
              >
                {dict.loader.label}
              </motion.span>
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-xs sm:text-sm font-mono text-zinc-100 font-medium tabular-nums"
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* The Progress Line */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="w-full h-[1px] bg-zinc-800 relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 start-0 h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
