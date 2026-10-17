"use client";

import { useState } from "react";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Works from "@/components/Works";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import PercentageLoader from "@/components/ui/percentage-loader";
import type { LocalizedWork } from "@/lib/works";

export default function Home({ works }: { works: LocalizedWork[] }) {
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <PercentageLoader onComplete={() => setIsLoaderDone(true)} />
      
      <Navbar />
      <HeroSection isReady={isLoaderDone} />

      <AboutMe/>
      <TechStack/>
      <Experiences/>
      <Works works={works} />
      <Contact/>
      {/* <InteractiveGrid /> */}
    </main>
  );
}