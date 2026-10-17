"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";

type I18nContextValue = { locale: Locale; dict: Dictionary };

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: I18nContextValue & { children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, dict }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return {
    ...ctx,
    href: (path: string) => localizePath(ctx.locale, path),
  };
}
