import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectView from "@/components/ProjectView";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/dictionaries";
import { hasLocale, localeConfig, localizePath, locales } from "@/lib/i18n";
import { absoluteUrl, alternatesFor, ogLocales } from "@/lib/seo";
import { getWork, workIds } from "@/lib/works";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => workIds.map((id) => ({ lang, id })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/works/[id]">): Promise<Metadata> {
  const { lang, id } = await params;
  if (!hasLocale(lang)) return {};
  const project = getWork(lang, id);
  if (!project) return {};

  const siteName = getDictionary(lang).meta.siteName;
  const path = `/works/${id}`;
  const alternates = alternatesFor(lang, path);

  return {
    title: project.title,
    description: project.description,
    keywords: project.stacks,
    alternates,
    openGraph: {
      type: "article",
      ...ogLocales(lang),
      url: alternates?.canonical as string,
      siteName,
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
      creator: "@mosiiisom",
    },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/works/[id]">) {
  const { lang, id } = await params;
  if (!hasLocale(lang)) notFound();
  const project = getWork(lang, id);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const url = absoluteUrl(localizePath(lang, `/works/${id}`));
  const homeUrl = absoluteUrl(localizePath(lang, "/"));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.title,
        headline: project.title,
        description: project.description,
        url,
        image: absoluteUrl(project.image),
        inLanguage: localeConfig[lang].hreflang,
        dateCreated: project.year,
        keywords: project.stacks.join(", "),
        creator: { "@id": `${absoluteUrl("/")}/#person` },
        ...(project.live ? { sameAs: project.live } : {}),
        ...(project.github ? { codeRepository: project.github } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.project.home, item: homeUrl },
          { "@type": "ListItem", position: 2, name: dict.project.works, item: `${homeUrl}#projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectView project={project} />
    </>
  );
}
