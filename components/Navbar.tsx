"use client";

import NavbarHireMeBtn from "./ui/navbar-hireme-btn";
import ScrambleText from "./ui/ScrambleText";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./I18nProvider";

export default function Navbar() {
  const { dict } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-[1px]">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex flex-col">
          <ScrambleText text="MOSI >_" dir="ltr" className="text-white/86 mosi rtl:text-right" />
          <span className="text-sm text-white/45">{dict.nav.role}</span>
        </div>
        <div className="hidden md:flex flex-col">
          <ScrambleText text={dict.nav.locationTitle} className="text-white/86" />

          <span className="text-sm text-white/45">{dict.nav.locationSub}</span>
        </div>
        <div className="hidden md:flex flex-col">
          <ScrambleText text={dict.nav.statusTitle} className="text-white/86" />
          <span className="text-sm text-white/45">{dict.nav.statusSub}</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <NavbarHireMeBtn />
        </div>
      </div>
    </nav>
  );
}
