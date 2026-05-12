import NavbarHireMeBtn from "./navbar-hireme-btn";
import ScrambleText from "./ScrambleText";

export default function Navbar() {
    return (
        <nav className="w-full relative">
            <div className="absolute w-full flex justify-between items-center h-16 mt-2 z-10">
                    <div className="flex flex-col">
                    <ScrambleText
                        text="MOSI >_"
                        className="text-white/86 mosi"
                    />
                    <span className="text-sm text-white/45">Full Stack Developer</span>
                </div>
                <div className="flex flex-col">
                    <ScrambleText
                        text="Iran Based"
                        className="text-white/86"
                    />
                    
                    <span className="text-sm text-white/45">World Wide Available</span>
                </div>
                <div className="flex flex-col">
                    <ScrambleText
                        text="Currently"
                        className="text-white/86"
                    />
                    <span className="text-sm text-white/45">Available for work</span>
                </div>
                <div>
                    <NavbarHireMeBtn />
                </div>

            </div>
        </nav>
    )
}