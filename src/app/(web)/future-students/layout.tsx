import Breadcrumbs from "@/components/global/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Future Students",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "At Quantum Institute, we are committed to providing future students with all the information, guidance, and support they need to take the next step toward academic and career success.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}`,
  },
  openGraph: {
    title: "Future Students",
    description:
      "At Quantum Institute, we are committed to providing future students with all the information, guidance, and support they need to take the next step toward academic and career success.",
    url: `${SITE_URL}/${slugs.futureStudents}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Students",
    description:
      "At Quantum Institute, we are committed to providing future students with all the information, guidance, and support they need to take the next step toward academic and career success.",
  },
};

export default function FutureStudentsLayout({
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
