import NavbarHireMeBtn from "./navbar-hireme-btn";
import ScrambleText from "./ScrambleText";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-[1px]">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex flex-col">
          <ScrambleText text="MOSI >_" className="text-white/86 mosi" />
          <span className="text-sm text-white/45">Full Stack Developer</span>
        </div>
        <div className="flex flex-col">
          <ScrambleText text="Iran Based" className="text-white/86" />

          <span className="text-sm text-white/45">World Wide Available</span>
        </div>
        <div className="flex flex-col">
          <ScrambleText text="Currently" className="text-white/86" />
          <span className="text-sm text-white/45">Available for work</span>
        </div>
        <div>
          <NavbarHireMeBtn />
        </div>
      </div>
    </nav>
  );
}
