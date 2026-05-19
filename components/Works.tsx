"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { works } from "@/lib/works";



export default function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Smooth mouse tracking using Framer Motion springs
  const springConfig = { stiffness: 150, damping: 15, mass: 0.2 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset the image slightly to the right of the cursor, and center it vertically
      mouseX.set(e.clientX + 30);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="bg-background relative w-full h-full">
      <div className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative ">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Selected Works
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base">
            A collection of my recent work, showcasing a mix of product design,
            frontend development, and creative engineering.
          </p>
        </div>

        <div className="w-full flex flex-col border-t border-white/10 relative">
          {works.map((work, index) => (
            <Link href={work.link} key={work.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500 px-6 -mx-6 cursor-pointer rounded-2xl md:rounded-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              {/* List Number */}
              <div className="text-white/30 font-mono text-xl md:text-3xl w-16 mb-4 md:mb-0 transition-colors duration-300 group-hover:text-white/80">
                {work.id}
              </div>

              {/* Title & Description */}
              <div className="flex-1 md:pr-12 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {work.title}
                </h3>
                <p className="text-white/50 text-base md:text-lg max-w-xl group-hover:text-white/80 transition-colors duration-300">
                  {work.description}
                </p>
              </div>

              {/* Stacks */}
              <div className="flex flex-wrap gap-2 md:w-[30%] mb-6 md:mb-0">
                {work.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="px-4 py-1.5 text-xs md:text-sm font-medium text-white/60 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* More Info Button */}
              <div className="md:w-24 flex justify-start md:justify-end">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black group-hover:scale-110 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Floating Preview Image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{
                x: mouseX,
                y: mouseY,
              }}
              className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[400px] h-[280px] border border-white/10 bg-gray-900/80 backdrop-blur-xl"
            >
              {/* Dynamic visual preview based on the project */}
              <div
                className={`w-full h-full relative flex flex-col items-center justify-center bg-gradient-to-br ${works[hoveredIndex].color} overflow-hidden`}
              >
                {/* Glassmorphism abstract layers */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="w-full h-full relative p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden relative shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700">
                    <Image
                      src={works[hoveredIndex].image}
                      alt={works[hoveredIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
