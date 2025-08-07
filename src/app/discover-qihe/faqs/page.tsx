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
    <ContainerLayout className="">
      <Heading level={1} className="w-fit mx-auto text-center">
        Frequently Asked Questions
      </Heading>

      <p className="text-muted max-w-xl text-center mx-auto">
        Find answers to common questions about admissions, courses, support
        services, and life at QIHE.
      </p>

      <Accordion data={faq} />
    </ContainerLayout>
  );
};

export default FaqPage;
