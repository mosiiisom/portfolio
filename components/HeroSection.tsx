import ScrambleText from "./ScrambleText";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full object-cover"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 hidden" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
          <div className="min-h-screen w-full flex items-center">
            <div className="grid grid-cols-24 gap-8 w-full">
              <div className="col-span-12 md:col-span-15 flex flex-col justify-center items-start tracking-[-0.02em]">
                <h5 className="text-white/86">
                  "Hi, I’m{" "}
                  <ScrambleText
                    text="MOSI >_"
                    className="text-[#74f0ff] mosi"
                  />{" "}
                  — your partner in building what’s next."
                </h5>

                <h1 className="text-white mt-3">
                  Turning Complex Ideas into Scalable Digital Reality.
                </h1>

                <p className="text-white/86 mt-3 text-[1rem]">
                  Full-stack expertise focused on solving your technical
                  bottlenecks
                  <br /> so you can focus on growing your business.
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-[#74f0ff] text-black font-semibold rounded-xl hover:bg-white transition-all duration-300"
                  >
                    See My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-white/70 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}