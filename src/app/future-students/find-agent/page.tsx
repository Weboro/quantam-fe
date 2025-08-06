import Breadcrumbs from "@/components/global/Breadcrumbs";
import AgentFilterSection from "@/components/sections/course/AgentFilterSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const metadata: Metadata = {
  title: `Find an Agent`,
  description:
    "Locate authorized agents and representatives to assist you in your application process at Quantum Institute.",
  keywords: [
    "find agent",
    "authorized agents",
    "student representatives",
    "application assistance",
    "Quantum Institute agents",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.findAgent}`,
  },
  openGraph: {
    title: `Find an Agent`,
    description:
      "Locate authorized agents and representatives to assist you in your application process at Quantum Institute.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.findAgent}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Find an Agent`,
    description:
      "Locate authorized agents and representatives to assist you in your application process at Quantum Institute.",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-6"></div>
      <AgentFilterSection />

      <div className="space-y-40 mt-40">
        <FaqSection />

        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
