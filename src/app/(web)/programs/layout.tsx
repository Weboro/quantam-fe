import Breadcrumbs from "@/components/global/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Programs",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "Explore QIHE's diverse academic programs, from diplomas to degrees, designed to prepare you for success in your chosen career and future opportunities.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.programs}`,
  },
  openGraph: {
    title: "Programs",
    description:
      "Explore QIHE's diverse academic programs, from diplomas to degrees, designed to prepare you for success in your chosen career and future opportunities.",
    url: `${SITE_URL}/${slugs.programs}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs",
    description:
      "Explore QIHE's diverse academic programs, from diplomas to degrees, designed to prepare you for success in your chosen career and future opportunities.",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-8 mb-32">{children}</div>

      <div className="space-y-32">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
}
