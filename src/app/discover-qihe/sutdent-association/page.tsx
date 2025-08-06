import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: `Student Association`,
  description:
    "Learn about the Student Association at Quantum Institute, fostering community, leadership, and engagement among QIHE students.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
  },
  openGraph: {
    title: `Student Association`,
    description:
      "Learn about the Student Association at Quantum Institute, fostering community, leadership, and engagement among QIHE students.",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.studentAssociation}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Student Association`,
    description:
      "Learn about the Student Association at Quantum Institute, fostering community, leadership, and engagement among QIHE students.",
  },
});

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-6 text-muted">
        <Heading className="text-brand-primary-black mt-4 mb-2" level={2}>
          Student Association
        </Heading>
        <p>
          Our Student Association plays an important role in creating a vibrant
          and inclusive campus culture, representing student voices and
          organizing events, support services, and advocacy initiatives.
        </p>
        <p className="mt-2">
          <Link
            href="#"
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
          >
            Meet the Student Association
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
