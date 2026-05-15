"use client"
import ScrambleText from "./ScrambleText";
import { motion, useMotionValue, useTransform, cubicBezier } from "motion/react";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,     // Beautiful stagger timing
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),   // ← This is the correct way now
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform values for subtle movement
  const x = useTransform(mouseX, [-1, 1], [-15, 15]);
  const y = useTransform(mouseY, [-1, 1], [-15, 15]);

  // Cursor dot position
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Normalized values (-1 to 1)
      const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.6;
      const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.6;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);

      // Smooth cursor dot
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, dotX, dotY]);
  
  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{ x, y }}
        className="absolute inset-0 scale-[103%] w-full h-full md:h-auto object-cover"
        transition={{ type: "inertia", stiffness: 10, damping: 30 }}
      >
        {/* Best quality + smallest size first */}
        <source src="/videos/hero-loop.webm" type="video/webm" />
        {/* Fallback for maximum compatibility */}
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-80% to-primary" />

      {/* <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute z-50 hidden md:block"
      >
        <div className="w-4 h-4 border border-[#74f0ff] rounded-full mix-blend-difference" />
        <div className="absolute -inset-3 border border-[#74f0ff]/30 rounded-full" />
      </motion.div> */}

      <div className="relative z-10 container mx-auto px-6">
        <div className="min-h-screen w-full flex items-center">
          <div className="grid grid-cols-24 gap-8 w-full">
            <motion.div 
              className="col-span-12 md:col-span-15 flex flex-col justify-center items-start tracking-[-0.02em]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* H5 */}
              <motion.h5 
                className="text-white/86"
                variants={itemVariants}
              >
                "Hi, I’m{" "}
                <ScrambleText
                  text="MOSI >_"
                  className="text-[#74f0ff] mosi"
                />{" "}
                — your partner in building what’s next."
              </motion.h5>

              {/* H1 */}
              <motion.h1 
                className="text-white mt-3"
                variants={itemVariants}
              >
                Turning Complex Ideas into Scalable Digital Reality.
              </motion.h1>

              {/* Paragraph */}
              <motion.p 
                className="text-white/86 mt-3 text-[1rem]"
                variants={itemVariants}
              >
                Full-stack expertise focused on solving your technical
                bottlenecks
                <br /> so you can focus on growing your business.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex gap-4 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-[#74f0ff] text-black font-semibold rounded-xl hover:bg-white transition-all duration-300"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See My Work
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-white/70 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}