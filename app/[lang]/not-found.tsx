"use client";

import Link from "next/link";
import { motion, cubicBezier } from "motion/react";
import ScrambleText from "@/components/ui/ScrambleText";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

export default function NotFound() {
  const { dict, href } = useI18n();
  const t = dict.notFound;
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 relative">
          <h1 className="text-[8rem] leading-none md:text-[12rem] font-bold text-white/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            404
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter relative z-10">
            <ScrambleText text="404" />
          </h1>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white/90 font-medium mb-4">
          {t.title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-white/60 max-w-md mx-auto mb-10">
          {t.text}
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            href={href("/")}
            className="px-8 py-4 border-2 border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 rtl:-scale-x-100 rtl:group-hover:translate-x-1 transition-transform" />
            {t.back}
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
