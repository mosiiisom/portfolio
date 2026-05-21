import { works } from "@/lib/works";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = works.find((w) => w.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = works.find((w) => w.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:border-white transition-all duration-300">
            <ArrowLeft className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
          </div>
          <span className="font-medium tracking-wide">Back to Works</span>
        </Link>

        {/* Links */}
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Preview</span>
            </a>
          )}
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full max-w-4xl text-center flex flex-col items-center mb-16 md:mb-24 mt-8 md:mt-12">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono text-white/50">
            PROJECT {project.id}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className={`w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative mb-24 border border-white/10 shadow-2xl bg-gradient-to-br ${project.color}`}>
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10"></div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transform hover:scale-105 transition-transform duration-[1.5s] ease-out z-0"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-8 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              About the Project
            </h2>
            <div className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6">
              <p>{project.longDescription}</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="px-4 py-2 text-sm font-medium text-white/80 bg-white/5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">
                Role
              </h3>
              <p className="text-white/80 text-lg">Design & Development</p>
            </div>
            
            <div>
              <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">
                Year
              </h3>
              <p className="text-white/80 text-lg">2026</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
