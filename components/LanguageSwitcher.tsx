"use client";

import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useI18n } from "./I18nProvider";
import { localeConfig, localizePath, locales, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, dict } = useI18n();
  const pathname = usePathname() ?? "/";
  const target = locales.find((l) => l !== locale)!;
  const href = localizePath(target, stripLocale(pathname));

  // A full page load is intentional: the root layout switches lang, dir and font.
  return (
    <a
      href={href}
      hrefLang={localeConfig[target].hreflang}
      lang={target}
      aria-label={dict.nav.switchLanguage}
      title={dict.nav.switchLanguage}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white",
        className,
      )}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden md:inline">{localeConfig[target].label}</span>
      <span className="md:hidden">{localeConfig[target].short}</span>
    </a>
  );
}
