import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";
import Link from "next/link";

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
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-6 text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={1}>
          The Support Team
        </Heading>
        <p>
          The support staff ensure students have access to essential services,
          guidance, and resources from enrollment to graduation.
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            View Support Staff Profiles
          </Link>
        </p>
      </ContainerLayout>

      <div className="space-y-40 mt-40">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default page;
