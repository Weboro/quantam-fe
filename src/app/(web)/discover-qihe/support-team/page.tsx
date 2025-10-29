import type { Metadata } from "next";
import Link from "next/link";
//
import { slugs } from "@/extra/slugs";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";

export const generateMetadata = (): Metadata => ({
  title: `Support Team`,
  description:
    "Meet the support team dedicated to helping QIHE students succeed through academic assistance, counseling, and student services.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.supportTeam}`,
  },
  openGraph: {
    title: `Support Team`,
    description:
      "Meet the support team dedicated to helping QIHE students succeed through academic assistance, counseling, and student services.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.supportTeam}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Support Team`,
    description:
      "Meet the support team dedicated to helping QIHE students succeed through academic assistance, counseling, and student services.",
  },
});

const page = () => {
  return (
    <ContainerLayout className="rich_text_container">
      <h1>The Support Team</h1>
      <p>
        Our Support Team is dedicated to helping students thrive by providing
        access to essential services, personalised guidance, and tailored
        resources throughout their journey from enrolment to graduation.
      </p>
      <p>
        <Link href="#">View Support Staff Profiles</Link>
      </p>
    </ContainerLayout>
  );
};

export default page;
