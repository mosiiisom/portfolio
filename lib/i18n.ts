export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

// Persian is served at the root ("/"), English under "/en".
export const defaultLocale: Locale = "fa";

export const localeConfig: Record<
  Locale,
  { dir: "rtl" | "ltr"; ogLocale: string; label: string; short: string; hreflang: string }
> = {
  fa: { dir: "rtl", ogLocale: "fa_IR", label: "فارسی", short: "فا", hreflang: "fa" },
  en: { dir: "ltr", ogLocale: "en_US", label: "English", short: "EN", hreflang: "en" },
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Builds a public path for a locale, e.g. ("en", "/works/01") -> "/en/works/01". */
export function localizePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/** Strips a leading locale segment from a pathname: "/en/works/01" -> "/works/01". */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname || "/";
}
