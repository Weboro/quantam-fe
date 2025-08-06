import Breadcrumbs from "@/components/global/Breadcrumbs";
import KeyDatesSection from "@/components/sections/KeyDatesSection";
import { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const metadata: Metadata = {
  title: "Key Dates",
  description:
    "Stay updated with important academic dates, deadlines, holidays, and events throughout the academic calendar at Quantum Institute.",
  keywords: [
    "academic calendar",
    "important dates",
    "deadlines",
    "holidays",
    "Quantum Institute events",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/${slugs.keyDates}`,
  },
  openGraph: {
    title: "Key Dates",
    description:
      "Stay updated with important academic dates, deadlines, holidays, and events throughout the academic calendar at Quantum Institute.",
    url: `${SITE_URL}/${slugs.qiheStudents}/${slugs.keyDates}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Dates",
    description:
      "Stay updated with important academic dates, deadlines, holidays, and events throughout the academic calendar at Quantum Institute.",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <div className="mt-6"></div>
      <KeyDatesSection showAll={true} />
    </>
  );
};

export default page;
