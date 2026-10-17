import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";

import "../globals.css";
import { Geist, Vazirmatn } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/config/site";
import { getDictionary } from "@/dictionaries";
import { hasLocale, localeConfig, locales } from "@/lib/i18n";
import { alternatesFor, ogLocales } from "@/lib/seo";
import { I18nProvider } from "@/components/I18nProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazirmatn", display: "swap" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).meta;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t.title,
      template: `%s | ${t.siteName}`,
    },
    description: t.description,
    keywords: t.keywords,
    applicationName: t.siteName,
    authors: [{ name: t.personName, url: siteConfig.url }],
    creator: t.personName,
    alternates: alternatesFor(lang, "/"),
    openGraph: {
      type: "website",
      ...ogLocales(lang),
      url: alternatesFor(lang, "/")?.canonical as string,
      title: t.title,
      description: t.description,
      siteName: t.siteName,
      images: [{ url: "/images/OG.png", width: 1200, height: 630, alt: t.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/images/OG.png"],
      creator: "@mosiiisom",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon0.svg", type: "image/svg+xml" },
        { url: "/icon1.png", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <html
        lang={lang}
        dir={localeConfig[lang].dir}
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          GeistPixelSquare.variable,
          "font-sans",
          geist.variable,
          vazirmatn.variable,
        )}
      >
        <body className="min-h-full">
          <I18nProvider locale={lang} dict={getDictionary(lang)}>
            {children}
          </I18nProvider>
        </body>
      </html>
      <Analytics />
    </>
  );
}
