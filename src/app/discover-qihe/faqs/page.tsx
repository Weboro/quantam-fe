import FaqSection from "@/components/sections/FaqSection";
import React from "react";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: `Frequently Asked Questions`,
  description:
    "Find answers to common questions about Quantum Institute, courses, admissions, campus life, and more to help you make informed decisions.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.faqs}`,
  },
  openGraph: {
    title: `Frequently Asked Questions`,
    description:
      "Find answers to common questions about Quantum Institute, courses, admissions, campus life, and more to help you make informed decisions.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.faqs}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions`,
    description:
      "Find answers to common questions about Quantum Institute, courses, admissions, campus life, and more to help you make informed decisions.",
  },
});

const FaqPage = () => {
  return (
    <main className="pt-8">
      <FaqSection />
    </main>
  );
};

export default FaqPage;
