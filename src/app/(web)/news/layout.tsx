import Breadcrumbs from "@/components/global/Breadcrumbs";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "News",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "Stay updated with the latest news, announcements, and events from QIHE, covering academic achievements, campus activities, and community stories.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.news}`,
  },
  openGraph: {
    title: "News",
    description:
      "Stay updated with the latest news, announcements, and events from QIHE, covering academic achievements, campus activities, and community stories.",
    url: `${SITE_URL}/${slugs.news}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "News",
    description:
      "Stay updated with the latest news, announcements, and events from QIHE, covering academic achievements, campus activities, and community stories.",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-8 mb-32">{children}</div>

      <NewsLetterSection />
    </>
  );
}
