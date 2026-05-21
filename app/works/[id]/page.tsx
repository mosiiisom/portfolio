"use client";   // ← ADD THIS AT THE VERY TOP

import { works } from "@/lib/works";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Components } from 'react-markdown';
import { motion } from "framer-motion";
import React from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// Markdown Components
const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-bold tracking-tight mt-12 mb-6 text-white" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-5 text-white" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-medium tracking-tight mt-8 mb-4 text-white/90" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="mb-6 text-white/75 leading-relaxed" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc pl-6 mb-6 space-y-3 text-white/75" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-3 text-white/75" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a 
      className="text-[#72ebfa] hover:text-[#72ebfa]/80 underline underline-offset-4 transition-all" 
      target="_blank" 
      rel="noopener noreferrer"
      {...props} 
    />
  ),
  code: ({ node, inline, className, children, ...props }) => {
    return inline ? (
      <code 
        className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-sm text-[#72ebfa]" 
        {...props}
      >
        {children}
      </code>
    ) : (
      <code 
        className="block bg-zinc-950 p-5 rounded-2xl font-mono text-sm overflow-x-auto border border-white/10"
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default function ProjectPage({ params }: ProjectPageProps) {
  // Note: We can't use async/await directly in client components for params in app router
  // So we need to handle it differently or keep metadata separate.

  const resolvedParams = React.use(params);
  const project = works.find((w) => w.id === resolvedParams.id);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-white selection:bg-[#72ebfa]/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-white/5">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:border-white transition-all duration-300">
            <ArrowLeft className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </div>
          <span className="font-medium tracking-wide">Back to Works</span>
        </Link>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
            >
              <FaGithub className="w-4 h-4" />
              <span className="hidden md:inline">Source Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#72ebfa] text-black hover:bg-[#72ebfa]/90 font-medium transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Preview
            </a>
          )}
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-6 px-5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono tracking-[3px] text-white/50">
              PROJECT {project.id}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative mb-20 border border-white/10 shadow-2xl bg-gradient-to-br ${project.color}`}
        >
          <div className="absolute inset-0 bg-black/30 mix-blend-overlay z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-[1200ms] ease-out"
            priority
          />
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Main Content */}
          <div className="md:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">About the Project</h2>
            
            <div className="prose prose-invert prose-lg max-w-none
                          prose-headings:text-white 
                          prose-p:text-white/75 
                          prose-strong:text-white
                          prose-a:text-[#72ebfa]">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {project.longDescription}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-12 mt-4 md:mt-16">
            <div>
              <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-widest">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 hover:border-[#72ebfa]/30 hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-white/40 mb-4 uppercase tracking-widest">Role</h3>
              <p className="text-white/80 text-lg">Design & Full Development</p>
            </div>

            <div>
              <h3 className="text-sm font-mono text-white/40 mb-4 uppercase tracking-widest">Year</h3>
              <p className="text-white/80 text-lg">2026</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}