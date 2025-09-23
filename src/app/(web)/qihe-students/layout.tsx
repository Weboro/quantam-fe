import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import Breadcrumbs from "@/components/global/Breadcrumbs";
import NewsLetterSection from "@/components/sections/NewsLetterSection";

export const metadata: Metadata = {
  title: {
    default: "QIHE Students",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "Access resources, forms, key dates, and student platforms to support your academic journey at QIHE and enhance your campus experience.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}`,
  },
  openGraph: {
    title: "QIHE Students",
    description:
      "Access resources, forms, key dates, and student platforms to support your academic journey at QIHE and enhance your campus experience.",
    url: `${SITE_URL}/${slugs.qiheStudents}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "QIHE Students",
    description:
      "Access resources, forms, key dates, and student platforms to support your academic journey at QIHE and enhance your campus experience.",
  },
};

export default function QiheStudentsLayout({
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
