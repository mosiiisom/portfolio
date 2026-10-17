import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultLocale, localeConfig, localizePath, locales, type Locale } from "./i18n";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString().replace(/\/$/, "") || siteConfig.url;
}

/** hreflang map for a locale-agnostic path, including x-default (Persian). */
export function languageAlternates(path = "/"): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeConfig[l].hreflang] = absoluteUrl(localizePath(l, path));
  languages["x-default"] = absoluteUrl(localizePath(defaultLocale, path));
  return languages;
}

export function alternatesFor(locale: Locale, path = "/"): Metadata["alternates"] {
  return {
    canonical: absoluteUrl(localizePath(locale, path)),
    languages: languageAlternates(path),
  };
}

export function ogLocales(locale: Locale) {
  return {
    locale: localeConfig[locale].ogLocale,
    alternateLocale: locales.filter((l) => l !== locale).map((l) => localeConfig[l].ogLocale),
  };
}
