import { siteConfig } from "@/config/site";
import { works } from "@/lib/works";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${siteConfig.url}/works/${work.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workEntries,
  ];
}
