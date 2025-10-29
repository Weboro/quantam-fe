import type { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
import faq from "@/data/faq";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import Accordion from "@/components/accordion";

export const generateMetadata = (): Metadata => ({
  title: `Frequently Asked Questions`,
  description:
    "Got questions about studying at QIHE? Find answers about admissions, programs, support services, and student visas to help you succeed",
  alternates: {
    canonical: `${SITE_URL}/${slugs.discoverQihe}/${slugs.faqs}`,
  },
  openGraph: {
    title: `Frequently Asked Questions`,
    description:
      "Got questions about studying at QIHE? Find answers about admissions, programs, support services, and student visas to help you succeed",
    url: `${SITE_URL}/${slugs.discoverQihe}/${slugs.faqs}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions`,
    description:
      "Got questions about studying at QIHE? Find answers about admissions, programs, support services, and student visas to help you succeed",
  },
});

const FaqPage = () => {
  return (
    <ContainerLayout className="">
      <div className="rich_text_container max-w-2xl mx-auto text-center mb-6">
        <h1>Frequently Asked Questions</h1>

        <p className="">
          Got questions about studying at QIHE? Find answers about admissions,
          programs, support services, and student visas to help you succeed
        </p>
      </div>

      <Accordion data={faq} />
    </ContainerLayout>
  );
};

export default FaqPage;
