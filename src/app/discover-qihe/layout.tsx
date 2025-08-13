import Breadcrumbs from "@/components/global/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Discover Qihe",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "Discover QIHE and explore the unique qualities that make our institution the right choice for your education and future success. Join us to be part of a welcoming, forward-thinking institution that empowers students to achieve their dreams.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}`,
  },
  openGraph: {
    title: "Discover QIHE",
    description:
      "Discover QIHE and explore the unique qualities that make our institution the right choice for your education and future success. Join us to be part of a welcoming, forward-thinking institution that empowers students to achieve their dreams.",
    url: `${SITE_URL}/${slugs.discoverQihe}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover QIHE",
    description:
      "Discover QIHE and explore the unique qualities that make our institution the right choice for your education and future success. Join us to be part of a welcoming, forward-thinking institution that empowers students to achieve their dreams.",
  },
};

export default function DiscoverQiheLayout({
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
