"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "CWN",
    date: "Jan 2018 - Dec 2025",
    description: "Developing advanced trading and blockchain solutions for crypto traders, focusing on scalable architectures and high-performance applications.",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Freelance",
    date: "Dec 2017 - Dec 2018",
    description: "Built tailored WordPress and WooCommerce solutions, including custom themes and plugins, for various businesses and e-shops.",
  },
  {
    id: 3,
    title: "Wordpress Developer",
    company: "Rayansaz",
    date: "Jan 2016 - Dec 2017",
    description: "Developed custom WordPress themes and WooCommerce plugins for enterprises and e-commerce stores, delivering seamless digital experiences.",
  }
];

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-background py-32 px-4 md:px-8 w-full relative">
      <div ref={containerRef} className="relative max-w-6xl mx-auto min-h-screen ">
        <div className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-white mb-4">
            Experiences
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A journey of crafting digital experiences with passion and precision.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* The scrolling SVG line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
          <svg className="w-full h-full" preserveAspectRatio="none">
            {/* Background line */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              className="stroke-zinc-800"
              strokeWidth="2"
            />
            {/* Animated drawing line */}
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              className="stroke-white"
              strokeWidth="2"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Experience Items */}
        <div className="relative z-10 flex flex-col gap-24">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-start ${
                  isEven ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                {/* Node dot on the timeline */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-white z-20 mt-2" />

                <div className={`ml-20 md:ml-0 w-full md:w-[45%] ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="group relative bg-zinc-900/20 border border-white/5 backdrop-blur-md p-8 rounded-3xl hover:bg-zinc-900/50 transition-colors duration-500">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                    
                    <span className="text-zinc-500 text-sm font-mono tracking-wider block mb-3">{exp.date}</span>
                    <h3 className="text-2xl font-medium text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-zinc-400 mb-6">{exp.company}</h4>
                    <p className="text-zinc-300 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
