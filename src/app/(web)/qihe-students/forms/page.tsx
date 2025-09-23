import { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";
//
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Forms",
  description:
    "Access and download all necessary student forms, including enrollment, transcript requests, and other administrative documents.",
  keywords: [
    "student forms",
    "enrollment forms",
    "transcript request",
    "Quantum Institute forms",
    "administrative documents",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.qiheStudents}/${slugs.forms}`,
  },
  openGraph: {
    title: "Forms",
    description:
      "Access and download all necessary student forms, including enrollment, transcript requests, and other administrative documents.",
    url: `${SITE_URL}/${slugs.qiheStudents}/${slugs.forms}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Forms",
    description:
      "Access and download all necessary student forms, including enrollment, transcript requests, and other administrative documents.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-brand-primary-black mb-2" level={1}>
        Forms
      </Heading>
      <p>Access important student forms directly below:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2">TODO: List Forms</ul>
    </ContainerLayout>
  );
};

export default page;
