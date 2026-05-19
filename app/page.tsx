import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Works from "@/components/Works";
import PercentageLoader from "@/components/ui/percentage-loader";

export default function Home() {

  return (
    <main className="relative overflow-hidden">
      <PercentageLoader/>
      <Navbar />
      <HeroSection />

      <AboutMe/>
      <TechStack/>
      <Works/>
      {/* <InteractiveGrid /> */}
    </main>
  );
}