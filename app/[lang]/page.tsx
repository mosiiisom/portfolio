import { notFound } from "next/navigation";
import Home from "@/components/Home";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/dictionaries";
import { hasLocale, localeConfig, localizePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { getWorks } from "@/lib/works";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = getDictionary(lang).meta;
  const works = getWorks(lang);
  const pageUrl = absoluteUrl(localizePath(lang, "/"));
  const personId = `${absoluteUrl("/")}/#person`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: t.personName,
        alternateName: ["Mosi", "Mostafa Dehghani", "مصطفی دهقانی"],
        jobTitle: t.jobTitle,
        url: absoluteUrl("/"),
        image: absoluteUrl("/images/mosi.png"),
        email: `mailto:${siteConfig.email}`,
        address: { "@type": "PostalAddress", addressCountry: "IR" },
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.telegram],
        knowsAbout: [
          "Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Django",
          "PHP", "Laravel", "WordPress", "WooCommerce", "Docker", "Technical SEO",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}/#website`,
        url: absoluteUrl("/"),
        name: t.siteName,
        inLanguage: ["fa-IR", "en"],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.title,
        description: t.description,
        inLanguage: localeConfig[lang].hreflang,
        isPartOf: { "@id": `${absoluteUrl("/")}/#website` },
        mainEntity: { "@id": personId },
        hasPart: works.map((w) => ({
          "@type": "CreativeWork",
          name: w.title,
          url: absoluteUrl(localizePath(lang, `/works/${w.id}`)),
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Home works={works} />
    </>
  );
}
