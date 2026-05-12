import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main>
      <Navbar />
      <HeroSection />

      <AboutMe/>
    </main>
  );
}