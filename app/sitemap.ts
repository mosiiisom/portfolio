import type { MetadataRoute } from "next";
import { localizePath, locales } from "@/lib/i18n";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { workIds } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    ...workIds.map((id) => ({ path: `/works/${id}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];

  // One entry per locale; each lists every language version so search engines pair them up.
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
