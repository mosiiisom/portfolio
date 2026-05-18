import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function Home() {

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />

      <AboutMe/>
      <TechStack/>
      {/* <InteractiveGrid /> */}
    </main>
  );
}