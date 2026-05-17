"use client";

import { useRef } from "react";
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  // SiFramer,
  SiPython,
  SiPhp,
  SiDjango,
  SiLaravel,
  SiWordpress,
  SiElectron,
  // SiGooglechrome,
  // SiTelegram,
  // SiLinux,
  SiGithubactions,
  SiVercel,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { Technology } from "@/lib/types";
import TechCard from "./ui/TechCard";
import TechStackTitle from "./ui/TechStackTitle";

const technologies : Technology[] = [
  // Core Modern Stack
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    level: 95,
    color: "#00ff9f",
    desc: "App Router, Server Actions",
  },
  {
    name: "React",
    icon: SiReact,
    category: "frontend",
    level: 95,
    color: "#61dafb",
    desc: "Hooks, Performance",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
    level: 90,
    color: "#3178c6",
    desc: "Type Safety",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
    level: 95,
    color: "#06b6d4",
    desc: "Design Systems",
  },
  // {
  //   name: "Framer Motion",
  //   icon: SiFramer,
  //   category: "frontend",
  //   level: 85,
  //   color: "#f5f5f5",
  //   desc: "Animations",
  // },

  // Backend & Python/PHP World
  {
    name: "Python",
    icon: SiPython,
    category: "backend",
    level: 85,
    color: "#3776ab",
    desc: "Scripting & Automation",
  },
  {
    name: "FastAPI",
    icon: SiPython,
    category: "backend",
    level: 80,
    color: "#009688",
    desc: "High Performance APIs",
  },
  {
    name: "Django",
    icon: SiDjango,
    category: "backend",
    level: 75,
    color: "#092e20",
    desc: "Full-stack Framework",
  },
  {
    name: "PHP",
    icon: SiPhp,
    category: "backend",
    level: 80,
    color: "#777bb4",
    desc: "Server-side",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    category: "backend",
    level: 75,
    color: "#ff2d20",
    desc: "Elegant PHP Framework",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    category: "tools",
    level: 70,
    color: "#21759b",
    desc: "CMS & Themes",
  },
  {
    name: "Electron",
    icon: SiElectron,
    category: "tools",
    level: 70,
    color: "#47848f",
    desc: "Desktop Apps",
  },
  // {
  //   name: "Chrome Ext",
  //   icon: SiGooglechrome,
  //   category: "tools",
  //   level: 65,
  //   color: "#4285f4",
  //   desc: "Browser Extensions",
  // },
  // {
  //   name: "Telegram Bot",
  //   icon: SiTelegram,
  //   category: "tools",
  //   level: 75,
  //   color: "#229ed9",
  //   desc: "Bot Development",
  // },
  // {
  //   name: "Linux",
  //   icon: SiLinux,
  //   category: "tools",
  //   level: 80,
  //   color: "#fcc624",
  //   desc: "Server & Dev Env",
  // },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    category: "tools",
    level: 75,
    color: "#2088ff",
    desc: "CI/CD Pipelines",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "tools",
    level: 70,
    color: "#2496ed",
    desc: "Containerization",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "tools",
    level: 90,
    color: "#fff",
    desc: "Deployment",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "tools",
    level: 85,
    color: "#ffff",
    desc: "Version Control",
  },
];

// const categories = [
//   { label: "All", value: "all" },
//   { label: "Frontend", value: "frontend" },
//   { label: "Backend", value: "backend" },
//   { label: "Tools", value: "tools" },
// ];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="tech" ref={containerRef} className="py-10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-zinc-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-zinc-900)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <TechStackTitle />   

          <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10 hover-target"
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}

        </motion.div>
      </div>
    </section>
  );
}
