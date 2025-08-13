import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
//
import Link from "next/link";
import { Metadata } from "next";
//
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const metadata: Metadata = {
  title: `Policies and Procedures`,
  description:
    "Review the important policies and procedures that govern student life and academic integrity at Quantum Institute.",
  keywords: [
    "student policies",
    "academic procedures",
    "Quantum Institute rules",
    "student guidelines",
    "university policies",
  ],
  alternates: {
    canonical: `${SITE_URL}/${slugs.futureStudents}/${slugs.policiesAndProcedures}`,
  },
  openGraph: {
    title: `Policies and Procedures`,
    description:
      "Review the important policies and procedures that govern student life and academic integrity at Quantum Institute.",
    url: `${SITE_URL}/${slugs.futureStudents}/${slugs.policiesAndProcedures}`,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `Policies and Procedures`,
    description:
      "Review the important policies and procedures that govern student life and academic integrity at Quantum Institute.",
  },
};

const page = () => {
  return (
    <ContainerLayout className="text-muted mt-6">
      <Heading className="text-gray-800 mt-6 mb-2" level={1}>
        Policies and Procedures
      </Heading>
      <p>
        Below are QIHE’s policies and procedures that provides comprehensive
        information for everyone in regard to QIHE:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <Link
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
            href="#"
          >
            [Link to Policy 1]
          </Link>
        </li>
        <li>
          <Link
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
            href="#"
          >
            [Link to Policy 2]
          </Link>
        </li>
        <li>
          <Link
            className="text-brand-primary underline hover:text-brand-blue-4 transition-all"
            href="#"
          >
            [Link to Policy 3]
          </Link>
        </li>
      </ul>
    </ContainerLayout>
  );
};

export default page;
